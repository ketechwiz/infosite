import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const mainProjects = [
    {
      title: "EnviroCast",
      tagline: "Quantum-Powered Environmental Intelligence",
      description:
        "AI-driven quantum environmental intelligence platform that personalizes weather and pollution insights based on analysis from IBM Quantum. Leading end-to-end technical vision from data infrastructure to adaptive alert systems.",
      achievement: "NASA Global Nominee",
      highlights: [
        "Quantum computing integration via IBM Quantum",
        "Personalized environmental insights and alerts",
        "Real-time weather and pollution analysis",
        "Localized sensor and near-space data collection",
      ],
      tech: ["Quantum Computing", "AI/ML", "Data Analysis", "Full-Stack", "Node.js", "Python"],
      link: "https://www.envirocast.org/",
      tag: "QUANTUM",
    },
    {
      title: "Arc",
      tagline: "Your AI Startup Team in a Chatroom",
      description:
        "AI platform that gives solo founders a full autonomous team inside a chatroom. Each agent specializes in a domain (engineering, design, growth, ops) and collaborates like a real startup team while you lead as CEO. Built at Y Combinator's Agent Jam 2025.",
      achievement: "3rd Place at YC Agent Jam 2025",
      context: "Our team (T6/60) placed 3rd — hosted inside the Y Combinator office in San Francisco. Out of thousands of applicants, fewer than 10% got in. We were the youngest team there by years, competing against full-stack engineers, grad students, and founders already shipping products.",
      highlights: [
        "Youngest team competing against professional engineers",
        "Autonomous multi-agent collaboration system",
        "Built inside Y Combinator's SF office",
        "Top 10% of thousands of applicants",
      ],
      tech: ["AI Agents", "Full-Stack", "Real-time Collaboration", "LLMs"],
      link: "https://getarc.pro/landing",
      tag: "AGENTIC",
    },
    {
      title: "OncoAI",
      tagline: "Universal AI for Cancer Detection",
      description:
        "Computationally efficient deep learning model integrated into a multi-platform universally accessible application for accurate detection of multiple cancers across diverse imaging modalities.",
      achievement: "Published at IEEE ISBI 2025 & Harvard Medical School",
      highlights: [
        "Universal cancer detection across imaging types",
        "Computationally efficient for deployment",
        "Multi-platform accessibility (web, mobile)",
        "Featured in U.S. News & World Report",
      ],
      tech: ["Deep Learning", "Computer Vision", "Medical Imaging", "PyTorch"],
      link: "https://oncoai.org",
      tag: "RESEARCH",
    },
    {
      title: "OculAI (SMART)",
      tagline: "Mobile AI Retina Tracker",
      description:
        "Simple Mobile AI Retina Tracker revolutionizing ocular and systemic healthcare. Eyes as windows to health — integrating an efficient AI model into accessible mobile technology.",
      achievement: "Presented at ENDO2025 & IEEE ISBI 2025",
      highlights: [
        "Mobile-first AI for retinal analysis",
        "Detects ocular and systemic health conditions",
        "Efficient model for smartphone deployment",
        "Generalizable across diverse populations",
      ],
      tech: ["Machine Learning", "Computer Vision", "Medical AI", "Mobile Development"],
      link: "https://oculai.org",
      tag: "HEALTHCARE",
    },
  ];

  const otherProjects = [
    {
      title: "Tilt",
      description: "Full-stack development for civic engagement platform empowering democratic participation.",
      tech: ["Full-Stack", "AI Integration"],
    },
    {
      title: "EnviroTrack",
      description: "Cross-browser-compatible resource usage tracker extension utilizing advanced quantum AI.",
      tech: ["Quantum Computing", "AI Integration", "Full-Stack"],
    },
    {
      title: "STAR Education",
      description: "Co-founded nonprofit providing free globally-accessible tutoring. Leading technical infrastructure since 2022.",
      tech: ["EdTech", "Data Analytics", "Leadership"],
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-black text-sm uppercase tracking-wider">
              Award-Winning Projects
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            PROJECTS &<br />
            <span className="text-yellow-400">INNOVATION</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            From Y Combinator to NASA Space Apps, building AI solutions that make real-world impact in healthcare, environment, and beyond.
          </p>
        </motion.div>

        {/* Main Projects */}
        <div className="space-y-16 mb-20">
          {mainProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="border-4 border-white hover:border-yellow-400 transition-all duration-300 bg-black">
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                      {project.achievement && (
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-black text-xs uppercase tracking-wider">
                            {project.achievement}
                          </span>
                        </div>
                      )}
                      <h2 className="text-3xl lg:text-4xl font-black mb-3 flex items-center gap-3">
                        {project.title}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </a>
                        )}
                      </h2>
                      <p className="text-lg text-yellow-400 font-bold uppercase tracking-wider">
                        {project.tagline}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white font-black text-xs uppercase tracking-wider">
                      {project.tag}
                    </span>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Description */}
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      {project.context && (
                        <p className="text-gray-400 leading-relaxed">
                          {project.context}
                        </p>
                      )}

                      {/* Highlights */}
                      <div>
                        <h3 className="text-sm font-black text-yellow-400 mb-3 uppercase tracking-wider">
                          Key Highlights
                        </h3>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                              <span className="text-yellow-400 font-bold mt-1">▸</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-900 border border-gray-800 text-sm text-gray-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* EnviroCast Platform Links */}
                      {project.title === "EnviroCast" && (
                        <div className="mt-8 pt-8 border-t-2 border-gray-800">
                          <h4 className="text-sm font-black text-yellow-400 mb-6 uppercase tracking-wider">
                            Platform Ecosystem
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <a
                              href="https://nex.envirocast.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-gray-950 border-2 border-gray-800 hover:border-yellow-400 transition-all p-6 text-center"
                            >
                              <svg className="w-8 h-8 mx-auto mb-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <h5 className="font-black mb-2 group-hover:text-yellow-400 transition-colors">EnviroNex</h5>
                              <p className="text-xs text-gray-400 leading-relaxed">
                                A next-generation environmental monitoring platform, blending precision data with real-time insights.
                              </p>
                            </a>

                            <a
                              href="https://api.envirocast.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-gray-950 border-2 border-gray-800 hover:border-yellow-400 transition-all p-6 text-center"
                            >
                              <svg className="w-8 h-8 mx-auto mb-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                              <h5 className="font-black mb-2 group-hover:text-yellow-400 transition-colors">EnviroCast API</h5>
                              <p className="text-xs text-gray-400 leading-relaxed">
                                Seamlessly connect and integrate environmental intelligence into your applications and services.
                              </p>
                            </a>

                            <a
                              href="https://chat.envirocast.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-gray-950 border-2 border-gray-800 hover:border-yellow-400 transition-all p-6 text-center"
                            >
                              <svg className="w-8 h-8 mx-auto mb-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                              <h5 className="font-black mb-2 group-hover:text-yellow-400 transition-colors">Enviro AI</h5>
                              <p className="text-xs text-gray-400 leading-relaxed">
                                Advanced conversational predictive modeling and analytics to turn complex environmental data into actionable insight.
                              </p>
                            </a>

                            <a
                              href="https://echo.envirocast.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-gray-950 border-2 border-gray-800 hover:border-yellow-400 transition-all p-6 text-center"
                            >
                              <svg className="w-8 h-8 mx-auto mb-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <h5 className="font-black mb-2 group-hover:text-yellow-400 transition-colors">EchoLab</h5>
                              <p className="text-xs text-gray-400 leading-relaxed">
                                An interactive experimentation space for exploring environmental patterns, testing models, and visualizing outcomes with proprietary self-healing quantum algorithms.
                              </p>
                            </a>
                          </div>
                        </div>
                      )}

                    </div>

                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black mb-8">
            OTHER <span className="text-yellow-400">NOTABLE WORK</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-950 border-2 border-gray-800 hover:border-yellow-400 transition-all p-6"
              >
                <h3 className="text-xl font-black mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black border border-gray-800 text-xs text-gray-500 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
