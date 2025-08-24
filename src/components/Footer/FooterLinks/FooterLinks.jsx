import React from 'react'
import './FooterLinks.css'
import Logo from '../../../assets/GPT-3.svg'

const FooterLinks = () => {
  return (
    <div className='FooterLinks'>
        <div className='ContainerFooterLinks'>
            <div className='divFooters'>
                <img src={Logo} alt="logo" />
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className='divFooters'>
              <p className='FooterlinksTitles'> Links</p>
                <p><a href="#">Overons</a></p>
                <p><a href="#">Social Media</a></p>
                <p><a href="#">Counters</a></p>
                <p><a href="#">Contact</a></p>
            </div>
            <div className='divFooters'> 
                <p className='FooterlinksTitles'>Company</p>
                <p><a href="#">Terms & Conditions</a></p>
                <p><a href="#">Privacy Policy</a></p>
                <p><a href="#">Contact</a></p>

            </div>
            <div className='divFooters'>
                <p className='FooterlinksTitles'>Get in touch</p>
                <p>crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
            </div>
        </div>
        <div>
            <p className='FooterRf'>© 2021 GPT-3. All rights reserved.</p>
        </div>
      
    </div>
  )
}

export default FooterLinks
