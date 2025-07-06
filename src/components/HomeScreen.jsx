
import animationData from '../assets/Animation.json';
import Lottie from 'lottie-react';

function Home(){

    return(
    <section data-aos ="fade-up" className="w-full bg-[#EAEAEA] min-h-screen flex flex-col md:flex-row flex-wrap flex-grow flex-shrink-0 items-center justify-between px-4 md:px-16 py-8 gap-4">
  
     <article className="w-full md:w-1/2 max-w-xl px-4 md:px-6">
  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-md md:max-w-xl mx-auto md:mx-0">
    Accelerate Your <span className="text-red-400">Digital Marketing</span> & boost website ranking
  </p>
  <p className="text-base sm:text-lg md:text-xl font-medium pt-4 leading-relaxed max-w-md md:max-w-xl mx-auto md:mx-0">
     We combine artificial intelligence, Off-Page, On-Page and digital innovation to help businesses stay ahead in the digital age and social-media.
  </p>
</article>
     <figure className="w-full max-w-[450px] mx-auto mx-auto md:mr-16 md-mx-0" aria-label="Lottie animation representing SEO and digital marketing">
       <Lottie autoplay loop animationData={animationData} className="w-full h-auto" />
     </figure>
    </section>
 )
}
export default Home;