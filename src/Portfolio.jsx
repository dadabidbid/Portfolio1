"use client"

import { ExternalLink, Mail, Github, Linkedin, X } from "lucide-react"
import { useState, useEffect } from "react"
import "./portfolio.css"

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  // Typing animation state
  const [displayedName, setDisplayedName] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const fullName = "DAVID POMASIN"

  useEffect(() => {
    if (displayedName.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1))
      }, 150) // Typing speed
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [displayedName, fullName])

  // Blinking cursor effect after typing is complete
  useEffect(() => {
    if (isTypingComplete) {
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 600) // Cursor blink speed
      return () => clearInterval(interval)
    }
  }, [isTypingComplete])

  const openImageModal = (imageSrc, projectTitle) => {
    setSelectedImage(imageSrc)
    setSelectedProject(projectTitle)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setSelectedProject(null)
  }

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-info">
            <div className="header-box">
              <h1 className="header-title">
                {displayedName}
                {(displayedName.length < fullName.length || (isTypingComplete && showCursor)) && (
                  <span className="typing-cursor">_</span>
                )}
              </h1>
              <p className="header-subtitle">COMPUTER SCIENCE STUDENT</p>
            </div>
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">
              [ABOUT]
            </a>
            <a href="#projects" className="nav-link">
              [PROJECTS]
            </a>
            <a href="#resume" className="nav-link">
              [EXPERIENCE]
            </a>
            <a href="#contact" className="nav-link">
              [CONTACT]
            </a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">ABOUT_ME.TXT</h2>
          <div className="about-grid">
            <div className="about-box">
              <h3 className="about-heading">DESCRIPTION:</h3>
              <p className="about-text">
                I'm a 3rd year Computer Science student with a passion for solving real-world problems through code. My
                academic background has given me a solid foundation in working on complex systems with different groups.
              </p>
              <div className="philosophy-section">
                <h3 className="about-heading">PHILOSOPHY:</h3>
                <p className="philosophy-text">"The best software solves the problem — nothing more, nothing less."</p>
              </div>
            </div>
            <div className="about-box">
              <h3 className="about-heading">TECHNICAL STACK:</h3>
              <pre className="skills-pre">{`{
  "languages": [
    "C#", "JavaScript", 
    "Java", "SQL"
  ],
  "frameworks": [
    "Node.js", "Express.js",
    "React", "Next.js"
  ],
  "databases": [
    "Microsoft SQL Server", "MySQL"
  ],
  "infrastructure": [
    "AWS", "Vercel",
    "Render", "Github Actions"
  ],
  "tools": [
    "Git", "GitHub", "VS Code"
  ]
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">PROJECTS.DIR</h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Barangay Website System</h3>
              </div>
              <div className="project-content">
                <img
                  src="/assets/barangay.png"
                  alt="Barangay Web App"
                  className="project-image"
                  onClick={() => openImageModal("/assets/barangay.png", "Barangay Website System")}
                  style={{ cursor: "pointer" }}
                />
                <p className="project-description">
                  Barangay Website and system with capabilities of handling online legal document requests, as well as
                  management of RBIs and records of the citizens of the barangay.
                </p>
                <div className="project-stack">
                  <span className="stack-label">STACK:</span>
                  <code className="stack-code">React, Next.js, Express.js, AWS(RDS,S3), Render, Vercel</code>
                </div>
                <div className="project-links">
                  <a href="https://barangay-58-pasay-city.vercel.app" className="project-link">
                    <ExternalLink size={16} />
                    LIVE SITE
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Virtual Bouquet Builder</h3>
              </div>
              <div className="project-content">
                <img
                  src="/assets/heartsday.png"
                  alt="Heartsday Bouquet Creator"
                  className="project-image"
                  onClick={() => openImageModal("/assets/heartsday.png", "Virtual Bouquet Builder")}
                  style={{ cursor: "pointer" }}
                />
                <p className="project-description">
                  An interactive Valentine's Day web app where users can create a personalized digital bouquet by
                  selecting and arranging up to 8 flowers. Built with Next.js and React, featuring smooth animations and
                  custom styling.
                </p>
                <div className="project-stack">
                  <span className="stack-label">STACK:</span>
                  <code className="stack-code">React, Next.js, Vercel</code>
                </div>
                <div className="project-links">
                  <a href="https://github.com/dadabidbid/heartsday" className="project-link">
                    <Github size={16} />
                    CODE
                  </a>
                  <a href="https://heartsday.vercel.app" className="project-link">
                    <ExternalLink size={16} />
                    LIVE SITE
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Binary Converter</h3>
              </div>
              <div className="project-content">
                <img
                  src="/assets/binaryconverter.png"
                  alt="Binary Converter"
                  className="project-image"
                  onClick={() => openImageModal("/assets/binaryconverter.png", "Binary Converter")}
                  style={{ cursor: "pointer" }}
                />
                <p className="project-description">
                  An interactive web tool that converts any decimal number into its binary representation, including
                  both the whole number and fractional parts. Features a clean UI and real-time conversion with visual
                  breakdowns.
                </p>
                <div className="project-stack">
                  <span className="stack-label">STACK:</span>
                  <code className="stack-code">HTML, CSS, JavaScript, GitHub Pages</code>
                </div>
                <div className="project-links">
                  <a href="https://github.com/dadabidbid/binary-converter" className="project-link">
                    <Github size={16} />
                    CODE
                  </a>
                  <a href="https://dadabidbid.github.io/binary-converter/" className="project-link">
                    <ExternalLink size={16} />
                    LIVE SITE
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Taylor Series Calculator</h3>
              </div>
              <div className="project-content">
                <img
                  src="/assets/taylor.png"
                  alt="Taylor Series"
                  className="project-image"
                  onClick={() => openImageModal("/assets/taylor.png", "Taylor Series Calculator")}
                  style={{ cursor: "pointer" }}
                />
                <p className="project-description">
                  A dynamic web tool that calculates Taylor Series expansions for common mathematical functions around a
                  user-defined point. Supports both predefined and custom expressions with real-time symbolic
                  differentiation.
                </p>
                <div className="project-stack">
                  <span className="stack-label">STACK:</span>
                  <code className="stack-code">HTML, CSS, Javascript, Github Pages</code>
                </div>
                <div className="project-links">
                  <a href="https://github.com/dadabidbid/taylor-series" className="project-link">
                    <Github size={16} />
                    CODE
                  </a>
                  <a href="https://dadabidbid.github.io/taylor-series/" className="project-link">
                    <ExternalLink size={16} />
                    LIVE SITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section">
        <div className="container">
          <h2 className="section-title">EXPERIENCE.PDF</h2>
          <div className="resume-grid">
            <div className="resume-box">
              <h3 className="resume-heading">LEADERSHIP & EXPERIENCE</h3>

              <div className="experience-item">
                <h4 className="job-title">FULL-STACK DEVELOPER (Student Project)</h4>
                <p className="job-company">Barangay Website Project | 2024-2025</p>
                <ul className="job-duties">
                  <li>
                    Built and deployed a full-stack website for a local barangay using React, Next.js, Express, and AWS
                  </li>
                  <li>
                    Designed both the frontend and backend architecture to manage community services and announcements
                  </li>
                  <li>Integrated cloud deployment for scalability and uptime</li>
                </ul>
              </div>

              <div className="experience-item">
                <h4 className="job-title">AUSG REPRESENTATIVE</h4>
                <p className="job-company">AWSSCC-ADU (AWS Cloud Club – Adamson University) | JUNE 2025 – Present</p>
                <ul className="job-duties">
                  <li>Serves as the student government liaison for AWS-related initiatives and events</li>
                  <li>Facilitates communication between the organization and the Adamson University student council</li>
                </ul>
              </div>

              <div className="experience-item">
                <h4 className="job-title">STUDENT REPRESENTATIVE, LEGISLATIVE COUNCIL OF LEADERS (LCL)</h4>
                <p className="job-company">Adamson University | JUNE 2025 – Present</p>
                <ul className="job-duties">
                  <li>
                    Collaborate with student government and organization leaders to discuss university-wide student
                    concerns
                  </li>
                  <li>
                    Participate in drafting and refining student-led resolutions for university policy consideration
                  </li>
                  <li>
                    Serve as a voice for the student body in leadership meetings to address academic and administrative
                    matters
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume-box">
              <h3 className="resume-heading">EDUCATION</h3>
              <div className="education-item">
                <h4 className="degree-title">B.S. COMPUTER SCIENCE</h4>
                <p className="degree-school">Adamson University | Expected 2026</p>
              </div>

              <h3 className="resume-heading">CORE TECHNOLOGIES</h3>
              <ul className="certifications-list">
                <li>AWS Cloud Services</li>
                <li>Git Version Control</li>
                <li>React Development</li>
                <li>Next.js Framework</li>
                <li>Vercel Deployment</li>
                <li>Express.js Backend</li>
                <li>Database Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">CONTACT.SH</h2>
          <div className="contact-box">
            <div className="contact-grid">
              <div className="contact-item">
                <Mail size={48} className="contact-icon" />
                <h3 className="contact-title">DAVIDPOMASINSP@GMAIL.COM</h3>
                <a href="mailto:davidpomasinsp@email.com" className="contact-link">
                  SEND MESSAGE
                </a>
              </div>

              <div className="contact-item">
                <Github size={48} className="contact-icon" />
                <h3 className="contact-title">GITHUB.COM/DADABIDBID</h3>
                <a
                  href="https://github.com/dadabidbid"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW REPOS
                </a>
              </div>

              <div className="contact-item">
                <Linkedin size={48} className="contact-icon" />
                <h3 className="contact-title">LINKEDIN/DAVID-POMASIN</h3>
                <a
                  href="https://www.linkedin.com/in/david-pomasin-15314b360/"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CONNECT
                </a>
              </div>
            </div>

            <div className="contact-footer">
              <p className="contact-message">READY TO BUILD SOMETHING AMAZING TOGETHER?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-box">
          <p className="footer-text">© 2024 DAVID POMASIN | FUNCTION &gt; FORM</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="image-modal-header">
              <h3 className="image-modal-title">{selectedProject}</h3>
              <button className="image-modal-close" onClick={closeImageModal}>
                <X size={24} />
              </button>
            </div>
            <div className="image-modal-body">
              <img src={selectedImage || "/placeholder.svg"} alt={selectedProject} className="image-modal-img" />
            </div>
            <div className="image-modal-footer">
              <p className="image-modal-text">CLICK OUTSIDE TO CLOSE</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
