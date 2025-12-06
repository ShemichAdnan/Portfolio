import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="navbar-spacer" />
      <main>
        <Home />
        <Projects />
        <Experience />
        {/*<Skills />
        <Contact />*/}
      </main>
      <Footer />
    </div>
  )
}

export default App
