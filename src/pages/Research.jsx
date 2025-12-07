import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Research() {
  const conferences = [
    
    {
      name: "Symposium on AI in Learning Health Systems (SAIL2025)",
      date: "May 2025",
      location: "Puerto Rico",
      type: "Poster Presenter & Travel Award Winner",
      organizers: "Harvard Medical School & New England Journal of Medicine",
      presentations: [
        {
          title: "OncoAI: Integrating a Computationally Efficient Deep Learning Model into a Multi-Platform Universally Accessible Application for Accurate Detection of Multiple Cancers Across Diverse Imaging Modalities",
          award: "Travel Award Winner",
        },
        {
          title: "Eyes as Windows to Health: Integrating an Efficient, Generalizable AI Model into a Simple Mobile AI Retina Tracker (SMART) to Revolutionize Ocular and Systemic Healthcare",
          award: "Travel Award Winner",
        },
      ],
    },
    
    {
      name: "ENDO2025 (Endocrine Society)",
      date: "July 2025",
      location: "San Francisco, CA",
      type: "Oral & Poster Presenter",
      presentations: [
        {
          title: "A Universally Accessible, Computationally Efficient, Artificial Intelligence Powered Application for Diagnosing Endocrine Cancers",
          highlight: "Featured in U.S. News & World Report",
        },
        {
          title: "Eyes as Windows to Health: Integrating an Efficient, Generalizable AI Model into a Simple Mobile AI Retina Tracker (SMART) to Revolutionize Ocular and Systemic Healthcare",
        },
      ],
    },
    {
      name: "Rice University AI in Health Conference (AIHC 2025)",
      date: "September 2025",
      location: "Houston, TX",
      type: "Live Presentation",
      presentations: [
        { title: "A novel AI powered HEART: Hypertension Eye Assessment and Risk Tracker for Equitable Detection and Risk Stratification of Hypertensive Retinopathy" },
        { title: "Simple Mobile AI Retina Tracker, SMART, for equitable eyecare and revolutionizing healthcare" },
      ],
    },
    {
      name: "IEEE International Symposium on Biomedical Imaging (ISBI 2025)",
      date: "April 2025",
      location: "Houston, TX",
      type: "Poster & Live Demonstration",
      presentations: [
        { title: "OncoAI: a Universal, Efficient AI Application for Cancer Diagnosis" },
        { title: "Simple Mobile AI Retina Tracker: Redefining Eyecare and Healthcare" },
      ],
    },
  ];

  const awards = [
    {
      title: "State Qualifier, Creative Problem-Solving",
      issuer: "Texas HOSA",
      date: "November 2025",
    },
    {
      title: "Gold Medal for Biomedical Engineering Research",
      issuer: "U.S. Navy Office of Naval Research",
      date: "September 2025",
    },
    {
      title: "Youth Training Advocate",
      issuer: "UNICEF",
      date: "July 2025",
    },
    {
      title: "Semifinalist, EdTalk Youth Innovation Challenge",
      issuer: "City of Houston",
      date: "June 2025",
    },
    {
      title: "1st Place, State Mathematics Championships",
      issuer: "National Beta Club",
      date: "March 2025",
    },
    
    {
      title: "Finalist, Biomedical Engineering Division",
      issuer: "Texas Science & Engineering Fair",
      date: "March 2025",
    },
    
    {
      title: "2nd Place, Biomedical Engineering Division",
      issuer: "Science & Engineering Fair of Houston",
      date: "February 2025",
    },
    {
      title: "President's Volunteer Service Award - Gold",
      issuer: "President's Volunteer Service Award",
      date: "December 2024",
    },
  ];

  const researchAreas = [
    "Artificial Intelligence in Healthcare",
    "Medical Image Analysis",
    "Accessible Healthcare Technology",
    "Quantum Computing Applications",
    "Computer Vision",
    "Deep Learning",
    "Biomedical Engineering",
    "Cancer Detection Systems",
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
              Published Research
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            RESEARCH &<br />
            <span className="text-yellow-400">PUBLICATIONS</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Conducting advanced computational research to develop universally accessible, AI-powered applications for medical diagnosis using novel deep learning algorithms.
          </p>
        </motion.div>

        {/* Research Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black mb-8">
            RESEARCH <span className="text-yellow-400">FOCUS AREAS</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <div className="grid md:grid-cols-4 gap-4">
            {researchAreas.map((area, idx) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-950 border-2 border-gray-800 hover:border-yellow-400 transition-colors p-4 text-center"
              >
                <h3 className="text-sm font-black uppercase tracking-wider">{area}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conference Presentations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black mb-8">
            CONFERENCE <span className="text-yellow-400">PRESENTATIONS</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="space-y-8">
            {conferences.map((conf, idx) => (
              <motion.div
                key={conf.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-4 border-white bg-black p-8"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-black mb-2">{conf.name}</h3>
                  {conf.organizers && (
                    <p className="text-sm text-blue-600 font-bold mb-3">{conf.organizers}</p>
                  )}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-gray-400">
                      <span className="text-yellow-400 font-bold">DATE:</span> {conf.date}
                    </span>
                    <span className="text-gray-400">
                      <span className="text-yellow-400 font-bold">LOCATION:</span> {conf.location}
                    </span>
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white font-bold text-xs uppercase">
                      {conf.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {conf.presentations.map((pres, i) => (
                    <div key={i} className="pl-6 border-l-4 border-yellow-400">
                      <p className="text-gray-300 leading-relaxed mb-2">"{pres.title}"</p>
                      {pres.award && (
                        <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-bold text-xs uppercase">
                          {pres.award}
                        </span>
                      )}
                      {pres.highlight && (
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white font-bold text-xs uppercase">
                          {pres.highlight}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-600 mt-6 font-medium uppercase">
                  ✓ Published in official conference proceedings
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Honors & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black mb-8">
            HONORS & <span className="text-yellow-400">AWARDS</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-950 border-2 border-gray-800 hover:border-yellow-400 transition-colors p-6"
              >
                <h3 className="text-lg font-black mb-2">{award.title}</h3>
                <p className="text-sm text-gray-400 mb-1 font-medium">{award.issuer}</p>
                {award.description && (
                  <p className="text-sm text-gray-600 mb-2">{award.description}</p>
                )}
                <p className="text-xs text-gray-600 uppercase font-bold">{award.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-yellow-400 p-12"
        >
          <div className="text-center mb-12">
            <Award className="w-16 h-16 mx-auto mb-6 text-black" />
            <h3 className="text-3xl font-black mb-6 text-black">RESEARCH IMPACT</h3>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed font-medium">
              Research presented at major international conferences including IEEE ISBI, Endocrine Society, and Harvard Medical School. Featured in U.S. News & World Report and published in official proceedings, advancing AI-powered medical diagnostics.
            </p>
          </div>

          {/* News Articles Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* OncoAI News Articles */}
            <div>
              <h4 className="text-2xl font-black mb-6 text-black">OncoAI NEWS ARTICLES</h4>
              <div className="space-y-3">
                <a
                  href="https://www.usnews.com/news/health-news/articles/2024-06-04/ai-tool-detects-cancer-with-nearly-perfect-accuracy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black hover:bg-gray-900 text-white font-bold py-3 px-4 text-sm transition-colors"
                >
                  U.S. News & World Report: AI Tool Detects Cancer
                </a>
                <a
                  href="https://example.com/oncoai-article-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black hover:bg-gray-900 text-white font-bold py-3 px-4 text-sm transition-colors"
                >
                  Medical Journal Feature
                </a>
                <a
                  href="https://example.com/oncoai-article-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black hover:bg-gray-900 text-white font-bold py-3 px-4 text-sm transition-colors"
                >
                  IEEE ISBI Coverage
                </a>
              </div>
            </div>

            {/* OculAI News Articles */}
            <div>
              <h4 className="text-2xl font-black mb-6 text-black">OculAI NEWS ARTICLES</h4>
              <div className="space-y-3">
                <a
                  href="https://example.com/oculai-article-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black hover:bg-gray-900 text-white font-bold py-3 px-4 text-sm transition-colors"
                >
                  Healthcare Tech Innovation Feature
                </a>
                <a
                  href="https://example.com/oculai-article-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black hover:bg-gray-900 text-white font-bold py-3 px-4 text-sm transition-colors"
                >
                  ENDO2025 Conference Report
                </a>
                <a
                  href="https://example.com/oculai-article-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black hover:bg-gray-900 text-white font-bold py-3 px-4 text-sm transition-colors"
                >
                  Mobile AI Healthcare Breakthrough
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
