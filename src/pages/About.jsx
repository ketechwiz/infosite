import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "ketechwiz@gmail.com", link: "mailto:ketechwiz@gmail.com" },
    { icon: Phone, label: "Phone", value: "832-422-8763" },
    { icon: MapPin, label: "Location", value: "Houston, Texas" },
  ];

  const experiences = [
    {
      role: "Co-Founder & CTO",
      organization: "EnviroCast",
      period: "Sep 2025 - Present",
      location: "Houston, TX (Remote)",
      description: "Leading end-to-end technical vision for AI-driven quantum environmental intelligence platform. Integrated IBM Quantum for personalized weather insights.",
    },
    {
      role: "Co-Founder & CMO",
      organization: "Arc",
      period: "2025",
      location: "San Francisco, CA (YC Agent Jam)",
      description: "Built autonomous AI platform at Y Combinator's Agent Jam. 3rd place finish competing against experienced engineers and founders. Youngest team by years.",
      highlight: "3RD PLACE YC",
    },
    {
      role: "Global Nominee",
      organization: "NASA International Space Apps Challenge",
      period: "Oct 2025 - Present",
      description: "Earned Global Nominee status in NASA's prestigious international hackathon.",
      highlight: "GLOBAL NOMINEE",
    },
    {
      role: "Youth Council Aide & Ambassador",
      organization: "City of Houston Mayor's Office",
      period: "Sep 2024 - Present",
      location: "Houston, TX",
      description: "Contributing to city-wide youth engagement on Educational Equity and Mental Health committees.",
    },
    {
      role: "International 1st Place",
      organization: "CVHS Hacks Global Competition",
      period: "November 2025",
      description: "Developed an application for resource usage tracking using advanced quantum AI.",
    },
    {
      role: "Regional 2nd Place",
      organization: "Texas State Congressional App Challenge",
      period: "November 2025",
      description: "Presented a full environment-focused quantum-integrated interface for predictive analysis, AI training, API interfacing and more.",
    },
    {
      role: "Co-Founder & CTO",
      organization: "STAR Education (Nonprofit)",
      period: "Aug 2022 - Present",
      description: "Founded nonprofit providing free globally-accessible tutoring. Leading technical infrastructure and educational technology initiatives.",
    },
    {
      role: "Senior Tutor",
      organization: "Schoolhouse.world (College Board + Khan Academy)",
      period: "Jan 2023 - Present",
      description: "Providing personalized SAT, computer science, and mathematics coaching to students worldwide.",
    },
  ];

  const skills = {
    "Programming": ["Python", "Java", "Swift", "HTML/CSS/JS", "Node.js"],
    "AI/ML": ["PyTorch", "TensorFlow", "Neural Networks", "Computer Vision"],
    "Tools": ["GitHub", "VSCode", "Google Cloud", "Figma", "Photoshop"],
    "Specialized": ["Quantum Computing", "Medical Imaging", "Full-Stack", "Data Analysis"],
  };

  const certifications = [
    {
      title: "Harvard University (HarvardX)",
      courses: ["CS50", "AI with Python", "Data Science", "Statistics", "Programming with R"],
    },
    {
      title: "University of Michigan",
      courses: ["Python for Everybody", "Data Structures", "Web Data", "Databases"],
    },
    {
      title: "Stanford + DeepLearning.AI",
      courses: ["Supervised ML", "Unsupervised Learning", "Neural Networks", "Advanced Algorithms"],
    },
    {
      title: "American Heart Association",
      courses: ["Basic Life Support / CPR (2022-Present)"],
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
              About Me
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            INNOVATOR &<br />
            <span className="text-yellow-400">PROBLEM SOLVER</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            High school innovator passionate about leveraging AI and technology to solve critical challenges in healthcare, environment, and education.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 grid md:grid-cols-3 gap-6"
        >
          {contactInfo.map((item, idx) => (
            <div key={idx} className="bg-gray-950 border-2 border-gray-800 p-6">
              <item.icon className="w-8 h-8 text-yellow-400 mb-4" />
              <p className="text-sm text-gray-500 font-bold uppercase mb-2">{item.label}</p>
              {item.link ? (
                <a href={item.link} className="font-bold text-lg hover:text-yellow-400 transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="font-bold text-lg">{item.value}</p>
              )}
            </div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black mb-8">
            <span className="text-yellow-400">EDUCATION</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="border-4 border-white bg-black p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black mb-2">CARNEGIE VANGUARD HIGH SCHOOL</h3>
                <p className="text-gray-400 font-medium">Houston, TX</p>
              </div>
              <div className="text-left md:text-right mt-4 md:mt-0">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-black text-sm">
                    GPA: 5.0
                  </span>
                </div>
                <p className="text-gray-400 font-medium">Class of 2028 | Grade 10</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t-2 border-gray-800">
              <div>
                <h4 className="font-black mb-4 text-yellow-400 uppercase tracking-wider">Test Scores</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">ACT</span>
                    <span className="px-3 py-1 bg-blue-600 text-white font-black text-sm">35/36</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">SAT</span>
                    <span className="px-3 py-1 bg-blue-600 text-white font-black text-sm">1560/1600</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">PSAT 10</span>
                    <span className="px-3 py-1 bg-blue-600 text-white font-black text-sm">1470/1520</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">PSAT 8/9</span>
                    <span className="px-3 py-1 bg-blue-600 text-white font-black text-sm">1440/1440</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-black mb-4 text-yellow-400 uppercase tracking-wider">Languages</h4>
                <div className="space-y-2">
                  <p className="font-medium">• English (Native)</p>
                  <p className="font-medium">• French (Proficient)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black mb-8">
            EXPERIENCE & <span className="text-yellow-400">LEADERSHIP</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-950 border-2 border-gray-800 hover:border-yellow-400 transition-all p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-grow">
                    {exp.highlight && (
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-black text-xs uppercase">
                          {exp.highlight}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-black mb-1">{exp.role}</h3>
                    <p className="text-blue-600 font-bold">{exp.organization}</p>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <p className="text-gray-400 text-sm font-medium">{exp.period}</p>
                    {exp.location && <p className="text-gray-600 text-xs">{exp.location}</p>}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black mb-8">
            TECHNICAL <span className="text-yellow-400">SKILLS</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-950 border-2 border-gray-800 p-6"
              >
                <h3 className="text-lg font-black mb-4 text-yellow-400 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black border border-gray-800 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black mb-8">
            CERTIFICATIONS & <span className="text-yellow-400">COURSEWORK</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-950 border-2 border-gray-800 p-6"
              >
                <h3 className="text-lg font-black mb-2">{cert.title}</h3>
                <ul className="space-y-2 mt-4">
                  {cert.courses.map((course, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-yellow-400 mt-1 font-bold">▸</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-yellow-400 p-12 text-center"
        >
          <h3 className="text-3xl font-black mb-6 text-black">LET'S CONNECT</h3>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto font-medium">
            Interested in collaboration, research opportunities, or just want to chat about tech? I'd love to hear from you!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/kavin-elangovan-93b556324/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-black hover:bg-gray-900 text-white font-black px-8">
                <Linkedin className="w-5 h-5 mr-2" />
                LINKEDIN
              </Button>
            </a>
            <a href="mailto:ketechwiz@gmail.com">
              <Button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-black px-8">
                <Mail className="w-5 h-5 mr-2" />
                EMAIL ME
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
