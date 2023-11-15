import React from 'react'
import Landing from './Landing'
import Tech from './Tech'
import { motion } from 'framer-motion'
import Projects from './Projects'

const HomePage = () => {
  return (
   <motion.main
   initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className=' px-4 py-1'
   >
   <Landing />
   <Tech />
   <Projects />
   </motion.main>
  )
}

export default HomePage