import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Certificates from '../components/Certificates';
import Achievements from '../components/Achievements';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Projects />
      <Timeline />
      <Certificates />
      <Achievements />
      <Resume />
      <Footer />
    </Layout>
  );
}
