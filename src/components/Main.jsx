import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
export const Main = () => {
  return (
    <div className='w-full h-screen  bg-[#0b1122] ' name="main">
     
     <div className='max-w-[1000px] h-full flex justify-center px-8 -py-3 gap-2 mx-auto flex-col '>
    
    <p className='text-slate-200 text-3xl  font-semibold '>Hola , mi nombre es </p>
    <h1 className='text-slate-200 text-5xl md:tex-5xl font-bold'>Miguel Angel Perez Meriño</h1>
    <h2 className='text-[#8892b0] font-bold text-3xl md:5xl'>Y soy desarrollador Web</h2>
    <p className='text-[#818aa5] py-2 font-normal text-2xl font-semibold md:text:2xl'>
      Y soy <span className='font-normal text-3xl font-bold text-slate-300/95 '>Desarrollador Full Stack</span> especialmente
       en la construcción de sitios, implementación de funcionalidades , soluciones , componentes reutilizables ,
        construyendo sitios web responsivos ,  interfaces de usuario , creación de Api REST , modulos enfocados en el lado del backend
    </p>|
     
     <div>
     <button className='text-white boder-2 group bg-slate-800 text-[18px] hover:bg-slate-700 p-3 px-12 cursor-pointer font-semibold flex items-center gap-2'>view work
     
     <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight /></span>

     </button>
     </div>
     <div className='h-[30px] w-full shadow-md '></div>

     </div>

    </div>
  )
}
export default Main;
