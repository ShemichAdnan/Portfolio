import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github } from 'lucide-react'

const contactItems = [
  {
    id: 1,
    icon: Mail,
    label: 'Email',
    value: 'adnan.semic.23@size.ba',
    href: 'mailto:adnan.semic.23@size.ba',
  },
  {
    id: 2,
    icon: Phone,
    label: 'Phone',
    value: '+387 62 316 568',
    href: 'tel:+38762316568',
  },
  {
    id: 3,
    icon: Github,
    label: 'GitHub',
    value: '@ShemichAdnan',
    href: 'https://github.com/ShemichAdnan',
  }
]

const Contact = () => {
  return (
    <section id="contact" className="contact-modern-section">
      <div className="contact-modern-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-modern-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-modern-subtitle">
            Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="contact-circles-container">
          {contactItems.map((item, index) => {
            const Icon = item.icon
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 120
                }}
                className="contact-circle-item"
              >
                <motion.a
                  href={item.href}
                  target={item.id === 3 ? '_blank' : undefined}
                  rel={item.id === 3 ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.08 }}
                  className="contact-circle-link"
                >
                  <div className="contact-circle-wrapper">
                    <motion.div
                      className={`contact-circle-glow ${item.color}`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="contact-circle">
                      <motion.div
                        className={`contact-circle-icon-wrapper ${item.color}`}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="contact-circle-icon" size={40} />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
                
                <div className="contact-circle-text">
                  <h3 className="contact-circle-label">{item.label}</h3>
                  <p className="contact-circle-value">{item.value}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="contact-modern-footer"
        >
          <p className="contact-footer-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
