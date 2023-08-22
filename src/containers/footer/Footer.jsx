import React from 'react';
import './footer.css';
import logo from "../../assets/logo.png"
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import goodbye from "../../assets/GoodbyeNinja.gif";

const Footer = () => {
  return (
    <div className='cn__footer section__padding' id='contact'>
      <div className='cn__footer-heading'>
        <h1>Thank You</h1>
        <div className='cn__footer-heading_logo'>
          <img src={logo} alt="Logo" />
          <p>Code Ninjas Westshore</p>
        </div>
      </div>

      <div className='cn__footer-btn'>
        <button><a href='https://www.codeninjas.com/westshore-bc-ca' target="_blank" rel='noopener noreferrer'>Go to Our Website</a></button>
      </div>

      <div className='cn__footer-links'>
        <div className='cn__footer-links_div'>
          <h4 className='gradient-text'>Links</h4>
          <button>Summer Camps</button>
          <button><a href='https://www.codeninjas.com/westshore-bc-ca' target="_blank" rel='noopener noreferrer'>Parent's Night Out</a></button>
        </div>
        
        <div className='cn__footer-links_socialmedia'>
          <h4 className='gradient-text'>Connect with Us</h4>
          <div className='cn__footer-links_socialmedia-icons'>
          <a href='https://www.instagram.com/CodeNinjasWestshore/' target="_blank" rel='noopener noreferrer'><IconBrandInstagram color='white' size={80} /></a>
          <a href='https://www.facebook.com/CodeNinjasWestshore' target="_blank" rel='noopener noreferrer'><IconBrandFacebook color='white' size={80}/></a>
          </div>
        </div>
      </div>
      <div className='cn__footer-copyright'>
        <p>CN Westshore 2023. All rights reserved.</p>
        <p><p> Powered by SuperBase</p></p>
        <p> Created by Eniola Afolaranmi & Byron Corbett</p>
      </div>
      <img src={goodbye} alt='goodbye'/>
    </div>
  )
}

export default Footer