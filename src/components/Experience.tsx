import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Work Experience
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My professional journey in software development, building scalable applications and leading development teams.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-1/2'}`}>
                  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">{experience.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{experience.title}</h3>
                    <h4 className="text-lg text-slate-600 mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {experience.company}
                    </h4>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;