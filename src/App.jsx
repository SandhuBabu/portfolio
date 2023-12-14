import './App.scss'
import { useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { motion } from "framer-motion";
import Nav from './components/Nav'
import Projects from './pages/Projects'
import TechStacks from './pages/TechStacks'
import Contact from './pages/Contact'
import Landing from './components/Home/Landing'
import { useFollowPointer } from './components/Animations/user-follow-pointer'

function App() {

  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tech-stacks" element={<TechStacks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Nav />

      {/* pointer */}
      <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 5,
          stiffness: 30,
          restDelta: 0.001
        }}
      />
    </BrowserRouter>
  )
}

export default App
