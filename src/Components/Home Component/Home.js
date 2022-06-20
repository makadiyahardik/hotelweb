import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
function Home() {
  return (
   <>
       <div className='main_home'>

           <div className='home'>
<img src='./images/homepage.png' alt='home' />
<h3>Greetings From Click Hotel! <br/>Feel like your home , Book Your Room Now </h3>

<Link to='/Service' className='link'>Book Now</Link>
           </div>
       </div>
   </>
  )
}

export default Home