import { useNavigate, useParams } from "react-router-dom";

const ProjectViewer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "To-Do App",
      liveLink: "https://manage-your-todos-sujaygarains-projects.vercel.app/login",
    },
    {
      id:2,
      title:"Currency-Converter App",
      liveLink: "https://currencyconverter-orpin.vercel.app/"
    },
    {
      id:3,
      title:"Food-Recipe App ",
      liveLink: "https://food-recipe-git-main-sujaygarains-projects.vercel.app/"
    }
  ];

  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <p className="text-center mt-20 text-red-500">Project not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-700 text-gray-300 flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-950 border-b border-gray-700">
        <button
          onClick={() => navigate("/main/projects")}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          &larr; Back to Projects
        </button>
        <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
      </div>

      {/* Project Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-5xl h-[80vh] bg-gray-950 rounded-lg overflow-hidden border border-gray-700 shadow-md">
        
          <iframe
            src={project.liveLink}
            title={project.title}
            className="w-full h-full border-none"
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-4 bg-gray-950 text-gray-500 text-sm border-t border-gray-700">
        <p>&copy; 2024 Sujay Garain. All Rights Reserved.</p>
        <p>
          Built with <span className="text-blue-400">React</span> and{" "}
          <span className="text-blue-400">Tailwind CSS</span>
        </p>
      </footer>
    </div>
  );
};

export default ProjectViewer;
