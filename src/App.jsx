import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Projects from './pages/Projects'
import TechStacks from './pages/TechStacks'
import Contact from './pages/Contact'
import Landing from './components/Home/Landing'
import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tech-stacks" element={<TechStacks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  )
}

export default App
