import React from 'react';
import { personalInfo, skills } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            {/* <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'm a passionate developer who loves creating innovative solutions and turning complex problems into simple, elegant designs.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">My Story</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
              I'm a Computer Science graduate from Purdue University, with a focus on deep learning, computer vision, and data analysis.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
              My experience spans research and product-oriented work. I enjoy working at the intersection of data and engineering, using strong analysis and product sense to build tools that are both impactful and intuitive.
              </p>
              <p className="text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers in the community.
              </p>

               
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Location</h4>
                <p className="text-slate-600">{personalInfo.location}</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Email</h4>
                <p className="text-slate-600">{personalInfo.email}</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Phone</h4>
                <p className="text-slate-600">{personalInfo.phone}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Skills & Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillCategory, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-slate-800 mb-4">{skillCategory.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white text-slate-600 px-3 py-1 rounded-full text-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;