import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
function Header() {
  return (
   <>
       <div className='navbar'>

           <div className='main_nav'>

               {/* <div className='logo'>
                   <h1>ClicK</h1>
               </div> */}
               <div className='nav_links'>
                   <NavLink to='/'>Home</NavLink>
                   {/* <NavLink to='/About'>About</NavLink>
                   <NavLink to='/Contact'>Contact</NavLink> */}
                   <NavLink to='/Service'>Service</NavLink>
               </div>
           </div>
       </div>
   </>
  )
}

export default Header