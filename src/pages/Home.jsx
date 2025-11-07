import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const stats = [
    { number: "3rd", label: "YC Agent Jam", sublabel: "Out of thousands" },
    { number: "35/36", label: "ACT Score", sublabel: "High achievement" },
    { number: "7+", label: "Publications", sublabel: "Research papers" },
    { number: "5.0", label: "GPA", sublabel: "Academic excellence" },
  ];

  const projects = [
    {
      title: "Arc",
      description: "AI platform giving solo founders a full autonomous team. Built at Y Combinator's Agent Jam 2025.",
      link: "https://getarc.pro",
      tag: "3RD PLACE YC",
      color: "blue",
    },
    {
      title: "EnviroCast",
      description: "Quantum-powered environmental intelligence platform using IBM Quantum for personalized insights.",
      link: "https://www.envirocast.org/",
      tag: "QUANTUM AI",
      color: "yellow",
    },
    {
      title: "OncoAI",
      description: "Universal cancer detection across multiple imaging modalities. Published at IEEE ISBI 2025.",
      link: "https://oncoai.org",
      tag: "HEALTHCARE",
      color: "blue",
    },
    {
      title: "OculAI",
      description: "Mobile AI retina tracker revolutionizing ocular and systemic healthcare through eyes.",
      link: "https://oculai.org",
      tag: "MEDICAL AI",
      color: "yellow",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-black text-sm uppercase tracking-wider">
                  Technical Developer
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                BUILDING THE
                <span className="block text-yellow-400">FUTURE OF AI</span>
              </h1>

              <div className="w-20 h-1 bg-blue-600 mb-8"></div>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                High school innovator developing AI-driven solutions for healthcare and environmental intelligence. 3rd place winner at YC Agent Jam 2025.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("Projects")}>
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-8"
                  >
                    VIEW PROJECTS
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="mailto:ketechwiz@gmail.com">
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-black px-8"
                  >
                    GET IN TOUCH
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Corner accents */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-yellow-400"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-blue-600"></div>
                
                {/* Main photo container */}
                <div className="w-full h-full bg-gray-900 border-4 border-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📸</div>
                    <div className="text-sm text-gray-500 font-bold uppercase">Your Photo Here</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 uppercase">{stat.sublabel}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              FEATURED <span className="text-yellow-400">PROJECTS</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-black border-4 border-white hover:border-yellow-400 transition-all duration-300 p-8"
              >
                <div className="mb-6">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-wider ${
                      project.color === "blue"
                        ? "bg-blue-600 text-white"
                        : "bg-yellow-400 text-black"
                    }`}
                  >
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-black mb-4 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>

                {/* Project iframe */}
                <div className="mt-6 aspect-video bg-gray-900 border-2 border-gray-800 overflow-hidden">
                  <iframe 
                    src={project.link} 
                    className="w-full h-full"
                    title={`${project.title} preview`}
                    loading="lazy"
                  />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to={createPageUrl("Projects")}>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-black px-8"
              >
                VIEW ALL PROJECTS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              TECHNICAL <span className="text-yellow-400">EXPERTISE</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Quantum Computing",
              "Full-Stack Development",
              "Computer Vision",
              "Medical Imaging",
              "Python / PyTorch",
              "Node.js / React",
            ].map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-950 border-2 border-gray-800 hover:border-yellow-400 transition-colors p-6 text-center"
              >
                <h3 className="text-sm font-black uppercase tracking-wider">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-black">
              LET'S BUILD SOMETHING AMAZING
            </h2>
            <p className="text-xl text-black mb-10 max-w-2xl mx-auto font-medium">
              Open to collaborations, research opportunities, and innovative projects. Let's push the boundaries of technology together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:ketechwiz@gmail.com">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-900 text-white font-black px-8"
                >
                  GET IN TOUCH
                </Button>
              </a>
              <Link to={createPageUrl("Research")}>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-black px-8"
                >
                  VIEW RESEARCH
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
