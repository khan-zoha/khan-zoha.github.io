export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "Zoha Khan",
  title: "AI/ML Engineer",
  email: "kzoha2005@gmail.com",
  phone: "+1 (765) 694-5152",
  location: "San Francisco, CA",
  github: "https://github.com/khan-zoha",
  linkedin: "https://www.linkedin.com/in/zohakhan18/",
  website: "https://khan-zoha.github.io/",
  bio: "Computer Science graduate from Purdue with a focus on AI, data analysis, and product-driven development"
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineer - Research Fellow",
    company: "Purdue University",
    period: "August 2023 - May 2024",
    description: "Implemented Differentially Private Stochastic Gradient Descent (DPSGD) across multiple deep learning frameworks including PyTorch, TensorFlow, and JAX. Optimized training pipelines in JAX using XLA (Accelerated Linear Algebra) and just-in-time compilation to improve training speed by 3x.",
    technologies: ["Python", "TensorFlow", "Pytorch", "JAX", "GPU", "Linux"]
  },
  {
    id: "2",
    title: "Data Scientist - Research Fellow ",
    company: "Data Science and AI Lab, NYU Abu Dhabi ",
    period: "June 2022 - June 2023",
    description: "Conducted large-scale NLP analysis on over 1 million news articles from The New York Times and Fox News, spanning a 10-year period, to uncover patterns of media bias toward ethnic groups. Developed and trained Word2Vec models to generate high-dimensional word embeddings. Discovered and validated a 300% increase in negative semantic bias toward people of color.",
    technologies: ["NLP", "Python", "Postgres", "Selenium"]
  }
  // {
  //   id: "3",
  //   title: "Frontend Developer",
  //   company: "Creative Agency",
  //   period: "2019 - 2020",
  //   description: "Built responsive websites and interactive user interfaces for various clients. Collaborated with designers to implement pixel-perfect designs.",
  //   technologies: ["React", "SCSS", "Webpack", "Git", "Figma"]
  // }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Master of Science in Computer Science",
    institution: "Purdue University",
    period: "August 2023 - May 2025",
    gpa: "3.94/4.0",
    description: "Specialized in Machine Learning and Distributed Systems",
    achievements: [
      "Graduate Research Assistant",
      "Graduate Teaching Assistant for Computer Security and Computer Architecture"
    ]
  },
  {
    id: "2",
    degree: "Bachelor of Science in Computer Science",
    institution: "Lahore University of Management Science",
    period: "August 2019 - May 2023",
    gpa: "3.90/4.0",
    description: "Major in Computer Science with focus on Software Engineering",
    achievements: [
      "Dean's List for 8 consecutive semesters",
      "Teaching Assistant for Computer Security",
      "Chair IEEE Women in Engineering "
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Trimming the Transformer",
    description: "Designed and evaluated transformer variants to explore efficiency-accuracy tradeoffs. Developed and tested custom activation functions (FReLU, SGH, ISRU), with FReLU achieving best F1 score of 81.09% on QA benchmarks.",
    technologies: ["Transformers", "Deep Learning", "PyTorch", "BERT", "SQuAD"],
    // githubUrl: "https://github.com/khan-zoha/Transformer-from-Scratch",
    liveUrl: "",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "2",
    title: "Maintenance AI Chatbot",
    description: "Built an AI-powered home maintenance chatbot integrating closed-source LLM APIs. Securely deployed on Netlify and optimized for mobile responsiveness.",
    technologies: ["LLM", "Full-Stack Development", "Gemini AI"],
    githubUrl: "https://github.com/khan-zoha/maintenance-ai",
    liveUrl: "https://maintenanceai.netlify.app/",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "3",
    title: "Fare Wars",
    description: "Developed and tested a fare prediction model using NYC FHC Trip data using XGBoost, Random Forest andLinear Regression model. Achieved near-zero error with XGBoost. Model successfully enable a new entrant to offer competitive prices.",
    technologies: ["Python", "XGBoost", "scikit-learn", "Machine Learning"],
    githubUrl: "",
    liveUrl: "",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "4",
    title: "Mask/Non-Mask Person Detection",
    description: " Achieved 87% accuracy for Mask/Non-Mask Person Detection using YOLO object detector. Applied perspective transformation and image stitching, merging multi-camera footage to a unified top-down view. Implemented heatmap Visualization across the campus. Reduced COVID'19 cases on campus by 40%.",
    technologies: ["Computer Vision", "YOLO", "OpenCV", "Object Detection"],
    githubUrl: "",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "5",
    title: "Transformer From Scratch",
    description: "Experiment training a causal language model using a custom GPT-style Transformer.",
    technologies: ["Transformers", "Deep Learning"],
    githubUrl: "https://github.com/khan-zoha/Transformer-from-Scratch",
    liveUrl: "",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
  },


];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["C++", "Java", "SQL", "Python (TensorFlow, Pytorch, JAX)", "Haskell"]
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "SCSS", "Javascript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Figma", "Linux", "Agile"]
  }
];