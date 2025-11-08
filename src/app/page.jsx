"use client";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });
// Suppress specific React hydration warning in development (e.g., Grammarly extension)
if (process.env.NODE_ENV === "development") {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes(
        "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties"
      )
    ) {
      return; // ignore this specific hydration warning
    }
    originalConsoleError(...args);
  };
}
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileAlt, FaComments, FaUserTie } from "react-icons/fa";
import { FaPython, FaRobot, FaBrain } from "react-icons/fa";
import { FaCloud, FaShieldAlt } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import {
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaChartLine,
  FaLightbulb,
  FaChartBar,
  FaLayerGroup,
  FaDatabase,
} from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";

const HydrationSafe = ({ children }) => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;
  return children;
};

export default function TessaCloudLanding() {
  const [showAll, setShowAll] = React.useState(false);
  const [selectedInternship, setSelectedInternship] = React.useState(null);
  const [showAbout, setShowAbout] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);
  // Accordion state for Resume Writing
  const [showResumeAccordion, setShowResumeAccordion] = React.useState(false);

  // Ref for popular categories section
  const popularCategoriesRef = React.useRef(null);

  const internships = [
    {
      title: "DSA using C++",
      iconName: "FaCode",
      duration: "6 Months",
      mode: "Online",
      color: "blue-400",
    },
    {
      title: "Web Development",
      iconName: "FaGlobe",
      duration: "4-12 weeks",
      mode: "Online",
      color: "green-400",
    },
    {
      title: "Mobile App Development",
      iconName: "FaMobileAlt",
      duration: "4-12 weeks",
      mode: "Hybrid",
      color: "purple-400",
    },
    {
      title: "Machine Learning / AI",
      iconName: "FaRobot",
      duration: "6-24 weeks",
      mode: "Hybrid",
      color: "yellow-400",
    },
    {
      title: "Data Science & Analytics",
      iconName: "FaChartLine",
      duration: "4-12 weeks",
      mode: "Online",
      color: "red-400",
    },
    {
      title: "Cybersecurity Basics",
      iconName: "FaShieldAlt",
      duration: "4-12 weeks",
      mode: "Online",
      color: "blue-500",
    },
    {
      title: "Desktop App Development",
      iconName: "FaDesktop",
      duration: "4-12 weeks",
      mode: "Hybrid",
      color: "indigo-400",
    },
    {
      title: "Software Testing & QA",
      iconName: "FaCheckCircle",
      duration: "4-12 weeks",
      mode: "Online",
      color: "green-500",
    },
    {
      title: "DevOps / Cloud Basics",
      iconName: "FaCloud",
      duration: "4-12 weeks",
      mode: "Hybrid",
      color: "teal-400",
    },
    {
      title: "Open Source Contribution",
      iconName: "FaGithub",
      duration: "4-12 weeks",
      mode: "Remote",
      color: "gray-400",
    },
    {
      title: "Game Development (Beginner)",
      iconName: "FaGamepad",
      duration: "4-12 weeks",
      mode: "Hybrid",
      color: "pink-400",
    },
    {
      title: "Full Stack Development (6 Months)",
      iconName: "FaLayerGroup",
      duration: "6 Months",
      mode: "Hybrid",
      color: "orange-400",
    },
  ];

  const trainings = [
    {
      title: "Resume Building",
      icon: <FaFileAlt className="text-2xl text-blue-400" />,
    },
    {
      title: "Mock Interviews",
      icon: <FaComments className="text-2xl text-green-400" />,
    },
    {
      title: "Soft Skills Training",
      icon: <FaUserTie className="text-2xl text-yellow-400" />,
    },
    {
      title: "LinkedIn Optimization",
      icon: <FaLinkedinIn className="text-2xl text-blue-500" />,
    },
  ];

  // Mobile menu toggle state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Handler to scroll to popular categories section
  const handleScrollToPopularCategories = React.useCallback(() => {
    if (popularCategoriesRef.current) {
      popularCategoriesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  // Define rows explicitly
  const firstRow = [
    "Web Development",
    "Cybersecurity",
    "Machine Learning / AI",
    "Data Science & Analytics",
  ];
  const secondRow = [
    "Mobile App Development",
    "Desktop App Development",
    "Full Stack Development",
    "Software Testing & QA",
  ];
  const remaining = ["DevOps / Cloud", "Open Source", "Game Development"];

  // Map titles to internship objects
  const rows = [
    firstRow.map((title) => internships.find((i) => i.title === title)),
    secondRow.map((title) => internships.find((i) => i.title === title)),
    remaining.map((title) => internships.find((i) => i.title === title)),
  ];

  const displayedInternships = firstRow.map((title) => {
    return (
      internships.find((i) => i.title === title) ||
      internships.find((i) =>
        i.title.toLowerCase().includes(title.toLowerCase())
      ) || { title, iconName: "FaQuestionCircle", mode: "N/A", duration: "N/A" }
    );
  });

  return (
    <>
      <Head>
        <title>Tessa Learn</title>
        <meta name="application-name" content="Tessa Learn" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-gray-800 font-inter">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/90 border-b border-gray-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Left: Logo and Title */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Tessa Learn Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <span
                className={`text-lg md:text-xl font-semibold text-white ${rubik.className}`}
              >
                Tessa Learn
              </span>
            </div>

            {/* Center: Navigation Links */}
            <nav className="hidden md:flex gap-8 text-xs lg:text-sm text-white font-medium tracking-wide">
              <a href="#" className="hover:text-red-500 transition">
                Home
              </a>
              <a href="#courses" className="hover:text-red-500 transition">
                Courses
              </a>
              <a
                href="#internships"
                className="hover:text-red-500 transition"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToPopularCategories();
                }}
              >
                Internships
              </a>
              <a
                href="#placement-support"
                className="hover:text-red-500 transition"
              >
                Placement Support
              </a>
              <a href="#downloads" className="hover:text-red-500 transition">
                Downloads
              </a>
              <a
                href="#"
                className="hover:text-red-500 transition"
                onClick={() => setShowAbout(true)}
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-red-500 transition"
                onClick={() => setShowContact(true)}
              >
                Contact Us
              </a>
            </nav>

            {/* Right: Social Icons */}
            <div className="flex gap-5 text-gray-400 text-lg">
              <a
                href="https://www.facebook.com/people/Tessa-Cloud/61581878499209/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/its_tessa_cloud/?igsh=dzRyaHBtY2tod3hx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/tessacloud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <button
                aria-label="toggle mobile menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-xl text-white"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
              <div className="flex flex-col py-3 px-6 space-y-3 text-white">
                <a
                  href="#"
                  className="hover:text-red-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#internships"
                  className="hover:text-red-500 transition"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToPopularCategories();
                  }}
                >
                  Internships
                </a>
                <a
                  href="#courses"
                  className="hover:text-red-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Courses
                </a>
                <a
                  href="#placement-support"
                  className="hover:text-red-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Placement Support
                </a>
                <a
                  href="#downloads"
                  className="hover:text-red-500 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Downloads
                </a>
                <a
                  href="#"
                  className="hover:text-red-500 transition"
                  onClick={() => {
                    setShowAbout(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="hover:text-red-500 transition"
                  onClick={() => {
                    setShowContact(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </header>

        <main className="pt-24">
          {/* About Us Popup */}
          <HydrationSafe>
            <AnimatePresence>
              {showAbout && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
                  onClick={() => setShowAbout(false)}
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="bg-gradient-to-br from-gray-900 to-black text-gray-200 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full p-8 relative"
                  >
                    <button
                      onClick={() => setShowAbout(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                      About Tessa Cloud
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Tessa Cloud builds intelligent enterprise-grade software
                      applications leveraging AI to solve complex business
                      challenges efficiently. Our solutions automate workflows,
                      enhance productivity, and empower innovation. With a focus
                      on cutting-edge technology, Tessa Cloud delivers scalable
                      and secure solutions tailored to enterprise needs.
                    </p>
                    <div className="mt-4 text-sm text-gray-400 italic">
                      “Innovate. Automate. Elevate.”
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </HydrationSafe>
          {/* Contact Us Popup */}
          <HydrationSafe>
            <AnimatePresence>
              {showContact && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
                  onClick={() => setShowContact(false)}
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="bg-gradient-to-br from-gray-900 to-black text-gray-200 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full p-8 relative"
                  >
                    <button
                      onClick={() => setShowContact(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                      Contact Tessa Cloud
                    </h3>
                    <div className="space-y-4 text-sm">
                      <p>
                        We’d love to hear from you! Reach out to us via email or
                        phone.
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@tessacloud.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          info@tessacloud.com
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong>{" "}
                        <a
                          href="tel:+911234567890"
                          className="text-blue-400 hover:underline"
                        >
                          +91 12345 67890
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </HydrationSafe>
          {/* Hero */}
          <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-snug text-white mb-4">
                Explore Your Courses <br />
                and Internship <br /> Opportunities
              </h1>
              <p className="text-gray-400 text-base md:text-lg mb-8">
                Choose your internship duration and find the perfect learning
                path!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button
                  onClick={() => handleScrollToPopularCategories()}
                  className="px-6 py-2.5 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium text-sm md:text-base shadow-md transition"
                >
                  View Internships
                </button>
                <button
                  onClick={() => alert("Courses section coming soon!")}
                  className="px-6 py-2.5 rounded-md border border-red-600 text-white hover:bg-red-600/10 font-medium text-sm md:text-base transition"
                >
                  View Courses
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full flex justify-center">
              <div
                className="flex-1 w-full"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="w-full h-72 md:h-96 rounded-2xl bg-[#000000] flex items-center justify-center overflow-hidden shadow-lg">
                  <img
                    alt="Hero banner"
                    className="w-full h-full object-cover rounded-2xl"
                    src="/wmremove-transformed.png"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section
            id="about-tessa-learn"
            className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10"
          >
            {/* Left Image */}
            <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-[45%]">
              <img
                src="/about_us.png"
                alt="Tessa Cloud Logo"
                className="w-[90%] h-80 md:h-96 rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 w-full flex flex-col justify-center items-start h-80 md:h-96">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent tracking-wide text-left">
                About Tessa Learn
              </h2>
              <p className="text-gray-300 leading-snug mb-6">
                <strong>Tessa Learn</strong> is the learning and internship
                platform powered by <strong>Tessa Cloud</strong>. It bridges the
                gap between education and employability through
                industry-relevant internships, project-based courses, and guided
                mentorship. We focus on building technical confidence and
                providing real-world exposure to students and young
                professionals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-red-400">
                    Our Mission
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    To empower learners with practical knowledge, real projects,
                    and industry connections that prepare them for a successful
                    tech career.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-red-400">
                    Our Vision
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    To create a next-generation ecosystem where learning meets
                    innovation, and every student finds a pathway from
                    internship to placement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Courses Section */}
          <section id="courses" className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent tracking-wide text-center">
              Explore Our Courses
            </h2>
            <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
              Learn skills that empower your career and mindset. Each course is
              crafted to connect logic with creativity — designed to help you
              grow both technically and personally.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {/* Course Card 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-2xl text-blue-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
                  </svg>
                  <div className="text-lg font-semibold">
                    React JS & Next.js
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>

              {/* Course Card - Python Web Development */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaPython className="text-2xl text-yellow-400" />
                  <div className="text-lg font-semibold">
                    Python Web Development
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>

              {/* Course Card - Data Science with Python */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaRobot className="text-2xl text-green-400" />
                  <div className="text-lg font-semibold">
                    Data Science with Python
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>

              {/* Course Card - Machine Learning with Python */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaBrain className="text-2xl text-pink-400" />
                  <div className="text-lg font-semibold">
                    Machine Learning with Python
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4–6 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>
              {/* Course Card - Data Analytics with Python */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaChartLine className="text-2xl text-purple-400" />
                  <div className="text-lg font-semibold">
                    Data Analytics with Python
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>
              {/* Course Card - Data Analytics with Power BI, Tableau & Excel */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaChartBar className="text-2xl text-teal-400" />
                  <div className="text-lg font-semibold">
                    Data Analytics with Power BI, Tableau & Excel
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>
              {/* Course Card - Full Stack Web App Development with Python */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaLayerGroup className="text-2xl text-orange-400" />
                  <div className="text-lg font-semibold">
                    Full Stack Web App Development with Python
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>8–12 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>
              {/* Course Card - SQL for Developers */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaDatabase className="text-2xl text-indigo-400" />
                  <div className="text-lg font-semibold">
                    SQL for Developers
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>

              {/* Course Card - DevOps Essentials */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaCloud className="text-2xl text-white" />
                  <div className="text-lg font-semibold">DevOps Essentials</div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>

              {/* Course Card - Full Stack Web Development with Java */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaJava className="text-2xl text-orange-500" />
                  <div className="text-lg font-semibold">
                    Full Stack Web Development with Java
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>8–12 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>

              {/* Course Card - Cloud Computing Basics */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaCloud className="text-2xl text-teal-400" />
                  <div className="text-lg font-semibold">
                    Cloud Computing Basics
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>

              {/* Course Card - Cybersecurity Essentials */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <FaShieldAlt className="text-2xl text-red-500" />
                  <div className="text-lg font-semibold">
                    Cybersecurity Essentials
                  </div>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1 flex-grow">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span>Online</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyVDZJgq4iQaTwsTepdgL6kIb7Aso5VqFByZ9faEfER3I_sw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Brochure and Certifications Section */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col items-center gap-10 w-full">
              {/* Download Brochure Card */}
              <div className="bg-[#0A0F1C] border-2 border-cyan-400 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all max-w-5xl w-full">
                <div>
                  <h3 className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    Download Our Brochure
                  </h3>
                  <p className="text-gray-400 max-w-2xl">
                    Get a detailed overview of Tessa Learn programs, internship
                    tracks, and placement support in our official brochure.
                  </p>
                </div>
                <a
                  href="/tessa_learn_opportunities.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-md hover:scale-105 transition-transform"
                >
                  📄 Download Brochure
                </a>
              </div>

              {/* Certification Card */}
              <div className="bg-[#0A0F1C] border-2 border-yellow-400 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-[0_0_20px_rgba(255,255,0,0.1)] hover:shadow-[0_0_25px_rgba(255,255,0,0.2)] transition-all max-w-5xl w-full">
                <div>
                  <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-3">
                    Tessa Learn Certifications
                  </h3>
                  <p className="text-gray-400 max-w-2xl">
                    Every learner receives a{" "}
                    <strong>Tessa Learn Course Certificate</strong> or{" "}
                    <strong>Internship Completion Certificate</strong> verified
                    by <strong>Tessa Cloud</strong>. Each certificate carries a{" "}
                    <strong>unique verification ID</strong> that companies can
                    validate directly through nessa Cloud’s platform — ensuring
                    trust and authenticity in every credential.
                  </p>
                </div>
                <a
                  href="/Sample_Certificate_Tessa_Learn.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
                >
                  View Sample Certificate →
                </a>
              </div>
            </div>
          </section>

          {/* Downloads Section */}
          <section id="downloads" className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Downloads
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="/tessa_learn_opportunities.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-md hover:scale-105 transition-transform"
              >
                📘 Training Brochure
              </a>
              <a
                href="/Sample_Certificate_Tessa_Learn.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
              >
                📄 Courses Brochure
              </a>
            </div>
          </section>

          {/* Internship Cards */}
          <section
            id="internships"
            className="max-w-7xl mx-auto px-6 py-12"
            ref={popularCategoriesRef}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent tracking-wide text-center">
              Unlock Your Future | Explore Opportunities That Shape You
            </h2>
            <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
              Every great career begins with a single step. Discover internships
              designed to fuel your curiosity, challenge your creativity, and
              launch your professional journey.
            </p>
            <p className="text-center text-gray-300 mb-10 text-base font-medium">
              Explore Internship Opportunities with Tessa Learn and gain
              real-world exposure across tech domains.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {displayedInternships.map((it) => {
                const IconComponent = FaIcons[it.iconName];
                return (
                  <HydrationSafe key={it.title}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow min-h-[260px] flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {IconComponent && (
                          <IconComponent
                            className={`text-2xl ${
                              it.title === "Mobile App Development"
                                ? "text-purple-400"
                                : it.color === "blue-400"
                                ? "text-blue-400"
                                : it.color === "green-400"
                                ? "text-green-400"
                                : it.color === "yellow-400"
                                ? "text-yellow-400"
                                : it.color === "red-400"
                                ? "text-red-400"
                                : it.color === "blue-500"
                                ? "text-blue-500"
                                : it.color === "indigo-400"
                                ? "text-indigo-400"
                                : it.color === "green-500"
                                ? "text-green-500"
                                : it.color === "teal-400"
                                ? "text-teal-400"
                                : it.color === "gray-400"
                                ? "text-gray-400"
                                : it.color === "pink-400"
                                ? "text-pink-400"
                                : it.color === "orange-400"
                                ? "text-orange-400"
                                : "text-white"
                            }`}
                          />
                        )}
                        <div className="text-lg font-semibold">{it.title}</div>
                      </div>
                      <div className="text-sm text-gray-400 mt-2 flex flex-col gap-2 flex-grow">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{it.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mode:</span>
                          <span>{it.mode}</span>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <button
                          onClick={() => setSelectedInternship(it)}
                          className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-700 via-red-500 to-gray-900 text-white font-semibold shadow-[0_0_6px_rgba(255,0,85,0.2)] hover:shadow-[0_0_10px_rgba(255,0,85,0.3)] transition-all duration-300 hover:scale-105 hover:from-gray-900 hover:to-red-700"
                        >
                          <span className="tracking-wide">View Details →</span>
                        </button>
                      </div>
                    </motion.div>
                  </HydrationSafe>
                );
              })}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 rounded-md bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                {showAll ? "View Less ▲" : "View More ▼"}
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-10 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 p-[2px] rounded-xl shadow-lg"
            >
              <div className="bg-gray-900 p-8 rounded-xl text-white relative overflow-hidden">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent tracking-wide"
                >
                  ✨ Why Choose <span className="text-white">Tessa Learn?</span>
                </motion.h3>

                <ul className="space-y-4 text-gray-300 text-sm md:text-base relative z-10">
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaChalkboardTeacher className="text-yellow-400 text-xl" />
                    <span>
                      <strong>Hands-on Learning:</strong> Work on real projects
                      from Day 1 and build an impressive portfolio employers
                      love.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaProjectDiagram className="text-green-400 text-xl" />
                    <span>
                      <strong>Integrated Projects:</strong> Collaborate with
                      mentors and peers on live products — the ultimate skill
                      booster.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaChartLine className="text-blue-400 text-xl" />
                    <span>
                      <strong>Career Growth:</strong> From internship to
                      placement — Tessa Learn bridges the gap between learning
                      and earning.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaLightbulb className="text-pink-400 text-xl" />
                    <span>
                      <strong>Creative Edge:</strong> Learn with purpose. Build
                      with passion. Leave your digital footprint with
                      innovation.
                    </span>
                  </motion.li>
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="mt-6 text-center text-sm md:text-base italic text-gray-400"
                >
                  “Your journey to brilliance starts here — innovate, grow, and
                  make a mark with Tessa Learn.”
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-red-400 to-yellow-300 opacity-20 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-r from-pink-500 to-blue-400 opacity-20 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          </section>

          {selectedInternship && (
            <HydrationSafe>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm overflow-y-auto p-4"
                style={{ WebkitOverflowScrolling: "touch" }}
                onClick={() => setSelectedInternship(null)}
              >
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-3xl w-full shadow-2xl border border-gray-700 relative"
                >
                  <button
                    onClick={() => setSelectedInternship(null)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                  >
                    ✕
                  </button>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                    {selectedInternship.title}
                  </h3>
                  <div className="text-gray-300 space-y-4 text-sm">
                    <p>
                      <strong>Duration:</strong> {selectedInternship.duration} |{" "}
                      <strong>Mode:</strong> {selectedInternship.mode}
                    </p>
                    <p>
                      <strong>About:</strong> Explore practical experience and
                      gain industry exposure through our{" "}
                      {selectedInternship.title} internship.
                    </p>
                    <p>
                      <strong>Highlights:</strong> Hands-on projects,
                      mentorship, and skill development focused on{" "}
                      {selectedInternship.title}.
                    </p>
                  </div>

                  {selectedInternship.title === "Web Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Frontend:</strong> HTML, CSS, JavaScript, React,
                        Vue
                      </p>
                      <p>
                        <strong>Backend:</strong> Node.js, Express, Django,
                        Flask
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Build a portfolio
                        website, to-do app, or blog CMS
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Cybersecurity" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Topics:</strong> Network security, OWASP Top 10,
                        Ethical Hacking (Kali Linux), Web vulnerabilities
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Basic penetration
                        testing on a test website, password strength checker
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Machine Learning / AI" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 6-24 weeks |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Tools:</strong> Python, Scikit-learn,
                        TensorFlow, OpenCV
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Image classifier,
                        Chatbot, Sentiment analysis
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Data Science & Analytics" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Tools:</strong> Python, Pandas, Excel, Power BI,
                        SQL
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Analyze a dataset, Sales
                        dashboard, Data visualization reports
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Mobile App Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Platforms:</strong> Android (Java/Kotlin), iOS
                        (Swift), Flutter (Dart)
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Weather app, Expense
                        tracker, Notes app
                      </p>
                    </div>
                  )}

                  {selectedInternship.title === "Desktop App Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Tech:</strong> Java (Swing/JavaFX), Python
                        (Tkinter/PyQt), Electron.js
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Calculator, Notepad,
                        File Organizer
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Full Stack Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 6 Months |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Frontend:</strong> HTML, CSS, JavaScript, React,
                        Vue
                      </p>
                      <p>
                        <strong>Backend:</strong> Node.js, Express, Django,
                        Flask
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Build a full-stack
                        project (Portfolio, Blog, To-do app)
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Software Testing & QA" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Types:</strong> Manual Testing, Automation
                        (Selenium, Postman)
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Create test cases for a
                        small app, automate login flow testing
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "DevOps / Cloud" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Tools:</strong> Git, Docker, CI/CD, AWS, Azure,
                        Google Cloud
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Dockerize a small app,
                        set up CI with GitHub Actions
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Open Source Contribution" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Remote
                      </p>
                      <p>
                        <strong>Platforms:</strong> GitHub, GitLab
                      </p>
                      <p>
                        <strong>Skills:</strong> Git, issue tracking, pull
                        requests
                      </p>
                      <p>
                        <strong>Project Idea:</strong> Contribute documentation
                        or code to beginner-friendly repositories
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Game Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Tools:</strong> Unity (C#), Godot, Pygame
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Simple 2D games like
                        Pong, Breakout, or Platformer
                      </p>
                    </div>
                  )}
                  <div className="mt-6 text-right">
                    <button
                      onClick={() =>
                        window.open(
                          "https://forms.gle/B8RZpdtVXn5NdUjy6",
                          "_blank"
                        )
                      }
                      className="px-5 py-2.5 rounded-md bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white font-semibold hover:scale-105 transition-transform"
                    >
                      Enroll Now
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </HydrationSafe>
          )}

          {/* Placement Support Section */}
          <section
            id="placement-support"
            className="max-w-7xl mx-auto px-6 py-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent text-center">
              Placement Support for Our Learners
            </h2>
            <p className="text-center text-gray-400 max-w-3xl mx-auto mb-8">
              Tessa Learn ensures your success doesn’t stop at learning. Our
              dedicated placement assistance program provides mentorship, resume
              enhancement, mock interviews, and personalized career guidance —
              helping you land your dream role.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-md text-center">
                <FaUserTie className="text-3xl text-yellow-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold mb-2">1:1 Mentorship</h4>
                <p className="text-gray-400 text-sm">
                  Get guided by industry professionals for interview preparation
                  and portfolio building.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-md text-center">
                <FaFileAlt className="text-3xl text-blue-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold mb-2">
                  Resume Optimization
                </h4>
                <p className="text-gray-400 text-sm">
                  Craft a resume that highlights your technical and soft skills
                  effectively.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-md text-center">
                <FaComments className="text-3xl text-pink-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold mb-2">Mock Interviews</h4>
                <p className="text-gray-400 text-sm">
                  Practice real interview scenarios with experts to boost your
                  confidence.
                </p>
              </div>
            </div>
          </section>

          {/* Training & Placement */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold mb-6">
              Training & Placement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Resume Writing Accordion */}
              <HydrationSafe>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="accordion-item bg-gradient-to-tr from-black to-gray-900 border border-gray-700 rounded-xl p-4"
                >
                  <button
                    className="w-full text-left font-semibold text-white flex justify-between items-center"
                    onClick={() => setShowResumeAccordion(!showResumeAccordion)}
                  >
                    Resume Writing
                    <span>{showResumeAccordion ? "−" : "+"}</span>
                  </button>
                  {showResumeAccordion && (
                    <div className="text-gray-400 text-sm mt-2">
                      Learn to write compelling resumes that stand out. Get
                      templates, feedback, and professional writing tips from
                      our mentors.
                    </div>
                  )}
                </motion.div>
              </HydrationSafe>
              {/* Other Trainings */}
              {trainings
                .filter((t) => t.title !== "Resume Building")
                .map((t) => (
                  <HydrationSafe key={t.title}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="p-5 rounded-xl bg-gradient-to-tr from-black to-gray-900 border border-gray-700 text-center"
                    >
                      <div className="w-14 h-14 mx-auto rounded-full bg-gray-800 flex items-center justify-center mb-3">
                        {t.icon}
                      </div>
                      <div className="font-semibold">{t.title}</div>
                      <p className="text-sm text-gray-400 mt-2">
                        Practical sessions and expert mentors to boost your
                        career.
                      </p>
                    </motion.div>
                  </HydrationSafe>
                ))}
            </div>
          </section>
        </main>

        {/* Contact Form Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-white bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl mt-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
          <p className="text-center text-gray-400 mb-12">
            Have ideas? Let’s talk and build something great together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                Address
              </h3>
              <p className="text-gray-300">
                #979/5, Narayana Swamy Compound, 5th Cross, Sampige Road, K R
                Puram, Hassan, Karnataka, India - 573201
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2 text-red-400">
                Email
              </h3>
              <p className="text-gray-300">
                <a
                  href="mailto:info@tessacloud.com"
                  className="hover:text-red-400 transition"
                >
                  info@tessacloud.com
                </a>
              </p>
            </div>
            {/* Responsive Zoho Form Embed */}
            <ZohoContactFormEmbed />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-800 bg-black/40">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Internships */}
            <div>
              <h3 className="font-semibold mb-3 text-lg text-white">
                Internships
              </h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <a
                    href="#internships"
                    className="hover:text-white transition"
                  >
                    Web Dev
                  </a>
                </li>
                <li>
                  <a
                    href="#internships"
                    className="hover:text-white transition"
                  >
                    AI/ML
                  </a>
                </li>
                <li>
                  <a
                    href="#internships"
                    className="hover:text-white transition"
                  >
                    Data Science
                  </a>
                </li>
                <li>
                  <a
                    href="#internships"
                    className="hover:text-white transition"
                  >
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a
                    href="#internships"
                    className="hover:text-white transition"
                  >
                    SQL
                  </a>
                </li>
                <li>
                  <a
                    href="#internships"
                    className="hover:text-white transition"
                  >
                    Cloud
                  </a>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="font-semibold mb-3 text-lg text-white">Courses</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <a href="#courses" className="hover:text-white transition">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-white transition">
                    Full Stack Development
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-white transition">
                    AI/ML
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-white transition">
                    Desktop App Development
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-white transition">
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-white transition">
                    Software Testing & QA
                  </a>
                </li>
              </ul>
            </div>

            {/* Placement Assistance */}
            <div>
              <h3 className="font-semibold mb-3 text-lg text-white">
                Placement Assistance
              </h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <a
                    href="#placement-support"
                    className="hover:text-white transition"
                  >
                    Mentorship
                  </a>
                </li>
                <li>
                  <a
                    href="#placement-support"
                    className="hover:text-white transition"
                  >
                    Resume Building
                  </a>
                </li>
                <li>
                  <a
                    href="#placement-support"
                    className="hover:text-white transition"
                  >
                    Mock Interviews
                  </a>
                </li>
                <li>
                  <a
                    href="#placement-support"
                    className="hover:text-white transition"
                  >
                    LinkedIn Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#placement-support"
                    className="hover:text-white transition"
                  >
                    Career Guidance
                  </a>
                </li>
                <li>
                  <a
                    href="#placement-support"
                    className="hover:text-white transition"
                  >
                    Soft Skills Training
                  </a>
                </li>
              </ul>
            </div>

            {/* About & Contact */}
            <div className="text-left lg:text-right sm:text-left">
              <h3 className="font-semibold mb-3 text-lg text-white">
                About & Contact
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                <a href="#contact" className="hover:text-white transition">
                  info@tessacloud.com
                </a>
              </p>
              <div className="flex justify-start lg:justify-end gap-4 text-gray-400 text-xl">
                <a
                  href="https://www.facebook.com/people/Tessa-Cloud/61581878499209/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/its_tessa_cloud/?igsh=dzRyaHBtY2tod3hx&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/tessacloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 py-6">
            © 2025 Tessa Cloud | Internship Platform. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

function ZohoContactFormEmbed() {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    // Check screen width only on client side
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // For mobile view, dynamically inject full-height Zoho form
    if (isDesktop === false) {
      const container = document.getElementById(
        "zf_div_0qrgWzTrDHLuSZM1G2wlEdB1dStYFoMV3V3XYRodGC0"
      );
      if (container && container.children.length === 0) {
        const iframe = document.createElement("iframe");
        iframe.src =
          "https://forms.zohopublic.in/tessacloud1/form/ContactUs/formperma/0qrgWzTrDHLuSZM1G2wlEdB1dStYFoMV3V3XYRodGC0?zf_rszfm=1";
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "80vh";
        iframe.style.overflowY = "auto";
        iframe.style.WebkitOverflowScrolling = "touch";
        iframe.style.borderRadius = "16px";
        iframe.style.margin = "0";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
      }
    }
  }, [isDesktop]);

  // Wait until we know if it's desktop or mobile
  if (isDesktop === null) return null;

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
      <div
        id="zf_div_0qrgWzTrDHLuSZM1G2wlEdB1dStYFoMV3V3XYRodGC0"
        style={{ width: "100%" }}
      ></div>

      {/* Desktop view only */}
      {isDesktop && (
        <iframe
          src="https://forms.zohopublic.in/tessacloud1/form/ContactUs/formperma/0qrgWzTrDHLuSZM1G2wlEdB1dStYFoMV3V3XYRodGC0?zf_rszfm=1"
          title="Contact Us"
          aria-label="Contact Us"
          style={{
            border: "none",
            width: "100%",
            height: "400px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
          }}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
