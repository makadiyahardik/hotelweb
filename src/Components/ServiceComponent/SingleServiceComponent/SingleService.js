import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hotel from '../../HotelData/Hotel'
import './SingleService.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function SingleService() {
const [product,setProduct]= useState({})
const [count,setCount]=useState(1)
const [user,setUser]= useState("")
const [Email,setEmail]= useState("")
const [phoneNumber,setphoneNumber]= useState()
const [city,setCiry]= useState("")
const [dateOne,setDate]= useState("")
const [dateTwo,setdatetwo]= useState("")
const [days,setDays] = useState()
const [item,setItem] = useState([])

    const {id }=useParams()

 
    useEffect(()=>{
        getProduct()
      
 
    })
function increase(){
    setCount(count+1)
}
function decrease(){
    setCount(count-1)
}

function getProduct(){
    const newProduct = Hotel.find((c)=>c.id === parseInt(id))
    setProduct(newProduct);
}


function submitForm(){

    if(user===""){
        toast.warn("Entre your name! ");
     
    }if(Email===""){
        toast.warn("Entre your email !");
    }if(city===""){
        toast.warn("Entre your city !"); 
    }if (dateOne===""){
        toast.warn("Entre your date !");
    }if(dateTwo===""){
        toast.warn("Entre your Second date !"); 
    }
    if( phoneNumber <9){
        toast.warn("Entre your Valid Phone Number !"); 
        
    }
    if(user !=="" && Email !==""  && city !== ""  && dateOne !== ""  && dateTwo !== ""  && phoneNumber !== ""){
        toast.success("Your Booking is Successful!");  
setItem((old)=>{
    return ([...old,{
        user,
        city,
        Email,
        dateOne,
        dateTwo,
        phoneNumber
    }])
})
    }
   

let date1 = new Date(dateOne)
let date2 = new Date(dateTwo)


let totaldates = date1.getTime()- date2.getTime()

let result = totaldates / (1000 * 60 * 60 * 24);
setDays(result);

localStorage.setItem("usename", JSON.stringify(user))
localStorage.setItem("EmailAdress", JSON.stringify(Email))
localStorage.setItem("CityName", JSON.stringify(city))
localStorage.setItem("ContactNumber", JSON.stringify(phoneNumber))
localStorage.setItem("Checkindate", JSON.stringify(dateOne))
localStorage.setItem("Checkoutdate", JSON.stringify(dateTwo))



setUser("")
setEmail("")
setphoneNumber("")
setCiry("")
setdatetwo("")
setDate("")


}   



  return (
    <>
    <div className='service_section'>
        <div className='sevice_carousel'>
        <h1>{product.title}</h1>
     <img src={product.img} alt={product.title}/>
     <h4>Price Per Night: {product.price}</h4>
   
     <p>{product.desc}</p>
         <button className='btn' onClick={increase}>+</button>
        <span> Total Room  {count}</span>
         <button  className='btn' onClick={decrease}>-</button>


         <div className='form_area'>
            <h3>Entre Your Details Here...</h3>
            
            <input type="text"  placeholder='Entre Your Name' value={user} onChange={(e)=>setUser(e.target.value)}  required/><br/>
            <input type="email" placeholder='Entre Your Email' value={Email} onChange={(e)=>setEmail(e.target.value)}  required/><br/>
            <input type="text"  placeholder='Entre Your City' value={city} onChange={(e)=>setCiry(e.target.value)}  required/><br/>
            <input type="number"  placeholder='Entre Your Number' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}  required/><br/>
            <input type="date" className='date1' value={dateOne} onChange={(e)=>setDate(e.target.value)} required/> <br/>
            To 
            <br/>
            <input type="date" className='date1' value={dateTwo} onChange={(e)=>setdatetwo(e.target.value)} required/><br/>

            
<button onClick={submitForm}>Submit</button>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}

/>
 <h2> Your Total Amount is  {Math.abs(product.price * (count * days))} </h2>  


            </div>
            <h1>Userdata </h1>  
        </div>
       


    </div>
     
    <table className="table table-dark table-striped ">
  <thead>
 
    <tr>
      {/* <th scope="col">Sr No</th> */}
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Contact</th>
      <th scope="col">CheckIn </th>
      <th scope="col">CheckOut</th>
    


    </tr>
  </thead>
{
    item.map((itemVal)=>{
        return(
            <>
            <tbody key={itemVal.id}>
    <tr>
      {/* <th scope="row">{itemVal.length}</th> */}
      <td>{itemVal.user}</td>
      <td>{itemVal.city}</td>
      <td>{itemVal.phoneNumber}</td>
      <td>{itemVal.dateOne}</td>
      <td>{itemVal.dateTwo}</td>
    

    </tr>

  </tbody>
            </>
        )
    })
}
</table>
    </>
  )
}

export default SingleService