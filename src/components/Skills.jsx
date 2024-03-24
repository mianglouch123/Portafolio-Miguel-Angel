import React from 'react'

const Skills = () => {
<<<<<<< HEAD

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
=======
>>>>>>> dcb4dbfa5a9ed4a70d87752ffa5088697d0d0a3f
  return (
    <div name='skills' className='w-full h-screen bg-[#0b1122] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          
          <div>
<<<<<<< HEAD
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
=======
              <p className='text-4xl font-bold inline border-b-4 border-slate-500 '>Skills</p>
              <p className='py-4 text-3xl' > These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png" alt="Javascript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="Typescript icon" />
                  <p className='my-4'>Typescript</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="REACT icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://cdn.worldvectorlogo.com/logos/nextjs-13.svg" alt="NEXT JS 13 icon" />
                  <p className='my-4'>NEXT JS 13</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="GIT HUB icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="NODE JS icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo-1-1280x720.png" alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="PHP icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://www.svgrepo.com/show/303251/mysql-logo.svg" alt="MYSQL icon" />
                  <p className='my-4'>MYSQL</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="TAILWIND icon" />
                  <p className='my-4'>TAILWIND CSS</p>
              </div>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src="https://vuejs.org/images/logo.png" alt="VUE icon" />
                  <p className='my-4'>VUE 3</p>
              </div>
          </div>
      </div>
    </div>
>>>>>>> dcb4dbfa5a9ed4a70d87752ffa5088697d0d0a3f
  )
}

export default Skills