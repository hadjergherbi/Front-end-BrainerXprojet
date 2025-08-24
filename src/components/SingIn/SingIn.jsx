/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import axios from "axios"
import './SingIn.css'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
   const emailRef = useRef(null)
   const passwordRef = useRef(null)
   const forgotEmailRef = useRef(null)
   const newPasswordRef = useRef(null)
   
   const [isSubmit, setIsSubmit] = useState(false)
   const [openPopUp, setOpenPopUp] = useState(false)
   const [err, setErr] = useState({
       email: null,
       password: null
   })
   
   const token = localStorage.getItem("token")
   const navigate = useNavigate()

   const emailInput = (event)=>{
       if(!event.target.value?.trim()){
        setErr({...err,email:"Email required"})
        setIsSubmit(false)
       }
       setErr({...err,email:null})
      
       
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
      
        setErr(errSubmit)
        if(emailRef?.current?.value?.trim() && passwordRef?.current?.value?.trim() ){
        setIsSubmit(true)
        }
        const data={
            userEmail:emailRef.current.value,
            userPassword:passwordRef.current.value,
        }
        try{
            const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/SignIn`,data)
        if(response.status===201){
           localStorage.setItem("token",JSON.stringify(response.data.token))

            navigate("/Profile")
        }
        }catch(error){
           return alert(error)
        }


    }
   const handleForgotPassword = async (e) => {
       e.preventDefault()
       
       const email = forgotEmailRef.current?.value?.trim()
       const newPassword = newPasswordRef.current?.value?.trim()
       
       if (!email || !newPassword) {
           alert("Please fill in both email and new password")
           return
       }

       const formData = {
           userEmail: email,
           userPassword: newPassword
       }

       try {
           const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/ForgetPassword`, formData)
           
           if (response.status === 200) {
               alert("Password updated successfully")
               setOpenPopUp(false)
           }
       } catch (error) {
           alert(error.response?.data?.message || "Failed to reset password")
       }
   }

   // Rediriger si déjà connecté
   useEffect(() => {
       if (token) {
           navigate("/Profile")
       }
   }, [token, navigate])

   return (
       <div id="Information">
           <h3 className='titleWelcome'>Welcome back</h3>
           <p className='text'>Please enter your details</p>
           
           <form onSubmit={submitForm}>
               <div>
                   <p className='textInput'>Email</p>
                   <input 
                       ref={emailRef} 
                       className='inputs'
                       type="email" 
                       placeholder={err?.email || "Email"} 
                       onChange={emailInput}
                       style={err?.email ? { border: "1px solid red" } : {}}
                   />
               </div>

      
               <div>
                   <p className='textInput'>Password</p>
                   <input 
                       ref={passwordRef} 
                       className='inputs' 
                       type="password" 
                       placeholder={err?.password || "Password"} 
                       onChange={passwordInput}
                       style={err?.password ? { border: "1px solid red" } : {}}
                   />
               </div>
               
               <div id="forgetandremember">
                   <button 
                       type="button" 
                       onClick={() => setOpenPopUp(true)}
                   >
                       Forgot Password
                   </button>
               </div>
               
               <button 
                   id="button" 
                   type="submit" 
                  
               >
                  Sign In
               </button>
           </form>
           
           <p id="questiontext">
               Don't have an account ? <a href="/SignUp">Sign up</a>
           </p>
    
           <div className='Blur'></div>
           <div className="BlurBottom"></div>
           
         
           {openPopUp && (
               <div className="popup-overlay" onClick={() => setOpenPopUp(false)}>
                   <div className="pop" onClick={(e) => e.stopPropagation()}>
                       <button 
                           className="close-button" 
                           onClick={() => setOpenPopUp(false)}
                       >
                           ×
                       </button>
                       
                       <p id="ProfileTitle">Reset Password</p>
                       
                       <form onSubmit={handleForgotPassword}>
                           <div className="ContainerInformation">
                               <div className="Informationprofile">
                                   <p>Email :</p>
                                   <input 
                                       ref={forgotEmailRef} 
                                       type="email" 
                                       placeholder="Enter your email"
                                       required 
                                   />
                               </div>
                               
                               <div className="Informationprofile">
                                   <p>New Password :</p>
                                   <input 
                                       ref={newPasswordRef}
                                       type="password" 
                                       placeholder="Enter new password"
                                       required
                                   />
                               </div>
                           </div>
                           
                           <div id="buttonsprofil">
                               <button type="submit" className="ButtonsPRofile">
                                   Reset Password
                               </button>
                               <button 
                                   type="button" 
                                   className="ButtonsPRofile" 
                                   onClick={() => setOpenPopUp(false)}
                               >
                                   Cancel
                               </button>
                           </div>
                       </form>
                   </div>
               </div>
           )}
       </div>
   )
}

export default SignIn