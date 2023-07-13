import React,{useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {FaGithub,FaLinkedin,FaTimes,FaBars,FaFacebook,FaWhatsapp} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import {Link} from 'react-scroll'


const Navbar = () => {

  const [nav,setNav] = useState(false);

const handleOpenMenu = () => {
  return nav? setNav(false) : setNav(true);

} 



  return (
    
    <div className='fixed w-full h-[80px] flex px-4 bg-[#0f172c] items-center justify-between shadow-sx'>
  
     <div>
        <img src="
        https://images.squarespace-cdn.com/content/v1/62629bc508c2fe1a608c9b64/98368f41-0cd0-4d05-8474-551f93410038/MALUL.png" alt="logo"
        className='w-[100px] object-cover ml-3'/>
     </div>

     <div>
        <ul className='hidden md:flex items-center  gap-8 font-bold'>
          <li>
            <Link onClick={handleOpenMenu} to='main' smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link onClick={handleOpenMenu} to="about" smooth={true} duration={500}>About</Link>
            
          </li>
          <li>
            <Link onClick={handleOpenMenu} to="skills" smooth={true} duration={500}>Skills</Link>

          </li>
          <li>
            <Link onClick={handleOpenMenu} to="contact" smooth={true} duration={500}>Contact</Link>

          </li>
            
        </ul>
     </div>
  
  
  {/* Menu Hamburguer */}
     <div onClick={handleOpenMenu} className='md:hidden text-3xl cursor-pointer text-slate-200 z-10'>
    {!nav ? <GiHamburgerMenu /> : <AiOutlineClose />}
     </div>

     {/* Menu Mobile */}
     <ul className={`md:hidden absolute top-0 left-0 duration-300 translate-y-[-750px] flex items-center justify-center  flex-col h-screen w-full  bg-[#070b15] gap-8 ${nav ? "translate-y-[0px]" : ""}`}>
     <li className='items-menu-mobile'>Home</li>
      <li className='items-menu-mobile'>About</li>
      <li className='items-menu-mobile'>Skills</li>
       <li className='items-menu-mobile'>Contact</li>
     </ul>

     {/* menu Icons */}
    
    <div className='hidden md:flex fixed flex-col top-[235px] left-0'>
      <ul className=''>
        <li className='h-[60px] w-[160px] items-center bg-blue-600 ml-[-95px] hover:ml-5 duration-300 text-[20px]'>
          <a href="https://www.linkedin.com/in/miguel-perez-088343249/" target='_blank' className='flex justify-between items-center font-semibold text-gray-300 text-[18px] '>
          Linkedin <FaLinkedin size={38}/>
          </a>
        </li>
        <li className='h-[60px] w-[160px] ml-[-95px]  bg-slate-900 items-center hover:ml-5 duration-300 text-[20px]  '>
          <a href="https://github.com/mianglouch123" target='_blank' className='flex justify-between items-center font-semibold text-gray-300'>
          Github <FaGithub size={38}/>
          </a>
        </li>
        <li className='h-[60px] w-[160px] ml-[-95px]  bg-red-600 items-center hover:ml-5 duration-300 text-[20px]  '>
         <a href="https://mail.google.com/mail/u/0/#all" target='_blank' className='flex justify-between items-center font-semibold text-gray-300'>
         Gmail <HiOutlineMail size={38}/>
         </a>
        </li>
        
      </ul>
    </div>
    


    </div>
  )
}

export default Navbar 