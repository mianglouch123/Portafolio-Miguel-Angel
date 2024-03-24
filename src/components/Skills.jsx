import React from 'react'

const Skills = () => {

const SKILLS_OBJECT = [
  
    {
        title : 'HTML',
        path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'
    },
    {
        title : 'CSS',
        path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
    },  {
        title : 'JAVASCRIPT',
        path : 'https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png'
    } ,
    {
        title : 'TYPESCRIPT',
        path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
    },    
    ,  {
        title : 'REACT',
        path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
    },  {
        title : 'NEXT JS 14',
        path : 'https://nextjs.org/static/blog/next-14/twitter-card.png'
    },  {
        title : 'VUE 3',
        path : 'https://vuejs.org/images/logo.png'
    }, 
    
    {
        title : 'TAILWINDCSS',
        path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
    },  {
        title : 'NODE JS',
        path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png'
    },
    {
        title : 'MYSQL',
        path : 'https://www.svgrepo.com/show/303251/mysql-logo.svg'
    },  {
        title : 'MONGO DB',
        path : 'https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo-1-1280x720.png'
    },
    {
        title : 'GITHUB',
        path : 'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'
    },
    
]
  return (
    <div name='skills' className='w-full h-screen bg-[#0b1122] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-slate-500 '>Habilidades</p>
              <p className='py-4 text-3xl' > Tecnologías con las que trabajo</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
             
             {SKILLS_OBJECT.map((content) => (
                 <div key={content.title} className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                 <img className='w-20 mx-auto' src={content.path} alt="HTML icon" />
                 <p className='my-4'>{content.title}</p>
             </div>
             ))}
      </div>
    </div>
    </div> 
  )
}

export default Skills