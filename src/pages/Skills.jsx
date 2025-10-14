// src/pages/Skills.jsx
import { FaReact, FaCode, FaServer, FaPalette } from "react-icons/fa"; // Membutuhkan react-icons

const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-sky-300 transition-all duration-500 border-t-4 border-sky-main">
    <div className="text-sky-main mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-2 text-gray-600 list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index} className="hover:text-sky-dark transition">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillSets = [
    {
      icon: <FaReact size={36} />,
      title: "Frontend Development",
      skills: [
        "React.js & Hooks",
        "JavaScript (ES6+)",
        "Redux/Context API",
        "HTML5 & CSS3",
      ],
    },
    {
      icon: <FaPalette size={36} />,
      title: "Styling & Design",
      skills: [
        "Tailwind CSS (Expert)",
        "Bootstrap",
        "Figma to Code",
        "Responsive Design",
      ],
    },
    {
      icon: <FaServer size={36} />,
      title: "Backend & Database",
      skills: [
        "Node.js & Express.js",
        "MongoDB/PostgreSQL",
        "RESTful API Design",
        "Basic Python",
      ],
    },
    {
      icon: <FaCode size={36} />,
      title: "Tools & Workflow",
      skills: ["Git & GitHub", "Webpack/Vite", "VS Code", "Agile/Scrum"],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-sky-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-sky-dark mb-4">
          Keahlian
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Tumpukan teknologi yang saya kuasai.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillSets.map((set, index) => (
            <SkillCard key={index} {...set} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
