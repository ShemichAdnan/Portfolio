import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const experiences = [
  {
    id: 1,
    position: 'Video Editing & Content Creator',
    company: 'Youtube',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Created and edited gaming content for a personal YouTube channel, focusing on engaging and dynamic video presentations. Experienced in streaming and producing highquality gaming videos using DaVinci Resolve. Developed skills in video editing, color correction, and audio enhancement to improve viewer experience and build an online community',
    type: 'Full-time',
    current: true,
  },
  {
    id: 2,
    position: 'AI Training',
    company: 'Outlier',
    location: 'Remote',
    period: '2024 - 2025',
    description: 'Worked on AI training tasks through the Outlier platform, including evaluating model outputs, improving prompt quality, and providing high-quality data annotations. Developed strong analytical skills and gained hands-on experience with large language model behavior.',
    type: 'Part-time',
    current: false,
  },
]

const education = [
  {
    id: 1,
    degree: 'High School Diploma',
    school: 'Gymnasium',
    location: 'Bosnia and Herzegovina',
    period: '2019 - 2023',
    description: 'Graduated from the Gymnasium in Kakanj with excellent academic success. Focused on mathematics and computer science. Developed a solid foundation in mathematics, sciences, and languages, achieving a B2 proficiency in both English and German.',
    gpa: null,
    current: false,
  },
  {
    id: 2,
    degree: 'Bachelor in Software Engineering',
    school: 'Polytechnic faculty',
    location: 'Zenica, BiH',
    period: '2023 - Present',
    description: 'Final-year Software Engineering student at the Polytechnic Faculty in Zenica, dedicated to deepening knowledge in programming, software architecture, and innovative digital solutions.',
    gpa: 8.95,
    current: true,
  },
]

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience')

  const currentData = (activeTab === 'experience' ? experiences : education)
    .sort((a, b) => b.id - a.id)

  return (
    <section id="experience" className="section experience-section">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="experience-header"
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="experience-subtitle">
            My professional journey and educational background in software development.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="experience-tabs-wrapper">
          <div className="experience-tabs">
            <motion.button
              onClick={() => setActiveTab('experience')}
              className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === 'experience' && (
                <motion.div
                  layoutId="activeTab"
                  className="tab-background"
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
              <span className="tab-content">
                <Briefcase size={20} />
                Experience
              </span>
            </motion.button>

            <motion.button
              onClick={() => setActiveTab('education')}
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === 'education' && (
                <motion.div
                  layoutId="activeTab"
                  className="tab-background education"
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
              <span className="tab-content">
                <GraduationCap size={20} />
                Education
              </span>
            </motion.button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Vertical Line */}
              <div className="timeline-line-container">
                <motion.div
                  className={`timeline-line ${activeTab === 'education' ? 'education' : ''}`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                <motion.div
                  className={`timeline-line-glow ${activeTab === 'education' ? 'education' : ''}`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>

              {/* Timeline Events */}
              <div className="timeline-events">
                {currentData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="timeline-event"
                  >
                    {/* Timeline Dot */}
                    <div className="timeline-dot-wrapper">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                        whileHover={{ scale: 1.3 }}
                        className="timeline-dot-container"
                      >
                        <div className={`timeline-dot ${activeTab === 'education' ? 'education' : ''}`} />
                        <motion.div
                          className={`timeline-dot-pulse ${activeTab === 'education' ? 'education' : ''}`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                        {item.current && (
                          <motion.div
                            className="timeline-dot-current"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className={`timeline-card-wrapper ${index % 2 === 0 ? 'right' : 'left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className={`timeline-card ${activeTab === 'education' ? 'education' : ''}`}
                      >
                        <div className={`timeline-card-overlay ${activeTab === 'education' ? 'education' : ''}`} />

                        <div className="timeline-card-content">
                          <div className="timeline-card-header">
                            <h3 className="timeline-card-title">
                              {activeTab === 'experience' ? item.position : item.degree}
                            </h3>
                            <h4 className={`timeline-card-subtitle ${activeTab === 'education' ? 'education' : ''}`}>
                              {activeTab === 'experience' ? item.company : item.school}
                            </h4>

                            <div className="timeline-card-meta">
                              <div className="timeline-meta-item">
                                <Calendar size={16} />
                                <span>{item.period}</span>
                              </div>
                              <div className="timeline-meta-item">
                                <MapPin size={16} />
                                <span>{item.location}</span>
                              </div>
                              {activeTab === 'experience' && item.type && (
                                <span className={`timeline-badge ${item.current ? 'current' : ''}`}>
                                  {item.current ? 'Current' : item.type}
                                </span>
                              )}
                              {activeTab === 'education' && item.gpa && (
                                <span className="timeline-badge">
                                  GPA: {item.gpa}
                                </span>
                              )}
                            </div>
                          </div>

                          <p className="timeline-card-description">
                            {item.description}
                          </p>
                        </div>

                        <div className={`timeline-card-accent ${activeTab === 'education' ? 'education' : ''}`} />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="experience-footer"
        >
          <div className={`experience-footer-card ${activeTab === 'education' ? 'education' : ''}`}>
            <Award className="experience-footer-icon" size={24} />
            <p className="experience-footer-text">
              {activeTab === 'experience'
                ? 'Open to new opportunities and collaborations'
                : 'Committed to continuous learning and growth'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
