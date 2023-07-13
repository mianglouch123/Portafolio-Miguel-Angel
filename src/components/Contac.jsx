import React from 'react'

const Contac = () => {
  return (
    <div name="contact" className='h-screen w-full bg-[#0b1222] flex flex-col items-center  px-4 '>
    
    <form action="https://getform.io/f/53055785-2781-4d0b-8620-f1eb14202a5c" method="POST" className='h-full w-full max-w-[800px]  flex flex-col   gap-8 '>
      
      <div>
        <p className='text-3xl md:text-4xl inline text-slate-200 border-b-4 border-slate-500 bolder'>Contact</p>
        <p className='text-semibold text-2xl mt-3 text-gray-300'>//Contact me about in this form</p>
      </div>

      <div className='flex flex-col gap-6'>
        <input name="name" type="text" placeholder='Name' className='bg-[#2b3645] outline-none h-12 font-normal text-slate-300 rounded text-[20px]' />
        <input name="email" type="email" placeholder='Email' className='bg-[#2b3645] outline-none h-12 font-normal text-slate-300 rounded text-[20px]' />
        <textarea name="message" id="" placeholder='Message'  rows="10" className='bg-[#2b3645] outline-none text-slate-300 rounded text-[20px] font-normal' ></textarea>
      </div>
      
      <div className='flex items-center justify-center'>
        <input type="submit" value="Let's colaborate" className=' bg-slate-800 hover:bg-slate-700 text-white text-[18px] p-4 font-bold rounded cursor-pointer' />
      </div>
    



    </form>
     

    


      </div>
   

   
  )
}

export default Contac