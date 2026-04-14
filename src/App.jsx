
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Programs from './Components/Program/Programs'
import Title from './Components/Title/Title'


function App() {


  return (
    <>
      
    <Navbar/>
    <Hero/>

    <div className="container">
       <Title subtitle = "Our Programs" title = "What We Offer"/>
      <Programs/>
    </div>

      
    </>
  )
}

export default App
