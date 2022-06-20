import React, { useState } from 'react'
import './Service.css'
import {Link, NavLink} from 'react-router-dom'
import Hotel from '../HotelData/Hotel'
import Slide from 'react-reveal/Slide';
function Service() {
  const [item,setItem]=useState(Hotel)

function setFilter(categeryItem){
  const newresult = Hotel.filter((curElm)=>{
    return curElm.category === categeryItem
    
  })

  setItem(newresult);
}

  return (
    <>
       <div className='heading'>
         <h1>Our Services</h1>
         <div className='buttons'>
         <button onClick={()=>setItem(Hotel)}>All</button>
       
           <button onClick={()=>setFilter("AC")}>AC</button>
           <button onClick={()=>setFilter("Non-AC")}>Non-AC</button>
         </div>
       </div>
<Slide bottom>
        <div className='service'>
          {
            item.map((curElm)=>{
              const {id,title,img,price,category}= curElm
              return(
                <>
                
                <div className='main_service'>
                <div className='card'> 
           <img src={img} alt={title}/>
           <h1>{title}</h1>
           <h4>Price  {price}</h4>
           <p>{category}</p>
           <div className='text'>
           <Link to={`/SingleService/${id}`}>  
             <h2>read more</h2>
             </Link>
           </div>
           </div>
           
                </div>
                </>
              )
            })
          }
                
            </div>
            </Slide>
       
    </>
  )
}

export default Service