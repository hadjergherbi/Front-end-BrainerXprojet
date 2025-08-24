import { useState } from 'react'
import Logo from '../../../assets/GPT-3.svg'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

const NavBar = () => {
  const navigate=useNavigate()
  const [isOpen,setIsOpen]=useState(false)
  const ToggleMenu=()=>{
    setIsOpen(!isOpen);
  }
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen){
      setIsOpen(false)

    }
  };
  const GoToSingIn=()=>{
    navigate('/SignIn')
  }
  const GoToSignUp=()=>{
    navigate('/SignUp')
  }
  return (
    <nav className='navBar'>
    
       <div className='navbarContent'>
         <div className='LogoImage'>
            <img src={Logo} alt="Logo" />
            

          </div>
         
         
         <div className='elements' >
          <button onClick={() => scrollToSection('home-section')}>Home</button>
          <button onClick={() => scrollToSection('whtGpt-section')}>What is GPT?</button>
          <button onClick={() => scrollToSection('OpenAi-section')} >OpenAI</button>
          <button onClick={() => scrollToSection('CaseStudies-section')} >Case Studies</button>
          <button onClick={() => scrollToSection('Lib-section')} >Library</button>
           

         </div>
         </div>
         <div className='buttons'>
            <button onClick={()=>GoToSingIn()} className='signinButton'>Sign in</button>
            <button onClick={()=>GoToSignUp()}className='signupButton'>Sign up</button>
         </div>
    
         
       {!isOpen && (
  <div onClick={ToggleMenu} className="cursor-pointer">
    <HiMenu size={30} />
  </div>
)}

<div className={`Media ${isOpen ? 'open' : ''}`}>
  {/* Close button inside menu */}
  <div onClick={ToggleMenu} className="close-icon">
    <IoClose size={30} />
  </div>

  <button onClick={() => scrollToSection('home-section')}>Home</button>
  <button onClick={() => scrollToSection('whtGpt-section')}>What is GPT?</button>
  <button onClick={() => scrollToSection('OpenAi-section')}>OpenAI</button>
  <button onClick={() => scrollToSection('CaseStudies-section')}>Case Studies</button>
  <button onClick={() => scrollToSection('Lib-section')}>Library</button>

  <button onClick={GoToSingIn} className="signinButton">Sign in</button>
  <button onClick={GoToSignUp} className="signupButton">Sign up</button>
</div>

      
    </nav>
  )
}

export default NavBar
