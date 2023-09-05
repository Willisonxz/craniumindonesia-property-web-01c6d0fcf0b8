import React from 'react';
import FacebookLogo from '@mui/icons-material/Facebook';
import TwitterLogo from '@mui/icons-material/Twitter';
import PinterestLogo from '@mui/icons-material/Pinterest';
import LinkedInLogo from '@mui/icons-material/LinkedIn';
import YoutubeLogo from '@mui/icons-material/YouTube';


export default function  FooterCollections() {
  return (
      <div className='footer-container-find-agent'>
        <div className='footer-socialMedia-find-agent'>
          <a href="https://www.facebook.com/" className='mx-1'  target="_blank" rel="noopener noreferrer"><FacebookLogo /></a>
          <a href="https://www.twitter.com/" className='mx-1' target="_blank" rel="noopener noreferrer"><TwitterLogo /></a>
          <a href="https://id.pinterest.com/" className='mx-1' target="_blank" rel="noopener noreferrer"><PinterestLogo /></a>
          <a href="https://www.linkedin.com/" className='mx-1' target="_blank" rel="noopener noreferrer"><LinkedInLogo /></a>
          <a href="https://www.youtube.com/" className='mx-1' target="_blank" rel="noopener noreferrer"><YoutubeLogo /></a>
        </div>

        <ul className='footer-links-find-agent'>
          <li><a href="#" className='w-400 c-72 mx-1' onClick={() => window.open("*", "_blank")}>Advertise with us</a></li>
          <li><a href="#" className='w-400 c-72 mx-1' onClick={() => window.open("*", "_blank")}>Contact us</a></li>
          <li><a href="#" className='w-400 c-72 mx-1' onClick={() => window.open("*", "_blank")}>Agent admin</a></li>
          <li><a href="#" className='w-400 c-72 mx-1' onClick={() => window.open("*", "_blank")}>Media sales</a></li>
          <li><a href="#" className='w-400 c-72 mx-1' onClick={() => window.open("*", "_blank")}>Legal</a></li>
          <li><a href="#" className='w-400 c-72 mx-1' onClick={() => window.open("*", "_blank")}>Privacy</a></li>
          <li><a href="#" className='w-400 c-72 mx-1' onClick={() => window.open("*", "_blank")}>Site map</a></li>
          <li><a href="#" className='w-400 c-72 mx-1' onClick={() => window.open("*", "_blank")}>Careers</a></li>
        </ul>
      </div>
  )
}

