import React from 'react'
import './Footer.css'
import FooterTitle from './FooterTitle/FooterTitle'
import FooterReq from './FooterReq/FooterReq'
import FooterLinks from './FooterLinks/FooterLinks'

const Footer = () => {
  return (
    <footer >
        <FooterTitle/>
        <FooterReq/>
        <FooterLinks/>
    </footer>
  )
}

export default Footer
