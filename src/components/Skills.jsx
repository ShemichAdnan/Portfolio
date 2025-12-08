import React from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Coffee, 
  Code2, 
  FileCode, 
  Palette, 
  Code, 
  Terminal, 
  Hash, 
  Smartphone, 
  Figma, 
  Video, 
  Box,
  Brain,
  Database
} from 'lucide-react'

const skills = [
  { id: 1, name: 'JavaScript', icon: Code, },
  { id: 2, name: 'React.js', icon: Code2, },
  { id: 3, name: 'Java', icon: Coffee, },
  { id: 4, name: 'CSS', icon: Palette, },
  { id: 5, name: 'HTML', icon: FileCode, },
  { id: 6, name: 'C#', icon: Hash, },
  { id: 7, name: 'TypeScript', icon: Terminal, },
  { id: 8, name: 'C++', icon: Terminal, },
  { id: 9, name: '.NET MAUI', icon: Smartphone, },
  { id: 10, name: 'Figma', icon: Figma, },
  { id: 11, name: 'Video Editing', icon: Video, }
]

const Skills = () => {
  const getColumnPosition = (index) => {
    const isLeft = index % 2 === 0
    const rowIndex = Math.floor(index / 2)
    const verticalSpacing = 110
    const horizontalOffset = 280
    
    return {
      x: isLeft ? -horizontalOffset : horizontalOffset,
      y: (rowIndex * verticalSpacing) - ((skills.length / 2) * verticalSpacing) / 2 + 60,
      delay: index * 0.08,
      isLeft,
    }
  }

  return (
    <section id="skills" className="skills-column-section">
      <div className="skills-column-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="skills-column-header"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="skills-column-subtitle">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="skills-column-display">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="skills-brain-hub"
          >
            <div className="skills-brain-wrapper">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="skills-brain-glow"
              />
              
              <div className="skills-brain-core">
                <Brain className="skills-brain-icon" size={64} />
              </div>
            </div>
          </motion.div>

          {skills.map((skill, index) => {
            const position = getColumnPosition(index)
            const Icon = skill.icon

            return (
              <motion.div
                key={skill.id}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  x: position.x,
                  y: position.y,
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: position.delay,
                  type: 'spring',
                  stiffness: 120,
                  damping: 15,
                }}
                className="skills-column-item"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    zIndex: 50,
                  }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                  className="skills-column-card-wrapper"
                >
                  <div className="skills-column-card-container">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className={`skills-column-glow ${skill.color}`}
                    />
                    
                    <div className="skills-column-card">
                      <div className="skills-column-content">
                        <motion.div 
                          className={`skills-column-icon-wrapper ${skill.color}`}
                          whileHover={{
                            boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)',
                          }}
                        >
                          <Icon className="skills-column-icon" size={20} />
                        </motion.div>
                        
                        <p className="skills-column-name">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`skills-connection-line ${position.isLeft ? 'left' : 'right'}`}
                    style={{
                      width: Math.abs(position.x) - 100,
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                  className="skills-float-animation"
                />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="skills-column-footer"
        >
          <div className="skills-footer-card">
            <h3 className="skills-footer-title">Always Learning & Growing</h3>
            <p className="skills-footer-text">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies
              and best practices. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
