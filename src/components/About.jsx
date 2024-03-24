import React from 'react'
const About = () =>{
    return(
        <div name='about' className='w-full h-screen bg-[#0b1122] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-slate-400'>
              Sobre Mi
            </p>
          </div>
          <div></div>
          </div>
         
         
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p> Hola. Soy Miguel Angel, encantado de conocerte. Por favor mira a tu alrededor. </p>
            </div>
            <div className='text-2xl text-slate-300/90 font-normal'>
              <p >Soy desarrollador full stack , mi experiencia en estos años ha sido enfocada tanto del frontend como del backend, Soy apasionado creando aplicaciones y codigo de calidad, ¿ te gustaría trabajar conmigo?</p>  
            </div>
          </div>

      </div>
    </div>
    )
}
export default About;