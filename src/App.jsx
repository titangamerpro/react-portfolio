import ExperienceSection from "./components/ExperienceSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Portfolios from "./components/Portfolios"
import Specialized from "./components/Specialized"





function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Specialized/>
        <Portfolios/>
        <ExperienceSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
