const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-200">
      <h2 className="text-4xl font-extrabold text-center leading-tight mb-12 text-white">About Me</h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Skills Section */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">Skills</h3>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">JavaScript, React, Node.js</li>
            <li className="text-lg">HTML, CSS, Angular</li>
            <li className="text-lg">MongoDB, SQL, Git</li>
            <li className="text-lg">Express, TypeScript, Next.js</li>
          </ul>
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
