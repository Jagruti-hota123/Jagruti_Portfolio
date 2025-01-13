import { educationData } from "@/Data/data";

const Educard = () => {
  return (
    <div className="education-section py-16 bg-gray-900">
      <h2
        data-aos="fade-up"
        className="text-center text-4xl font-bold text-white mb-12"
      >
        My Education
      </h2>
      <div className="timeline-container max-w-5xl mx-auto px-4 relative">
        {educationData.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`timeline-item mb-12 flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center relative`}
          >
            {/* Indicator with index */}
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-lg font-bold shadow-md z-10">
              {index + 1}
            </div>
            {/* Timeline Line */}
            <div
              className="absolute w-1 bg-indigo-700 h-full top-0 left-5 lg:left-1/2 transform -translate-x-1/2"
              style={{ zIndex: -1 }}
            ></div>
            {/* Card */}
            <div
              className={`timeline-content bg-gray-800 shadow-lg rounded-lg p-6 ${
                index % 2 === 0 ? "ml-8 lg:ml-12" : "mr-8 lg:mr-12"
              }`}
            >
              <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                {item.degree}
              </h3>
              <p className="text-gray-300 font-medium">{item.institute}</p>
              <p className="text-gray-400 text-sm">{item.year}</p>
              <p className="mt-4 text-gray-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educard;
