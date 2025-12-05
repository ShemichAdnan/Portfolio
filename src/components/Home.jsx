import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import profilePhoto from '../assets/slikaaa.jpg'

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="section home">
      {/* Animated background gradient */}
      <div className="hero-bg">
        <motion.div
          className="hero-gradient hero-gradient-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="hero-gradient hero-gradient-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="home-content">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="home-text"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="intro-label">Hi, my name is</p>
            <h1 className="hero-name">Adnan</h1>
            <h2 className="hero-title">Software Engineering Student</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-description"
          >
            I'm a passionate developer specializing in building exceptional digital
            experiences. Currently focused on creating responsive web applications
            with modern technologies. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="home-socials"
          >
            <a href="https://github.com/shemichadnan" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/adnansemic" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="mailto:adnan.semic.23@size.ba" aria-label="Email" className="social-icon">
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            href="/AdnanŠemić-CV.pdf"
            download="AdnanŠemić-CV.pdf"
            className="btn primary hero-cta"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Right content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="home-photo"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="avatar-frame"
          >
            <img src={profilePhoto} alt="Adnan Šemić" className="avatar" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="scroll-indicator"
      >
        <motion.button
          onClick={() => scrollToSection('projects')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-btn"
          aria-label="Scroll to projects"
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Home
