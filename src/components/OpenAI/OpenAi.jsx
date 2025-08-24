import './OpenAi.css'
import Feature from '../../assets/Feature Image.png'
import { useNavigate } from 'react-router-dom'
const OpenAi = () => {
    const navigate= useNavigate()
    const GoToSignUp=()=>{
    navigate('/SignUp')
  }
  return (
    <section >
        <div className='PrimarySection'>
            <img src={Feature} alt="Feature" />
            <div className='ContentAI'>
            <p className='TextAi1'>Request Early Access to Get Started</p>
            <p className='TitleAI'>The possibilities are beyond your imagination</p>
            <p className='TextAi2'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <p className='TextAI3'>Request Early Access to Get Started</p>
        </div>
        </div>
        <div className='ContainerReg'>
            <div className='ContentContainerReg'>
                <p className='regContent'>Request Early Access to Get Started</p>
                <p className='RegBold'>Register today & start exploring the endless possiblities.</p>
             </div>
            <div>
                <button className='GetStartedButton' onClick={()=>GoToSignUp()}>Get Started</button>
            </div>

        </div>
      
    </section>
  )
}

export default OpenAi
