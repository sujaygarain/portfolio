import { Link } from "react-router-dom";
import Header from "../components/Header";
import ProfilePicture from "../components/ProfilePicture";

const Home = () => {
  return (
    <div>
      <Header isHome={true} />
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-6">
        <ProfilePicture />
        
        <h2 className="text-3xl font-extrabold mt-6 tracking-wide">Sujay Garain</h2>
        <p className="text-xl font-lg mt-4">Full Stack Developer</p>

        {/* Description */}
        <p className="mb-6 text-lg mt-4 max-w-3xl leading-relaxed">
          I am a passionate and motivated <span className="font-semibold">BCA graduate</span> specializing in full-stack development. 
          Proficient in <span className="font-semibold">JavaScript, React, Node.js</span>, and other modern web technologies, 
          I bring hands-on experience in both front-end and back-end development gained through diverse freelance projects. 
          My ambition is to utilize my technical expertise to create impactful and user-centric solutions that drive innovation and value.
        </p>
        
        <div className="flex space-x-6 mb-6 justify-center">
          <a href="https://www.linkedin.com/in/sujay-garain-16590a223/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.svg" alt="LinkedIn" className="w-8 h-8 inline-block hover:opacity-80 transition-opacity duration-300" title="LinkedIn" />
          </a>
          <a href="https://github.com/sujaygarain" target="_blank" rel="noopener noreferrer">
            <img src="github-.webp" alt="GitHub" className="w-8 h-8 inline-block hover:opacity-80 transition-opacity duration-300" title="GitHub" />
          </a>
          <a href="https://www.instagram.com/sluggish3349/" target="_blank" rel="noopener noreferrer">
            <img src="instagram-logo.svg" alt="Instagram" className="w-8 h-8 inline-block hover:opacity-80 transition-opacity duration-300" title="Instagram" />
          </a>
        </div>
        
        {/* Buttons */}
        <div className="mt-8 space-x-4">
          <a
            href="/my-cv.pdf"
            download="My_CV.pdf"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-300 transform hover:bg-orange-500 hover:-translate-y-1 hover:text-gray-900"
          >
            Download CV
          </a>
          <Link
            to="/main/about"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-300 transform hover:bg-orange-500 hover:-translate-y-1 hover:text-gray-900"
          >
            View More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
