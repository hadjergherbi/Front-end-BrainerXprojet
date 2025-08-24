import React, { useState } from 'react'
import Header from '../../../assets/Illustration.png'
import People from '../../../assets/Group 81.png'
import Google from '../../../assets/google.png'
import Slack from '../../../assets/slack.png'
import Atlassian from '../../../assets/atlassian.png'
import DropBox from '../../../assets/dropbox.png'
import Shopify from '../../../assets/shopify.png'

import './HeroSection.css'
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
    const [email,setEmail]=useState("")
    const [isSumbit,setIsSubmit]=useState(false)
    const [errEmail,setErrEmail]=useState("")
    const navigate=useNavigate()
    const InputEmail=()=>{
        if(!event.target.value?.trim()){
           setErrEmail("The Email Input Is Required Before Starting")
           setIsSubmit(false)
        }
        else{
            setErrEmail(null)
            setEmail(event.target.value)
        }
       
    }
    const SubmitEmail = ()=>{
        event.preventDefault()
        if(!email.trim()){
           setErrEmail("The Email Input Is Required Before Starting")
           setIsSubmit(false)
        }else
        {
         setIsSubmit(true)

        }

        
    } 
    const GoToSignUp=()=>{
        navigate("/SignUp")
    }

  return (
  <section>
    <div className='Container'>
        
        <div className='paragraphs'>
            <p className='BigTitle'>Let’s Build Something amazing with GPT-3 OpenAI</p>
            <p className='Text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <form onSubmit={(event)=>SubmitEmail(event)}className='form'>
                <input onChange={(event)=>InputEmail(event)} type="email" placeholder='Your Email Address' />
                <button type='submit'className='ButtonHeroSection' onClick={GoToSignUp} >Get Started</button>
               
            </form>
              {errEmail && (
                    <p style={{color:"red"}}>{errEmail}</p>
                )}
            {isSumbit===true &&(
              <p style={{display:"none"}}> {email}</p>
            )}
            <div className='RecentlyAccess'>
                <img src={People} alt="People" />
                <p>1,600 people requested access a visit in last 24 hours</p>

            </div>

        </div>
        <div className='image'>
            <img src={Header} alt="Header" />


        </div>
      
    </div>
    <div className='Application'>
        <img src={Google} alt="" />
        <img src={Slack} alt="" />
        <img src={Atlassian} alt="" />
        <img src={DropBox} alt="" />
        <img src={Shopify} alt="" />
    </div>
  </section>
  )
}

export default HeroSection
