import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Projects = ({ selectedProjectId }) => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "To-Do App",
      description: "A simple task management app built with Vite-React. Users can add, edit, and delete tasks.",
      liveLink: "https://manage-todos-2xeb.vercel.app/", // Replace with your live app URL
    },
    {
      id: 2,
      title: "Currency-Converter App",
      description: "A simple currency converter app built with Vite-React .User can use it for converting currencies.",
      liveLink: "https://currencyconverter-orpin.vercel.app/", // Replace with your live app URL
    },
    {
      id:3,
      title:"Food-Recipe App",
      description:-"A Simple food recipe app built with Vite-React .User can use it for food recipes.",
      liveLink: "https://food-recipe-sujaygarains-projects.vercel.app/"
    }
  ];

  return (
    <section className="py-20 px-6 bg-primary text-neutral">
      <h2 className="text-4xl font-extrabold text-center leading-tight mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/main/project/${project.id}`)} // Navigate to embedded live project
            className={`block bg-gray-800 rounded-lg shadow-md p-6 text-white cursor-pointer transition-all duration-300 hover:border hover:border-accent hover:shadow-lg ${
              selectedProjectId === project.id ? "border-accent shadow-lg" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {
  selectedProjectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Projects;

