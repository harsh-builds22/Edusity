
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Programs from './Components/Program/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'

function App() {


  return (
    <>
      
    <Navbar/>
    <Hero/>

    <div className="container">
       <Title subtitle = "Our Programs" title = "What We Offer"/>
      <Programs/>
      <About/>
    </div>

      
    </>
  )
}

export default App
