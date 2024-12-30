

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-200">
      <h2 className="text-4xl font-extrabold text-center leading-tight mb-12 text-white">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Skills Section */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Skill Cards */}
            <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-javascript-logo (2).svg"
                alt="Js"
                className="w-12 h-12 inline-block hover:opacity-80 transition-opacity duration-300"
                title="Js"
              />
              <p className="mt-2 text-sm text-white">JavaScript</p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-react (3).svg"
                alt="React"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">React</p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-node-js (3).svg"
                alt="Node.js"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">Node.js</p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-html-5.svg"
                alt="HTML"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-css-logo.svg"
                alt="CSS"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-angularjs (1).svg"
                alt="Angular"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">Angular</p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-tailwind-css.svg"
                alt="Tailwind CSS"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">Tailwind CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-git.svg"
                alt="Git"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">Git</p>
            </div>
              <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-mongodb.svg"
                alt="MongoDB"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">MongoDB</p>
              </div>
              <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-sql.svg"
                alt="SQL"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">SQL</p>
              </div>
              <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-next.js (2).svg"
                alt="Next.js"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">Next.js</p>
              </div>
              <div className="flex flex-col justify-center items-center p-6 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
              <img
                src="/icons8-express-js.svg"
                alt="Express"
                className="w-12 h-12"
              />
              <p className="mt-2 text-sm text-white">Express</p>
              </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">Education</h3>
          <p className="text-lg">
            Bachelor of Computer Application, <br />
            Kazi Nazrul University (2021-2024)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
