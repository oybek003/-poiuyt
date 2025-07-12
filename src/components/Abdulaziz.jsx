import React from "react";
import { Code, PenTool, BarChart2 } from "lucide-react";

const Abdulaziz = () => {
  const services = [
    {
      title: "Web Development",
      icon: <Code size={48} className="text-cyan-400 mx-auto mb-4" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure vel alias!",
    },
    {
      title: "Graphic Design",
      icon: <PenTool size={48} className="text-cyan-400 mx-auto mb-4" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure vel alias!",
    },
    {
      title: "Digital Marketing",
      icon: <BarChart2 size={48} className="text-cyan-400 mx-auto mb-4" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure vel alias!",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our <span className="text-cyan-400">Services</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 text-center shadow-md hover:scale-105 transition-transform"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <button className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-cyan-300 transition-colors">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abdulaziz;
