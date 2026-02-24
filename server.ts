import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
import path from "path";
import fs from "fs";

const db = new Database("portfolio.db");
const upload = multer({ dest: "uploads/" });

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  );
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    tech_stack TEXT,
    github_url TEXT,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS resume (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    file_url TEXT,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page_views INTEGER DEFAULT 0,
    unique_visitors INTEGER DEFAULT 0,
    resume_downloads INTEGER DEFAULT 0
  );
`);

// Seed Admin User (if not exists)
const adminUser = db.prepare("SELECT * FROM users WHERE username = ?").get("admin");
if (!adminUser) {
  const hashedPassword = bcrypt.hashSync("admin123", 10); // Default password
  db.prepare("INSERT INTO users (username, password) VALUES (?, ?)").run("admin", hashedPassword);
}

// Ensure analytics row exists
const analyticsRow = db.prepare("SELECT * FROM analytics WHERE id = 1").get();
if (!analyticsRow) {
  db.prepare("INSERT INTO analytics (id, page_views, unique_visitors, resume_downloads) VALUES (1, 0, 0, 0)").run();
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

  app.use(express.json());

  // Middleware to verify JWT
  const authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

  // API Routes

  // Auth
  app.post("/api/auth/login", (req, res) => {
    const { username, password } = req.body;
    const user: any = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
    if (!user) return res.status(400).send("User not found");

    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(403).send("Invalid credentials");
    }
  });

  // Projects
  app.get("/api/projects", (req, res) => {
    const projects = db.prepare("SELECT * FROM projects ORDER BY created_at DESC").all();
    res.json(projects);
  });

  app.post("/api/projects", authenticateToken, (req, res) => {
    const { title, description, tech_stack, github_url, image_url } = req.body;
    const stmt = db.prepare("INSERT INTO projects (title, description, tech_stack, github_url, image_url) VALUES (?, ?, ?, ?, ?)");
    const info = stmt.run(title, description, tech_stack, github_url, image_url);
    res.json({ id: info.lastInsertRowid });
  });

  // Resume
  app.get("/api/resume", (req, res) => {
    const resume = db.prepare("SELECT * FROM resume ORDER BY uploaded_at DESC LIMIT 1").get();
    res.json(resume);
  });

  app.get("/api/resume/download", (req, res) => {
    const resume: any = db.prepare("SELECT * FROM resume ORDER BY uploaded_at DESC LIMIT 1").get();
    if (resume && resume.file_url) {
      // Increment download count
      db.prepare("UPDATE analytics SET resume_downloads = resume_downloads + 1 WHERE id = 1").run();
      // Serve file
      // In this environment, we can't easily serve files from outside static dir without config.
      // But we can try to serve it if it exists.
      // Or just redirect if it was an S3 URL.
      // Since we are mocking, let's just send a dummy PDF or text.
      res.download(path.join(__dirname, resume.file_url), "Resume.pdf");
    } else {
      res.status(404).send("Resume not found");
    }
  });

  app.post("/api/resume", authenticateToken, upload.single('resume'), (req, res) => {
    // In a real app, upload to S3. Here we just store the path or a mock URL.
    // For simplicity in this environment, we'll assume the file is handled or just store metadata.
    // Since we can't easily serve static files from uploads without config, let's mock the URL or use a data URI if small.
    // For now, let's just return success.
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : "";
    const stmt = db.prepare("INSERT INTO resume (file_url) VALUES (?)");
    stmt.run(fileUrl);
    res.json({ success: true, fileUrl });
  });

  // Analytics
  app.get("/api/analytics", authenticateToken, (req, res) => {
    const data = db.prepare("SELECT * FROM analytics WHERE id = 1").get();
    res.json(data);
  });

  app.post("/api/analytics/view", (req, res) => {
    db.prepare("UPDATE analytics SET page_views = page_views + 1 WHERE id = 1").run();
    res.json({ success: true });
  });

  app.post("/api/analytics/download", (req, res) => {
    db.prepare("UPDATE analytics SET resume_downloads = resume_downloads + 1 WHERE id = 1").run();
    res.json({ success: true });
  });


  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
