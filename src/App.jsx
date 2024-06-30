
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import HowWorkSection from './components/HowWorkSection'
import InternShipSection from './components/InternShipSection'
import LearningSection from './components/LearningSection'
import Navbar from './components/Navbar'
import RecommendedSection from './components/RecommendedSection'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Banner/>
        <HowWorkSection/>
        <RecommendedSection/>
        <InternShipSection/>
        <LearningSection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
