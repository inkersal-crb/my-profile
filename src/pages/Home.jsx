import { Helmet } from "react-helmet"; 
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
 
function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Helmet>
        <title>Inkersal Mahendran - Full-Stack Developer | React, Node.js, PHP</title>
        <meta
          name="description"
          content="Inkersal Mahendran, a Full-Stack Developer specializing in React, Node.js, and PHP. Crafting scalable and high-performance web applications."
        />
      </Helmet>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
export default Home;