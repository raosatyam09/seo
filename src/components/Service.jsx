import marketing from '../assets/images/marketing.png';
import seo from '../assets/images/seo.png';
import web from '../assets/images/web.png';
import convert from '../assets/images/conversion.png';
import content from '../assets/images/contentwriting.png';
import search from '../assets/images/search.png';


function Service (){
    return(

 <section data-aos="fade-up" className="bg-[#F0F0F0] min-h-screen w-full color-black">
    <h1 className="text-left  text-xl pl-4 pt-8 md:pt-4 md:pl-16 font-bold"> Our Expertise </h1>
    <div className="flex items-center justify-between flex-wrap p-8 lg:p-24">

    <div className="w-xs h-[360px] bg-[#FFFFFF] rounded-2xl mb-8 text-xl font-bold p-2 transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg hover:shadow-black/30" >
        <div className='w-[70px] h-auto p-2'>
            <img src={marketing} alt="Social Media Marketing"/>
        </div>
            Social Media Marketing
        <div className="text-sm pt-2">
            Social Media Platforms, Marketing Activities, Audience Targeting, Content Creation, and Performance Measurement
        </div>
    </div>


    <div className="w-xs h-[360px] bg-[#FFFFFF] rounded-2xl mb-8 text-xl font-bold p-4 transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg hover:shadow-black/30">
        <div className='w-[70px] h-auto p-2'>
            <img src={seo} alt="SEO Strategy"/>
        </div>
             SEO Strategy
        <div className='text-sm pt-2'>
              words and phrases that people type into search engines to find information, products, or services related to your website
        </div>
    </div>


      <div className="w-xs h-[360px] bg-[#FFFFFF] rounded-2xl mb-8 text-xl font-bold p-4 transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg hover:shadow-black/30">
            <div className='w-[70px] h-auto p-2'> 
               <img src={web} alt="website management & analytics"/>
            </div>
        Website Management & Analytics
        <div className="text-sm pt-2"> website management, website maintenance, website updates, and content management</div>
      </div>
        
        
        <div className="w-xs h-[360px] bg-[#FFFFFF] rounded-2xl mb-8 text-xl font-bold p-4 transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg hover:shadow-black/30"> 
            <div className="w-[70px] h-auto p-2">
                <img src={convert} alt="conversion"/>
            </div>
            Conversion
           <div className="text-sm pt-2">buy, discount, sale or product-specific terms with best, review, or alternative </div>
        </div>


        <div className="w-xs h-[360px] bg-[#FFFFFF] rounded-2xl mb-8 text-xl font-bold p-4 transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg hover:shadow-black/30">
            <div className="w-[70px] h-auto p-2">
                <img src={content} alt="content marketing"/>
            </div>
             Content Marketing
             <div className="text-sm pt-2"> informational, navigational, transactional, educational, entaintainment </div>
        </div>

{/*         on line number 63 i am making some changes here  */}
         <div className="w-xs h-[360px] bg-[#FFFFFF] rounded-2xl mb-8 text-xl font-bold p-4 transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg hover:shadow-black/30"> 
            <div className="w-[70px] h-auto p-2">
                <img src={convert} alt="conversion"/>
            </div>
            Conversion
           <div className="text-sm pt-2">buy, discount, sale or product-specific terms with best, review, or alternative </div>
        </div>

         <div className="w-xs h-[360px] bg-[#FFFFFF] rounded-2xl mb-8 text-xl font-bold p-4 transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg hover:shadow-black/30"> 
            <div className="w-[70px] h-auto p-2">
                <img src={convert} alt="conversion"/>
            </div>
            Conversion
           <div className="text-sm pt-2">buy, discount, sale or product-specific terms with best, review, or alternative </div>
        </div>


{/* changes are here till here actually added 2 cards   */}


        <div className="w-xs h-[360px] bg-[#FFFFFF] rounded-2xl mb-4 text-xl font-bold p-4 transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg hover:shadow-black/30"> 
            <div className="w-[60px] h-auto p-2">
                <img src={search} alt="Paid Search "/>
            </div>
            Paid Search
            <div className ="text-sm pt-2">google paid search, google paid search, pay per click,seo pay per click,facebook ads, Instagram paid ads  </div>
       </div>

    </div>
 </section>

    )
}
export default Service;
