

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