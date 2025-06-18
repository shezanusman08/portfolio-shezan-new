'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover} from '../utils/animation'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate AI Enthusiast Python Developer + NextJS with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...{
              ...cardHover,
              transition: { type: "spring" as const, stiffness: 300 }
            }}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...{
              ...cardHover,
              transition: { type: "spring" as const, stiffness: 300 }
            }}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Python</li>

            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...{
              ...cardHover,
              transition: { type: "spring" as const, stiffness: 300 }
            }}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...{
              ...cardHover,
              transition: { type: "spring" as const, stiffness: 300 }
            }}
          >
            <h3 className="text-xl font-semibold mb-2">Python / Agentic AI Developer</h3>
            <p className="text-primary mb-2">Self initiated projects • 2025 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Build Multi-Agent application with Python, OpenAI AgentSDK and Gemini.</li>
              <li>Some Basic python applications with streamlit. eg: Data Encryption System, Library Manager System, etc</li>
              <li>Integrated Git/GitHub for version control and deployed several apps on Streamlit Cloud</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...{
              ...cardHover,
              transition: { type: "spring" as const, stiffness: 300 }
            }}
          >
            <h3 className="text-xl font-semibold mb-2">NextJS Developer</h3>
            <p className="text-primary mb-2">Self Initiated projects • 2023 - present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Build responsive Dynamic Q-Commerce Food Resturant Website with API integration</li>
              <li>Built a responsive Coffee shop Website using Next.js and Tailwind CSS</li>
              <li>Applied version control using Git & GitHub throughout all projects</li>
              <li>Deployed all projects on Vercel, ensuring mobile responsiveness and clean UI/UX</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...{
              ...cardHover,
              transition: { type: "spring" as const, stiffness: 300 }
            }}
          >
            <h3 className="text-xl font-semibold mb-2">Certified Agentic AI Developer</h3>
            <p className="text-primary mb-2">Panaversity / GIAIC • 2023 - Present</p>
            <p className="text-secondary">
              Currently Enrolled. Focused on making futuristic AI Agents.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 