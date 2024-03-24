import React from 'react'

const Work = () => {
  const LINK_WORKS=[
    {
      img:"https://lh3.googleusercontent.com/proxy/Y9sp4hV2jIdoWN1JqQjJ_eKzAZnzqZ7Cfxi7GRUoUqiWzA2XiL3EH_PWFuyDCgmcqjg33nbyMicYK1VQFwQ9PTJ7p9q4HOc14wN6kCCXCkHAc91MuJAw4g",
      href: "https://tmdb-react-clone-u1g6.vercel.app/",
      title: "tmdb clone",
      code : "https://github.com/mianglouch123/tmdb-react-clone"
    }, {
      img: "https://i.ytimg.com/vi/I2NNxr3WPDo/maxresdefault.jpg",
      href: "https://gym-app-react.vercel.app/",
      title: "gym react app",
      code : "https://github.com/mianglouch123/gym-app-react"

    },{
      img: "https://cdn.mos.cms.futurecdn.net/2SRFcb7MazUBWHnFDg6eRD.jpg",
      href: "https://demo-halo-clone.vercel.app/?vercelToolbarCode=ElWTZRW2MYN217q",
      title : "halo website app",
      code : "https://github.com/mianglouch123/demo-halo-clone"
    },
    {
      img: "https://media.licdn.com/dms/image/D5605AQEL3K34pSf7MA/feedshare-thumbnail_720_1280/0/1686834987491?e=2147483647&v=beta&t=1SfYaf1CZmkJ9ZgasBo_MzNTrwKFEI2moghRlO7CSdE",
      href: "https://cars-app-eta.vercel.app/",
      title : "car app",
      code : "https://github.com/mianglouch123/cars-app"
    } 
    ,{
      img : "https://res.cloudinary.com/practicaldev/image/fetch/s--Djk180T4--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cjck7egkkg07tpl7hikb.png", 
      href : "https://wodle-game-miguel.vercel.app/",
      title : "wordle react",
      code : "https://github.com/mianglouch123/WODLE_GAME_MIGUEL"
    }, {
      img : "https://sujeitoprogramador.com/wp-content/uploads/2020/06/codpen.png",
      href : "https://github.com/mianglouch123/challenge-backend-junior-muta" ,
      title : "api rest materials recycables",
      code : "https://github.com/mianglouch123/challenge-backend-junior-muta"
    }

  ]
  return (
    <div name="work" className="w-full md:h-[900px] text-gray-300 bg-[#0b1122]">
        
        <div className=' max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
          
      <div className='pb-8'>
        <p className='text-2xl md:text-4xl  font-bold inline border-b-4 border-slate-500'>Trabajo</p>
        <p className='py-4 text-slate-300 text-2xl'>// Chequea mis proyectos</p>
      </div>

      <div className='grid sm:grid-cols-4 md:grid-cols-3 gap-8 '>
      
       {/*cart */}
       {LINK_WORKS.map((work , i) => (
        <div key={work.title} style={{backgroundImage:`url(${work.img})`}} id="content-div" 
        className={`shadow-md object-container h-[240px] w-[300px] cursor-pointer shadow-[#0e1017] group container rounded-md flex justify-center items-center mx-auto`}>
         
         <div  className='opacity-0 group-hover:opacity-100'>
           <span className='text-slate-200 tracking-wider font-bold text-2xl'>
           {work.title}
           </span>
           
           <div className='pt-8 text-center flex gap-4 justify-center text-1xl'>
 
             <a target='_blank' href={work.href} ><button className=' rounded-md font-bold px-3 py-2  text-gray-400 bg-slate-100 mb-2'>App</button></a>
             <a target="_blank" href={work.code}><button className=' rounded-md font-bold  px-3 py-2 text-gray-400 bg-slate-100 mb-2' >Code</button></a>
           </div>
         </div>
 
        </div>
       ) )}

      </div>
      </div>
    </div>
  )
}

export default Work