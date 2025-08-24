/* eslint-disable no-unused-vars */
import {  useRef, useState } from 'react'
import './SignUp.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const SignUp = ()=>{
    const navigate=useNavigate()
   const emailRef=useRef(null)
   const passwordRef=useRef(null)
   const FirstNameRef=useRef(null)
   const LastNameRef=useRef(null)
    const [isSubmit,setIsSubmit]=useState(false)
    const[err,setErr]=useState({
        email:null,
        password:null,
        FirstName:null,
        LastName:null
    })
    const emailInput = (event)=>{
       if(!event.target.value?.trim()){
        setErr({...err,email:"Email required"})
        setIsSubmit(false)
       }
       setErr({...err,email:null})
      
       
    }
    const FirstNameInput=(event)=>{
        if(!event.target.value?.trim()){
            setErr({...err,FirstName:"First Name Required"})
            setIsSubmit(false)
        }
        setErr({...err,FirstName:null})

    }
    const LastNameInput=(event)=>{
        if(!event.target.value?.trim()){
            setErr({...err,LastName:"Last Name Required"})
            setIsSubmit(false)
        }
        setErr({...err,LastName:null})

    }
    const passwordInput= (event)=>{
       if(!event.target.value?.trim()){
        setErr({...err,password:"Password required"})
        setIsSubmit(false)
       }
       setErr({...err,password:null})
     

    }
    const submitForm=async(event)=>{
        event.preventDefault()
        const errSubmit={};
        if(!emailRef?.current?.value?.trim()){
           errSubmit.email="Email required"
           setIsSubmit(false)
        }
        if(!passwordRef?.current?.value?.trim()){
            errSubmit.password="Password required"
            setIsSubmit(false)
        }
        if(!FirstNameRef?.current?.value?.trim()){
            errSubmit.FirstName="First Name required"
            setIsSubmit(false)
        }
        if(!LastNameRef?.current?.value?.trim()){
            errSubmit.LastName="Last Name required"
            setIsSubmit(false)
        }
        setErr(errSubmit)
        if(emailRef?.current?.value?.trim() && passwordRef?.current?.value?.trim() && FirstNameRef?.current?.value?.trim() && LastNameRef?.current?.value?.trim()){
        setIsSubmit(true)
        }
        const data={
            userEmail:emailRef.current.value,
            userPassword:passwordRef.current.value,
            userFirstName:FirstNameRef.current.value,
            userLastName:LastNameRef.current.value
        }
        try{
            const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signUp`,data)
        if(response.status===201){
           localStorage.setItem("token",JSON.stringify(response.data.token))

            navigate("/Profile")
        }
        }catch(error){
           return alert(error.message)
        }


    }
    

    return(
        <div id="SingUp">
            <h3 className='CreateAccount'>Create an account</h3>
            <p className='text-already-have'>Already have an account?<a href="/SignIn">Sing In</a></p>
            <form id='SignUpform' onSubmit={(event)=>submitForm(event)}>
               {(!err?.email)?(
                 <div>
                    <p className='textInputSignUp'>Email</p>
                    <input ref={emailRef} className='inputssignUp'type="email" placeholder="Email" onChange={(event)=>emailInput(event)}  />
               

                </div>

               ): <div>
                    <p className='textInputSignUp'>Email</p>
                <input id="erremail" className='inputssignUp'type="email" placeholder={err.email} onChange={(event)=>emailInput(event)} style={{border:"1px solid red"}}  />
                


                </div>}
                <div id='NameSignUp'>
                {(!err?.FirstName)?(
                    <div>
                        <p className='textInputSignUp'>First Name</p>
                         <input ref={FirstNameRef}className='inputsNamessignUp' type='text' placeholder='First Name' onChange={(event)=>FirstNameInput(event)}/>

                    </div>
                ):<div>
                     <p className='textInputSignUp'>First Name</p>
                        <input id='errFirstName'ref={LastNameRef} className='inputsNamessignUp' type='text' placeholder={err.LastName} onChange={(event)=>FirstNameInput(event)} style={{border:"1px solid red"}}/>
                    </div>}
                    {(!err?.LastName)?(
                     <div>
                        <p className='textInputSignUp'>Last Name</p>
                        <input  ref={LastNameRef} className='inputsNamessignUp' type="text" placeholder='Last Name' onChange={(event)=>LastNameInput(event)} />

                    </div>
                    ):  <div>
                        <p className='textInputSignUp'>Last Name</p>
                        <input id='errLastName' className='inputsNamessignUp' type="text" placeholder={err.LastName} onChange={(event)=>LastNameInput(event)} style={{border:"1px solid red"}}/>

                    </div>
                    }
              
                  
                    
                </div>
                 {(!err?.password) ?(
                 <>
                 <p className='textInputSignUp'>Password</p>
                <input ref={passwordRef} className='inputssignUp' type="password" placeholder="Password" onChange={(event)=>passwordInput(event)}/>
              
                 </>

            ):<><p className='textInputSignUp'>Password</p>
                <input id="errpassemail"className='inputssignUp' type="password" placeholder={err.password}onChange={(event)=>passwordInput(event)} style={{border:"1px solid red"
              }}/>
              </>}
               
                
                <button id="buttonSignUp" type="submit"  >Sign up</button>

            </form>
           
            
            <div className='Blur'></div>
        <div className="BlurBottom"></div>
           
        </div>
    )

}
export default SignUp