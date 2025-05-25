import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Gabriel",
    role: "Dev",
    img: "/team/prueba.png",
    linkedin: "...",
    github: "...",
  },
  {
    name: "Andrew",
    role: "Dev",
    img: "/team/prueba.png",
    linkedin: "...",
    github: "...",
  },
  {
    name: "Kelvin",
    role: "Frontend",
    img: "/team/prueba.png",
    linkedin: "...",
    github: "...",
  },
  {
    name: "Joshua",
    role: "Frontend",
    img: "/team/prueba.png",
    linkedin: "...",
    github: "...",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-light uppercase tracking-widest mb-10 text-[#0093d1]">
                Conoce al equipo
            </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4 border-4 border-gray-300">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <div className="flex gap-4 text-gray-500 text-xl">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-gray-700 transition" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-gray-700 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
