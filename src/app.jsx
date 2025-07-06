import {useRef, useEffect} from 'react';
import Navbar from './components/navbar';
import Home from './components/HomeScreen';
import Services from './components/ServicePage';
import Testimonial from './components/TestimonialPage';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App (){

   useEffect(() => {
      AOS.init({
         duration:800,
         once:true,
         easing: 'ease-in-out',
         offset:100
      });
   }, []);
   const homeRef = useRef(null);
   const serviceRef =useRef(null);
   const testimonialRef = useRef(null);
   const footerRef = useRef(null);

     const scrollToSection = (ref) =>{
        ref.current?.scrollIntoView ({ behavior: 'smooth'});
     };

     return(
        <div className="scroll-smooth">
      {/* Navbar effect */}
         <Navbar 
            onHomeClick ={() => scrollToSection(homeRef)}
            onServiceClick={() => scrollToSection(serviceRef)}
            onTestimonialClick={() => scrollToSection (testimonialRef)}
            onFooterClick ={() => scrollToSection(footerRef)}
            />

      {/* sections are hrere !! */}

            <div ref={homeRef}><Home /></div>
            <div ref={serviceRef}> <Services/></div>
            <div ref={testimonialRef}> <Testimonial /></div>
            <div ref={footerRef}></div>

      {/* footer effect  */}
         <Footer
         onHomeClick={() => scrollToSection(homeRef)}
         onServiceClick={() => scrollToSection(serviceRef)}
         onTestimonialClick={() => scrollToSection (testimonialRef)}
         onFooterClick={() => scrollToSection (footerRef)}
         />

        </div>
     );
}
export default App;