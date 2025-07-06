import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import { useRef, useEffect,useState} from'react';
import 'swiper/css';
import person from '../assets/images/person1.jpeg';
import codesaint from '../assets/images/codesaint.jpeg';
import person3 from '../assets/images/person3.jpg';
import person2 from '../assets/images/person2.webp';

 function Testimonial() {

   const swiperRef = useRef(null);
   useEffect(() =>{
    const swiperInstance =swiperRef.current.swiper;

    const handleReachEnd = () => {
      swiperInstance.mousewheel.disable();
    };

    const handleFromEdge =() => {
      swiperInstance.mousewheel.enable();
   };
  
   swiperInstance.on('reachEnd', handleReachEnd);
   swiperInstance.on('fromEdge', handleFromEdge);

   return () =>{
    swiperInstance.off("reachEnd", handleReachEnd);
    swiperInstance.off("fromEdge", handleFromEdge);
   };
   }, []);
 
  const[openIndex, setOpenIndex] = useState(null);

  const faqs = [

    {
      question:"How are you different in the market",
      answer:"We ensure quality by using rigorous testing and continuous monitoring of our AI models. Our team fine-tunes algorithms to meet the highest standards, ensuring accuracy and performance.",

    },{

      question:"Does your service provide customization?",
      answer:"Absolutely! Our services are tailored to your unique needs — from paid to off page SEO logic, it's all modular and flexible.",

    },
    {
      question: "Do you use AI for SEO & Automation?",
      answer: "Yes, we harness AI for SEO strategy, keyword clustering, automation, and analytics. It drives faster growth, smarter insights, and better scalability.",

    },
    {
      question: "What is your USP in paid marketing",
      answer: "Our USP is precision-targeted campaigns using data-driven insights, advanced segmentation, and real-time optimization. We reduce CPA while increasing ROI.",

    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex (openIndex === index ? null: index);
  };

 return (

<div data-aos="fade-up" className='bg-[#EAEAEA] rounded-lg  flex flex-col'>
    
  <div className='w-full h-auto text-center flex flex-col items-center p-2 md:p-2 '>

    <h2 className="text-center text-2xl p-2 mb-2"> Frequently Asked Questions</h2>

{faqs.map((faq, index) =>
  (
  <div key={index} className=" max-w-[330px] md:max-w-[60%] md:w-1/2 max-h-[250px]  bg-[#ffffff] rounded-lg p-2 shadow-md transition-all duration-300 ease-in-out mb-4 cursor-pointer md:hover:text-red:400 active:text-red-400" onClick={() => toggleFAQ(index)}>
   <span className="font-bold text-lg md:hover:text-red-400 active:text-red-400"> {faq.question} </span>

  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${ openIndex === index ? 'max-h-[500px] opacity-100 translate-y-0 ' : 'max-h-0 opacity-0 -translate-y-4'}`}>
   
   {openIndex === index && (
    <p className='p-2 text-base md:text-lg text-left'> {faq.answer}</p>
   )}
  </div>
  </div>
))}
  </div>

<div>
      <Swiper 
        ref={swiperRef}
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper bg-[#EAEAEA] md:w-6xl h-[300px] rounded-lg border-lg" data-aos="fade-up">

 <SwiperSlide className='p-6'>

        <figure className="flex align-center"> 
            <img
             src={person} 
             alt="Profile photo" 
             className='h-24 sm:h-12 md:h-24 lg:h-55 lg:w-50 rounded-lg'/> 
        <figcaption className='flex flex-col md:h-24 md:p-6 p-4 '> 
                <p className="font-medium "> Thomas Peterson</p>
                <p className=" "> Software Engineer </p>
                <div className=" "> ⭐⭐⭐⭐ </div>
           <blockquote className="text-base md:text-lg w-full hidden md:block">I used their Paid Search SEO service and was impressed with the results. My ads started performing better within days, with improved CTR. Targeting was precise, and ROI has noticeably increased. transparent reporting, and solid strategy—definitely worth the investment. Highly recommended for serious growth.</blockquote>
        </figcaption>
        </figure>
     <blockquote className="text-base md:text-lg max-w-[320px] block md:hidden">I used their Paid Search SEO service and was impressed with the results. My ads started performing better within days, with improved CTR. Targeting was precise, and ROI has noticeably increased. transparent reporting, and solid strategy—definitely worth the investment.</blockquote>

 </SwiperSlide>

   <SwiperSlide className='p-6'>
  <figure className="flex align-center"> 
    <img
      src={codesaint} 
      alt="Profile photo" 
      className='h-24 sm:h-12 md:h-24 lg:h-55 lg:w-50 rounded-lg'/> 
    <figcaption className='flex flex-col md:h-24 md:p-6 p-4 '> 
      <p className="font-medium "> Codesaint Pvt Ltd</p>
       <p className=" "> Service base Company </p>
       <div className=" "> ⭐⭐⭐⭐⭐ </div>
       <blockquote className="text-base md:text-lg w-full hidden md:block">
  "Outstanding SEO and content marketing support—our search rankings and engagement improved remarkably.strategies are data-driven, insightful, and consistently deliver results.</blockquote>
     </figcaption>
      </figure>
     <blockquote className="text-base md:text-lg max-w-[320px] block md:hidden">
  "Outstanding SEO and content marketing support—our search rankings and engagement improved remarkably.strategies are data-driven, insightful, and consistently deliver results.</blockquote>

    </SwiperSlide>

    <SwiperSlide>
      <figure className="flex align-center"> 
    <img
      src={person3} 
      alt="Profile photo" 
      className='h-24 sm:h-12 md:h-24 lg:h-55 lg:w-50 rounded-lg ml-4 m-2'/> 
    <figcaption className='flex flex-col md:h-24 md:p-6 p-4'> 
      <p className="font-medium "> Lisaa gossig</p>
       <p className=" "> SEO Expert </p>
       <div className=" "> ⭐⭐⭐⭐⭐ </div>
       <blockquote className="text-base md:text-lg w-full hidden md:block">
  "The paid services and website analytics offered by organization provided invaluable insights and clarity. Performance metrics became easy to track, helping us make smarter decisions and see results. His expertise made the process seamless and rewarding."</blockquote>
     </figcaption>
      </figure>
     <blockquote className="text-base p-4 md:text-lg max-w-[320px] block md:hidden">
  "The paid services and website analytics offered by organization provided invaluable insights and clarity. Performance metrics became easy to track, helping us make smarter decisions and see results. His expertise made the process seamless ."</blockquote>
    </SwiperSlide>

  <SwiperSlide>
        
       <figure className="flex align-center"> 
    <img
      src={person2} 
      alt="Profile photo" 
      className='h-24 sm:h-12 md:h-24 lg:h-55 lg:w-50 rounded-lg ml-4 m-2'/> 
    <figcaption className='flex flex-col md:h-24 md:p-6 p-4'> 
      <p className="font-medium "> Organized systems Ltd</p>
       <p className=" "> Service based company</p>
       <div className=" "> ⭐⭐⭐⭐ </div>
       <blockquote className="text-base md:text-lg w-full hidden md:block">
 "Reliable SEO insights and paid services that truly deliver. The website analytics helped us refine our strategies and boost performance. A smooth, data-driven experience with results that speak for themselves."</blockquote>
     </figcaption>
      </figure>
     <blockquote className="text-base p-4 md:text-lg max-w-[320px] block md:hidden">
  "Reliable SEO insights and paid services that truly deliver. The website analytics helped us refine our strategies and boost performance. A smooth, data-driven experience with results that speak for themselves."</blockquote>

   </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};
export default Testimonial;

