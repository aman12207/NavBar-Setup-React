import React, { useState, useRef, useEffect } from 'react'
import { FaBars} from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const LinkContainerRef = useRef();
  const LinksRef = useRef();
  const [showLinks,setShowLinks] = useState(false);
  useEffect(()=>{
    const LinksHeight = LinksRef.current.getBoundingClientRect().height;
    if(showLinks){
      LinkContainerRef.current.style.height= `${LinksHeight}px`;
    }
    else {
      LinkContainerRef.current.style.height= `0px`;
    }
  },[showLinks])
  return (
  <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button onClick={()=>setShowLinks(!showLinks)} className="nav-toggle">
            <FaBars/>
            </button>
          </div>
          {/* There are so many ways of doing that 
          1st way:- We will hide or show the links depending on value of showLinks
          or
          2nd way :- add or remove the show-container class depending on value of showLinks
          3rd way :- first Calculte the height of links using ref and then set height of the container accordingly, Here is the 3rd way*/}
          <div className="links-container" ref={LinkContainerRef}>
            <ul className="links" ref={LinksRef}>
              {links.map((link)=>{
                const {id,url,text}=link;
                return <li key={id}><a href={url}>{text}</a></li>
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((item)=>{
              const {id,url,icon} = item;
              return <li key={id}><a href={url}>{icon}</a></li>
            })}
          </ul>
        </div>
      </nav>
  )
}

export default Navbar;