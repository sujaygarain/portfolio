import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MainPage = () => {
  const { section } = useParams();
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (section === "about") aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "projects") projectsRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "contact") contactRef.current.scrollIntoView({ behavior: "smooth" });
  }, [section]);

  const handleProjectClick = (id) => {
    setSelectedProjectId(id);
    navigate(`/main/projects/${id}`); // Redirect to dynamic project route
  };

  return (
    <div className="bg-neutral text-primary min-h-screen flex flex-col">
      <Header isHome={false} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects onProjectClick={handleProjectClick} selectedProjectId={selectedProjectId} />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
