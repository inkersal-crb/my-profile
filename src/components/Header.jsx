import git from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import logo from "../assets/logo.png"; 

const Header = () => (
  <header className="text-center py-10 p-6">
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <img src={logo} className="w-48" alt="logo" />
      </div>
      <h1 className="text-5xl font-extrabold text-yellow-300">Inkersal Mahendran</h1>
      <h2 className="text-2xl text-white-800 mt-2">
        Full-Stack Developer | React | Node.js | PHP
      </h2>
      <p className="text-white-800 mt-4 max-w-3xl mx-auto">
        Passionate about crafting scalable and high-performance web applications
        with modern technologies. Let&apos;s build something amazing together.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://github.com/inkersal501"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-4 rounded-lg bg-white shadow-md hover:bg-yellow-300 transition"
        >
          <img src={git} className="w-7" alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/inkersalmahendran"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-4 rounded-lg bg-white shadow-md hover:bg-yellow-300 transition"
        >
          <img src={linkedin} className="w-7" alt="Linkedin" />
        </a>
      </div>
    </div>
  </header>
);
export default Header;