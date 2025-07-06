

function Footer ( {onHomeClick, onServiceClick, onTestimonialClick, onFooterClick}) {

    return(
     
    <div data-aos="fade-up" className="h-max-screen">

     <hr/>
    <footer className="flex flex-col md:flex-row md:justify-between">
     <div className="flex flex-col p-4 cursor-pointer md:flex-row md:items-center md:gap-[60px] md:p-6  md:cursor-pointer" >

        <button onClick={onHomeClick} className="bg-transparent border-none text-left active:text-red-400 hover:bg-red-400  active:scale-95 rounded-sm p-2 font-bold transition-all duration-300 ease-in-out"> Home</button>
        <button onClick={onServiceClick} className="bg-transparent border-none text-left active:text-red-400 hover:bg-red-400  active:scale-95 rounded-sm p-2 font-bold transition-all duration-300 ease-in-out"> Services</button>
        <button onClick={onTestimonialClick} className="bg-transparent border-none text-left active:text-red-400 hover:bg-red-400 active:scale-95 rounded-sm p-2 font-bold transition-all duration-300 ease-in-out "> Testimonial</button>
        <button onClick={onFooterClick}className="bg-transparent border-none text-left active:text-red-400 hover:bg-red-400  active:scale-95  rounded-sm p-2 font-bold transition-all duration-300 ease-in-out "> About us </button>
    
     </div>
        <div className='p-4 text-lg md:mt-4 md:mr-4'> 
          &copy; All rights reserved to abc company
        </div>
        </footer>
    </div>
    )
}
export default Footer;

