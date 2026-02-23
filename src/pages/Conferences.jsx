import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Users, Calendar, Clock, Play, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Conferences() {
  const [activeTab, setActiveTab] = useState("geo");

  const geoStats = [
    { number: "36", label: "Worldwide Speakers", icon: Users },
    { number: "117", label: "Hackathon Participants", icon: Globe },
    { number: "1", label: "Conferences Held", icon: Calendar },
    { number: "12h 20m", label: "Conferencing Hours", icon: Clock },
  ];

  const geoConferences = [
    {
      title: "From Insight to Impact",
      edition: "Real-World Impact",
      status: "upcoming",
      dates: "May 23–25, 2026",
      location: "Virtual",
      description:
        "Bringing together founders, scientists, researchers, and builders who are creating real-world impact. Free to attend via YouTube livestream.",
      link: "https://geo.envirocast.org/",
      featured: true,
    },
    {
      title: "Furthering the Future",
      edition: "Flagship Event",
      status: "past",
      dates: "February 15–16, 2026",
      location: "Virtual",
      description:
        "Our flagship event focusing on the development and promotion of innovation and pushing boundaries. Experience the future, today.",
      link: "https://geo.envirocast.org/furthering-the-future/",
      watchLinks: [
        { label: "Watch Day 1", url: "https://www.youtube.com/watch?v=MzdCUdKYaIE" },
        { label: "Watch Day 2", url: "https://www.youtube.com/watch?v=_78AWmt2aqg" },
      ],
    },
  ];

  const researchConferences = [
    {
      name: "SAIL 2025",
      full: "Symposium on AI in Learning Health Systems",
      organizer: "Harvard Medical School & NEJM",
      date: "May 2025",
      location: "Puerto Rico",
      type: "Poster Presenter & Travel Award Winner",
      presentations: 2,
      highlight: "Travel Award Winner",
      color: "yellow",
      papers: [
        "OncoAI: Integrating a Computationally Efficient Deep Learning Model into a Multi-Platform Universally Accessible Application for Accurate Detection of Multiple Cancers Across Diverse Imaging Modalities",
        "Eyes as Windows to Health: Integrating an Efficient, Generalizable AI Model into a Simple Mobile AI Retina Tracker (SMART) to Revolutionize Ocular and Systemic Healthcare",
      ],
    },
    {
      name: "ENDO 2025",
      full: "Endocrine Society Annual Meeting",
      organizer: "Endocrine Society",
      date: "July 2025",
      location: "San Francisco, CA",
      type: "Oral & Poster Presenter",
      presentations: 2,
      highlight: "Featured in U.S. News & World Report",
      color: "blue",
      articleLink: { url: "https://endocrinenews.endocrine.org/ai-in-the-family/", text: "Featured in Endocrine News: 'AI in the Family'" },
      papers: [
        "A Universally Accessible, Computationally Efficient, Artificial Intelligence Powered Application for Diagnosing Endocrine Cancers",
        "Eyes as Windows to Health: Integrating an Efficient, Generalizable AI Model into a Simple Mobile AI Retina Tracker (SMART) to Revolutionize Ocular and Systemic Healthcare",
      ],
    },
    {
      name: "AIHC 2025",
      full: "Rice University AI in Health Conference",
      organizer: "Rice University Ken Kennedy Institute",
      date: "September 2025",
      location: "Houston, TX",
      type: "Live Presentation",
      presentations: 3,
      color: "yellow",
      papers: [
        "COLAID: A Novel AI-Application for Accurate Detection of Colorectal Cancers",
        "Simple Mobile AI Retina Tracker, SMART, for equitable eyecare and revolutionizing healthcare",
        "A novel AI powered HEART: Hypertension Eye Assessment and Risk Tracker for Equitable Detection and Risk Stratification of Hypertensive Retinopathy",
      ],
      watchLinks: [
        { label: "Watch COLAID Talk", url: "https://youtu.be/k5Jebw-6KNA?si=vZntrPtd4S37Afs-" },
        { label: "Watch SMART Talk", url: "https://youtu.be/2VlbRA3BazQ?si=DBOXN37Z2VmNoitn" },
      ],
    },
    {
      name: "ACG 2025",
      full: "American College of Gastroenterology",
      organizer: "American College of Gastroenterology",
      date: "October 24–29, 2025",
      location: "Phoenix, AZ",
      type: "Poster Presentations",
      presentations: 7,
      color: "blue",
      papers: [
        "ResNet18-Based Deep Learning for Accurate Classification of Microsatellite Instability in Gastrointestinal Cancers",
        "EfficientNetB0-Based Deep Learning Model for Classification of Microsatellite Instability and Stability in Gastrointestinal Cancers",
        "A New Era in Colorectal Cancer Diagnostics: EfficientNetB0's Impeccable Performance in Histopathological Diagnosis",
        "High-Fidelity Detection of Colorectal Cancer From Histopathological Images Using Artificial Intelligence",
        "A Versatile ResNet18-Based AI Application for High-Precision Colorectal Cancer Detection",
        "A Pioneering Neural Network Model, ResNet18-Powered Universal Application for Pancreatic Cancer Diagnostics",
        "Revolutionizing Early Pancreatic Cancer Detection: EfficientNetB0 Embedded in a Universally Accessible Multiplatform Diagnostic Tool",
      ],
    },
    {
      name: "ISBI 2025",
      full: "IEEE International Symposium on Biomedical Imaging",
      organizer: "Institute of Electrical and Electronics Engineers",
      date: "April 2025",
      location: "Houston, TX",
      type: "Poster & Live Demo",
      presentations: 2,
      color: "yellow",
      papers: [
        "OncoAI: a Universal, Efficient AI Application for Cancer Diagnosis",
        "Simple Mobile AI Retina Tracker: Redefining Eyecare and Healthcare",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-black text-sm uppercase tracking-wider">
              Global Stage
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            INTERNATIONAL<br />
            <span className="text-yellow-400">CONFERENCES</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Working internationally to build the future and support innovators — from organizing global engineering conferences to presenting cutting-edge research at the world's leading institutions.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-0 mb-16 border-4 border-white w-fit">
          <button
            onClick={() => setActiveTab("geo")}
            className={`px-8 py-4 font-black text-sm uppercase tracking-wider transition-all ${
              activeTab === "geo"
                ? "bg-yellow-400 text-black"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            EnviroCast GEO
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`px-8 py-4 font-black text-sm uppercase tracking-wider transition-all border-l-4 border-white ${
              activeTab === "research"
                ? "bg-yellow-400 text-black"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            Research Conferences
          </button>
        </div>

        <AnimatePresence mode="wait">

          {/* ── GEO TAB ── */}
          {activeTab === "geo" && (
            <motion.div
              key="geo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* GEO Hero */}
              <div className="border-4 border-yellow-400 bg-gray-950 p-8 lg:p-14 mb-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
                  <div>
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-black text-xs uppercase tracking-wider mb-5">
                      Founder &amp; Organizer
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black mb-3">EnviroCast GEO</h2>
                    <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                      Global Engineering Outlook
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                      An international conference series designed to explore the most pressing and promising frontiers of technology. We invite you to think boldly about what's next — hosting live virtual conferences and hackathons that bring together global leaders, innovators, and builders.
                    </p>
                  </div>
                  <a
                    href="https://geo.envirocast.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-8 whitespace-nowrap">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      VISIT GEO
                    </Button>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {geoStats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="text-center border-2 border-gray-800 bg-black p-5"
                    >
                      <stat.icon className="w-6 h-6 text-yellow-400 mx-auto mb-3" />
                      <div className="text-3xl lg:text-4xl font-black text-yellow-400 mb-1">{stat.number}</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Conference Cards — newest first */}
              <div className="mb-6">
                <h3 className="text-2xl font-black mb-8">
                  PREMIER <span className="text-yellow-400">GATHERINGS</span>
                </h3>
                <div className="w-16 h-1 bg-blue-600 mb-8"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {geoConferences.map((conf, idx) => (
                  <motion.div
                    key={conf.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`border-4 bg-black p-8 flex flex-col ${
                      conf.status === "upcoming"
                        ? "border-yellow-400"
                        : "border-gray-700"
                    }`}
                  >
                    {/* Status + Edition */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex flex-col gap-2">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-wider w-fit ${
                            conf.status === "upcoming"
                              ? "bg-yellow-400 text-black"
                              : "bg-gray-800 text-gray-300"
                          }`}
                        >
                          {conf.status === "upcoming" ? "⬆ Upcoming" : "✓ Past"}
                        </span>
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-black uppercase tracking-wider w-fit">
                          {conf.edition}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-2xl lg:text-3xl font-black mb-4">{conf.title}</h4>
                    <p className="text-gray-400 leading-relaxed mb-6 flex-grow">{conf.description}</p>

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-yellow-400 shrink-0" />
                        <span className="text-gray-300 font-medium">{conf.dates}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-yellow-400 shrink-0" />
                        <span className="text-gray-300 font-medium">{conf.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      <a
                        href={conf.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white text-white text-xs font-black uppercase hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Details
                      </a>
                      {conf.watchLinks?.map((wl, i) => (
                        <a
                          key={i}
                          href={wl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase transition-colors"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          {wl.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* GEO CTA */}
              <div className="bg-yellow-400 p-10 text-center">
                <h3 className="text-3xl font-black text-black mb-4">JOIN THE NEXT GEO CONFERENCE</h3>
                <p className="text-black font-medium text-lg mb-8 max-w-xl mx-auto">
                  Free to attend via YouTube livestream. Connect with global innovators shaping the future of technology and sustainability.
                </p>
                <a href="https://geo.envirocast.org/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black hover:bg-gray-900 text-white font-black px-10">
                    REGISTER AT GEO
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>
          )}

          {/* ── RESEARCH CONFERENCES TAB ── */}
          {activeTab === "research" && (
            <motion.div
              key="research"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Summary stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                {[
                  { number: "5", label: "Major Conferences" },
                  { number: "16", label: "Total Presentations" },
                  { number: "4", label: "Countries / Regions" },
                  { number: "2025", label: "Year Active" },
                ].map((s, i) => (
                  <div key={i} className="border-2 border-gray-800 bg-gray-950 p-5 text-center">
                    <div className="text-4xl font-black text-yellow-400 mb-1">{s.number}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick grid overview */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-14">
                {researchConferences.map((conf, i) => (
                  <div
                    key={i}
                    className={`border-2 p-5 text-center cursor-default ${
                      conf.color === "yellow"
                        ? "border-yellow-400 bg-black"
                        : "border-blue-600 bg-black"
                    }`}
                  >
                    <div className="text-xl font-black text-white mb-1">{conf.name}</div>
                    <div className="text-xs text-gray-500 mb-3 leading-tight">{conf.organizer}</div>
                    <div className={`text-4xl font-black mb-1 ${conf.color === "yellow" ? "text-yellow-400" : "text-blue-400"}`}>
                      {conf.presentations}
                    </div>
                    <div className="text-xs text-gray-600 uppercase font-bold">Presentations</div>
                  </div>
                ))}
              </div>

              {/* Detailed cards */}
              <div className="space-y-8">
                {researchConferences.map((conf, idx) => (
                  <motion.div
                    key={conf.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="border-4 border-white bg-black p-8"
                  >
                    {/* Header row */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        {conf.highlight && (
                          <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-black text-xs uppercase tracking-wider mb-3">
                            {conf.highlight}
                          </span>
                        )}
                        <h3 className="text-2xl font-black mb-1">{conf.name} — {conf.full}</h3>
                        <p className="text-blue-400 font-bold text-sm">{conf.organizer}</p>
                      </div>
                      <div className="text-left md:text-right shrink-0">
                        <div className="text-sm text-gray-400 mb-1"><span className="text-yellow-400 font-bold">Date:</span> {conf.date}</div>
                        <div className="text-sm text-gray-400 mb-2"><span className="text-yellow-400 font-bold">Location:</span> {conf.location}</div>
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white font-black text-xs uppercase">{conf.type}</span>
                      </div>
                    </div>

                    {/* Presentations */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-4">
                        Presentations ({conf.presentations})
                      </h4>
                      {conf.papers.map((paper, i) => (
                        <div key={i} className="pl-5 border-l-4 border-yellow-400">
                          <p className="text-gray-300 text-sm leading-relaxed">"{paper}"</p>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {conf.watchLinks?.map((wl, i) => (
                        <a
                          key={i}
                          href={wl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase transition-colors"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          {wl.label}
                        </a>
                      ))}
                      {conf.articleLink && (
                        <a
                          href={conf.articleLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {conf.articleLink.text}
                        </a>
                      )}
                    </div>

                    <p className="text-xs text-gray-700 mt-6 font-medium uppercase">
                      ✓ Published in official conference proceedings
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Research CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-14 bg-yellow-400 p-10 text-center"
              >
                <Award className="w-12 h-12 mx-auto mb-5 text-black" />
                <h3 className="text-3xl font-black text-black mb-4">16 PRESENTATIONS ACROSS 5 CONFERENCES</h3>
                <p className="text-black font-medium text-lg mb-8 max-w-2xl mx-auto">
                  Advancing AI-powered medical diagnostics — featured in U.S. News &amp; World Report, IEEE, Harvard Medical School, and more.
                </p>
                <a href="/Research">
                  <Button className="bg-black hover:bg-gray-900 text-white font-black px-10">
                    VIEW FULL RESEARCH PAGE
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
