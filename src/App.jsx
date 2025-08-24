import './App.css'
import Footer from './components/Footer/Footer'
import Futur from './components/Futur/Futur'
import Library from './components/Library/Library'
import OpenAi from './components/OpenAI/OpenAi'
import WhatGpt from './components/WhatGpt/WhatGpt'
import Home from './components/Home/Home'
const App=()=>{
  return(
    <div >
      <div className='Blur'> </div>
      <section id='home-section'>  <Home/></section>
      <section id='whtGpt-section'><WhatGpt/></section>
      <section id='CaseStudies-section'><Futur/></section>
      <section id='OpenAi-section'><OpenAi/></section>
      <section id='Lib-section'> <Library/></section>
      <section> <Footer/></section>
 

    </div>
  )

}
export default App