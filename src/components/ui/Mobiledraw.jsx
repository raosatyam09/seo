
// function MobileDraw(onHomeClick, onServiceClick, onTestimonialClick, onFooterClick})={

//     const [menuOpen, setMenuOpen] = useState(false); 

//     return(
// {menuOpen && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
//     <div className="w-1/2 h-full bg-[#2D2D2D] p-6 text-white flex flex-col gap-4 transition-transform duration-500 ease-in-out translate-x-0">
//       <button className="self-end text-white text-2xl mb-4" onClick={onClose}>×</button>
//       <ul className="flex flex-col gap-4 text-lg font-medium">
//         <li onClick={onHomeClick}>Home</li>
//         <li onClick={onServiceClick}>Services</li>
//         <li onClick={onTestimonialClick}>Testimonials</li>
//         <li onClick={onFooterClick}>About us</li>
//       </ul>
//     </div>
//   </div>
// )}
//     )
// }
// export default mobiledraw;


// const MobileDraw = ({ isOpen, onClose, children }) => {
//   return (
//     <div
//       className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
//     >
//       <div
//         className={`w-[40%] h-full bg-[#2D2D2D] text-white p-6 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <button className="text-2xl self-end mb-4" onClick={onClose}>×</button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default MobileDraw;




// const MobileDraw = ({ isOpen, onClose, children }) => {
//   return (
//     <div
//       className={`fixed top-0 right-0 h-screen w-screen z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
//         isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//       }`}
//     >
//       <div
//         className={`absolute top-0 right-0 h-full w-1/2 bg-[#2D2D2D] text-white p-6 transition-transform duration-300 transform ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="text-2xl self-end mb-4 cursor-pointer" onClick={onClose}>×</div>
//         {children}
//       </div>
//     </div>
//   );
// };
// export default MobileDraw;

const MobileDrawer=({isOpen, onClose, children}) =>{
return(
  <div
  className={`fixed inset-0 z-50 bg-transparent backdrop-blur-xs bg-opacity-50 transition-opacity duration-300 ${
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  }`}
>
  <div
    className={`fixed top-0 right-0 w-1/2 h-full bg-black opacity-90 p-6 text-white transition-transform duration-300 transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <div className="text-2xl self-end mb-4 cursor-pointer" onClick={onClose}>×</div>
    {children}
  </div>
</div>
)
}
export default MobileDrawer;