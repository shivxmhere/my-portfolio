import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [analytics, setAnalytics] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [newProject, setNewProject] = useState({ title: "", description: "", tech_stack: "", github_url: "", image_url: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetchAnalytics();
      fetchProjects();
    }
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/analytics", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setAnalytics(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newProject)
      });
      if (res.ok) {
        alert("Project added!");
        setNewProject({ title: "", description: "", tech_stack: "", github_url: "", image_url: "" });
        fetchProjects();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const formData = new FormData();
      formData.append("resume", e.target.files[0]);

      try {
        const res = await fetch("/api/resume", {
          method: "POST",
          headers: { "Authorization": `Bearer ${token}` },
          body: formData
        });
        if (res.ok) {
          alert("Resume uploaded successfully!");
          fetchAnalytics(); // Refresh stats
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!token) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD]">
          <form onSubmit={handleLogin} className="p-8 border border-[#0A0909] rounded-lg w-96 space-y-6">
            <h1 className="text-2xl font-bold uppercase tracking-widest text-center">Admin Login</h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-[#707070] rounded bg-transparent focus:outline-none focus:border-[#0A0909]"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-[#707070] rounded bg-transparent focus:outline-none focus:border-[#0A0909]"
            />
            <button type="submit" className="w-full p-3 bg-[#0A0909] text-[#FDFDFD] uppercase tracking-widest hover:bg-[#9C6455] transition-colors">
              Login
            </button>
          </form>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen p-8 md:p-12 bg-[#FDFDFD]">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold uppercase tracking-tighter">Dashboard</h1>
          <button onClick={() => { setToken(""); localStorage.removeItem("token"); }} className="text-sm underline">Logout</button>
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border border-[#0A0909] rounded-lg">
            <h3 className="text-[#707070] text-sm uppercase tracking-widest mb-2">Page Views</h3>
            <p className="text-4xl font-bold">{analytics?.page_views || 0}</p>
          </div>
          <div className="p-6 border border-[#0A0909] rounded-lg">
            <h3 className="text-[#707070] text-sm uppercase tracking-widest mb-2">Unique Visitors</h3>
            <p className="text-4xl font-bold">{analytics?.unique_visitors || 0}</p>
          </div>
          <div className="p-6 border border-[#0A0909] rounded-lg">
            <h3 className="text-[#707070] text-sm uppercase tracking-widest mb-2">Resume Downloads</h3>
            <p className="text-4xl font-bold">{analytics?.resume_downloads || 0}</p>
          </div>
        </div>

        {/* Add Project */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest">Add New Project</h2>
          <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="p-3 border border-[#707070] rounded bg-transparent"
            />
            <input
              type="text"
              placeholder="Tech Stack (comma separated)"
              value={newProject.tech_stack}
              onChange={(e) => setNewProject({ ...newProject, tech_stack: e.target.value })}
              className="p-3 border border-[#707070] rounded bg-transparent"
            />
            <textarea
              placeholder="Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="p-3 border border-[#707070] rounded bg-transparent md:col-span-2 h-32"
            />
            <input
              type="text"
              placeholder="GitHub URL"
              value={newProject.github_url}
              onChange={(e) => setNewProject({ ...newProject, github_url: e.target.value })}
              className="p-3 border border-[#707070] rounded bg-transparent"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProject.image_url}
              onChange={(e) => setNewProject({ ...newProject, image_url: e.target.value })}
              className="p-3 border border-[#707070] rounded bg-transparent"
            />
            <button type="submit" className="md:col-span-2 p-3 bg-[#0A0909] text-[#FDFDFD] uppercase tracking-widest hover:bg-[#9C6455] transition-colors">
              Add Project
            </button>
          </form>
        </div>

        {/* Resume Upload (Mock) */}
        <div>
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest">Update Resume</h2>
          <div className="p-6 border border-dashed border-[#707070] rounded-lg text-center cursor-pointer hover:bg-[#F5F5F5] transition-colors relative">
            <p className="text-[#707070]">Drag & Drop PDF here or Click to Upload</p>
            <input type="file" onChange={handleResumeUpload} className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
