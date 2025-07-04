import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Education
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My academic journey in computer science, building a strong foundation in software engineering and advanced computing concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={edu.id} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-slate-600 mb-2">{edu.institution}</h4>
                    <div className="flex items-center text-blue-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{edu.period}</span>
                    </div>
                    {edu.gpa && (
                      <div className="text-slate-600 mb-4">
                        <strong>GPA:</strong> {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-yellow-600 mr-2" />
                    <span className="font-semibold text-slate-800">Key Achievements</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;