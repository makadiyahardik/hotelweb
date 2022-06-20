
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/HeaderComponent/Header';
import Home from './Components/Home Component/Home';
import Service from './Components/ServiceComponent/Service';
import About from './Components/AboutComponent/About'
import Contact from './Components/PingusComponent/Pingus'
import SingleService from './Components/ServiceComponent/SingleServiceComponent/SingleService';
function App() {
  return (
 <>
 <Header/>


 <Routes>

   <Route exact path='/' element={<Home/>}/>
   <Route path='/Service' element={<Service/>}/>
   <Route path='/About' element={<About/>}/>
   <Route path='/Contact' element={<Contact/>}/>

   <Route path='/SingleService/:id' element={<SingleService/>}/>

 </Routes>
 </>
  );
}

export default App;
