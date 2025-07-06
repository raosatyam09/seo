
import logo from '../assets/logo2.png';
import {useState} from 'react';
import Mobiledraw  from './ui/MobileDraw';

function Navbar ( {onHomeClick, onServiceClick, onTestimonialClick, onFooterClick} ) {
   
  const [menuOpen, setMenuOpen] = useState(false); 

  return(
   <>
    <div data-aos="fade-in" className="w-full px-4 h-auto ">
    <nav className="bg-[#2D2D2D] max-w-2xl m-auto mt-6 h-12 md:h-16 text-xl rounded-full text-sky-500 flex items-center justify-between ">
          <div className="flex items-center justify-evenly">
            <img src={logo} alt ="company logo" className="h-24 w-auto p-2"/>
            {/* <span className='text-sky-50'>abc name</span> */}
          </div>
            
  {/* { Hamburger} */}
            <div className="md:hidden text-white text-xl mr-[40px] cursor-pointer flex flex-col" onClick={ () => setMenuOpen(!menuOpen)}> ☰ </div>

  {/* Desktop Nav */}
     <ul className="hidden md:flex text-sky-50 font-medium flex items-center justify-between gap-[45px] text-xl  mr-[35px] cursor-pointer"> 
        <li className="cursor-pointer hover:text-red-400" onClick={onHomeClick}>Home</li>
        <li className="cursor-pointer hover:text-red-400" onClick={onServiceClick}>Services </li>
        <li className="cursor-pointer hover:text-red-400" onClick={onTestimonialClick}>Testimonial</li>
        <li className="cursor-pointer hover:text-red-400" onClick={onFooterClick}>About us</li>
     </ul>
    </nav>
  
    
    </div>
       {/* Mobile Menu */}
   <Mobiledraw isOpen={menuOpen} onClose={()=> setMenuOpen(false)}>
       <ul className="flex flex-col gap-4 text-lg font-medium">
    <li onClick={() => { onHomeClick(); setMenuOpen(false); }}>Home</li>
    <li onClick={() => { onServiceClick(); setMenuOpen(false); }}>Services</li>
    <li onClick={() => { onTestimonialClick(); setMenuOpen(false); }}>Testimonials</li>
    <li onClick={() => { onFooterClick(); setMenuOpen(false); }}>About us</li>
  </ul>
    </Mobiledraw>
    </>
    
 )
}
 export default Navbar;
