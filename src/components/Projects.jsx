import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projectsData = [
  {
    id: 1,
    title: 'ECOllect',
    description: 'ECOllect is a mobile application designed to encourage community participation in environmental clean-up actions through a point-based reward system. Users can sign up for eco-actions, track events on a map, earn points for participation, and redeem them for sponsored rewards.',
    image: 'ECOllect.png',
    github: 'https://github.com/ShemichAdnan/ECOllect',
    demo: null,
    tags: ['.NET MAUI', 'C#', 'Google Maps API', 'Firebase'],
    inProgress: false
  },
  {
    id: 2,
    title: 'ASHE',
    description: 'Anonymous Self Help Experience is a calming web app that helps users explore what a psychotherapy session feels like through interactive exercises, AI-guided conversations, and therapy-inspired cards — all designed to reduce stigma and build comfort before talking to a real therapist.',
    image: 'ASHE.png',
    github: 'https://github.com/hodzicmirza/mindTech',
    demo: 'https://mind-tech-eight.vercel.app/',
    tags: ['React', 'Tailwind', 'OpenRouter'],
    inProgress: false
  },
  {
    id: 3,
    title: 'Lessons',
    description: 'This app connects people who want to learn something new with those who can teach it. Whether you’re looking for an instructor or want to offer your own tutoring services, the platform makes it easy to connect, browse profiles, and quickly find the ideal mentor or student.',
    image: 'Lessons.png',
    github: 'https://github.com/ShemichAdnan/LessonsPlatform',
    demo: null,
    tags: ['TypeScript', 'Node.js', 'MySQL'],
    inProgress: true
  },
  {
    id: 4,
    title: 'Calculator App',
    description: 'This is a simple Calculator application built using C# and .NET MAUI. The app provides basic arithmetic operations and additional features to enhance user experience.',
    image: 'calculatorApp.png',
    github: 'https://github.com/ShemichAdnan/CalculatorApp',
    demo: null,
    tags: ['C#', '.NET MAUI'],
    inProgress: false
  }
]

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)

  const cardWidth = 420
  const totalProjects = projectsData.length
  
  // Triple the array for seamless infinite scroll
  const extendedProjects = [...projectsData, ...projectsData, ...projectsData]

  useEffect(() => {
    let rafId
    let last = performance.now()
    const speed = 60 // px/second - adjust for faster/slower scroll
    const currentIndexRef = { value: currentIndex }

    const loop = (now) => {
      const dt = (now - last) / 1000
      last = now

      if (!isPaused && !isDragging) {
        let next = x.get() - speed * dt
        // Wrap: when we pass the reset point, shift by totalProjects*cardWidth
        const resetPoint = -totalProjects * cardWidth * 2
        if (next <= resetPoint) {
          next += totalProjects * cardWidth
        }

        x.set(next)

        const scrolled = Math.round(Math.abs(next / cardWidth))
        const active = scrolled % totalProjects
        if (active !== currentIndexRef.value) {
          currentIndexRef.value = active
          setCurrentIndex(active)
        }
      }

      rafId = requestAnimationFrame(loop)
    }

    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [isPaused, isDragging, totalProjects, x])

  const handleDragEnd = () => {
    setIsDragging(false)
    const currentX = x.get()
    const closestIndex = Math.round(-currentX / cardWidth)
    
    animate(currentX, -closestIndex * cardWidth, {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        x.set(latest)
        const scrolled = Math.abs(latest / cardWidth)
        const activeIndex = Math.round(scrolled) % totalProjects
        setCurrentIndex(activeIndex)
      },
    })
  }

  const goToProject = (index) => {
    const currentX = x.get()
    const currentScrolled = Math.abs(currentX / cardWidth)
    const currentSet = Math.floor(currentScrolled / totalProjects)
    const targetPosition = -(currentSet * totalProjects + index) * cardWidth
    
    animate(currentX, targetPosition, {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        x.set(latest)
      },
      onComplete: () => {
        setCurrentIndex(index)
      },
    })
  }

  return (
    <section id="projects" className="section projects-carousel">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="projects-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carousel-container">
            <motion.div
              drag="x"
              dragConstraints={{
                left: -(extendedProjects.length - 1) * cardWidth,
                right: 0,
              }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              style={{ x }}
              className="carousel-track"
            >
              {extendedProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  className="carousel-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % totalProjects) * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="project-card-carousel"
                  >
                    <div className="project-image-wrapper">
                      <div className="project-image-placeholder" style={{ backgroundImage: `url(${project.image})` }} />
                      <div className="project-image-gradient" />
                      {project.inProgress && (
                        <div className="project-status-badge">
                          In Progress
                        </div>
                      )}
                      
                      <div className="project-hover-links">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="project-link-icon"
                            aria-label="View on GitHub"
                          >
                            <Github size={24} />
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="project-link-icon"
                            aria-label="View demo"
                          >
                            <ExternalLink size={24} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <div className="project-card-content">
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="carousel-dots">
          {projectsData.map((project, index) => {
            const isActive = currentIndex === index
            return (
              <motion.button
                key={project.id}
                onClick={() => goToProject(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="carousel-dot-wrapper"
                aria-label={`Go to project ${index + 1}`}
              >
                <div className={`carousel-dot ${isActive ? 'active' : ''}`} />
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="carousel-dot-glow"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="carousel-hint"
        >
          <p>Drag to explore • Click dots to jump • Hover to pause</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
