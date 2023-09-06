import Image from "next/image"
import pfp from "./pfp.jpg"
import p1 from "./p1.png"
import p2 from "./p2.jpg"
import p3 from "./p3.png"
import p4 from "./p4.jpg"
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {FaPython, FaJs, FaReact, FaHtml5, FaGitAlt, FaCss3Alt, FaHackerrank} from 'react-icons/fa'

export default function Home() {
  return (
    <div className="text-black font-sans">
        <head>
          <title>Numan Ahmed</title>
        </head>

      <main className="bg-white lg:px-32 md:px-3 sm:px-0">
        <section className=" bg-white min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-bold font-sans ">Numan Ahmed.</h1>
            <ul className=" flex items-center">
              <li><a href="mailto:nahmedshaon@gmail.com" target="_blank" className=" font-bold bg-gradient-to-r bg-red-300 px-1 py-1 rounded-md" >Contact me</a></li>
            </ul>
          </nav>

        <div className="flex justify-center">

          <div className=" relative rounded-full w-40 h-40 overflow-hidden">
            <Image src={pfp} layout="fill" objectFit="cover"/>
        
          </div>
          <div className=" font-mono ps-6 pt-8 md:py-9 md:leading-10 lg:py-12">
            <h2 className="md:text-xl sm:text-sm">Hi, I am a first year <span className=" text-red-300">computer science </span>student.</h2>
            <h3>Check out some of my work below ↓ </h3>

          </div> 
          </div>


          <h1 className=" font-mono font-bold pt-24 pb-5 text-3xl flex justify-center">COMPENTENCIES</h1>

          <div className="flex text-5xl justify-center">
            <li className="flex md:gap-10">
            <FaPython /> <FaHtml5/> <FaCss3Alt/> <FaJs /> <FaReact /> <FaGitAlt/> </li>
            
          </div>

          <h1 className=" font-mono font-bold pt-24 pb-5 text-3xl flex justify-center">PROJECTS</h1>

          <div className="md:flex sm:flex-none lg:gap-10 md:gap-5">
 
          <div className=" md:w-1/2 sm:w-full font-mono border-8 p-10 rounded-xl my-5 shadow-2xl ">
            <h3 className="text-xl pb-4">Photography Portfolio Site</h3>
            <Image className="w-9/10 border-4" src={p1} />
            <p className="pt-4 text-gray-500"> Created using vanilla JavaScript, HTML and CSS. Design prototypes made using Figma </p> 
            <div>
            <spam className="bg-red-300 p-1"> <a href="https://aristfe.github.io/portfolio/index.html" target="_blank">Go to site </a></spam>
            </div>
          </div>


          <div className=" md:w-1/2 sm:w-full font-mono border-8 p-10 rounded-xl my-5 shadow-2xl ">
            <h3 className="text-xl pb-4"> Flower Recognition AI </h3>
            <Image className=" w-96 border-4" src={p2} />
              <p className="pt-4 text-gray-500"> Created using Python with TensorFlow, OpenCV, Pandas, Numpy and Matplotlib libraries using a dataset from Kaggle</p> 
              <spam className="bg-red-300 p-1"> <a href="https://github.com/n4hm3?tab=repositories" target="_blank">GitHub</a></spam>
          </div>
                      
          </div>


          <div className=" md:flex justify-center sm:flex-none lg:gap-10 md:gap-5 shadow-2xl ">
            <div className=" md:w-1/2 sm:w-full font-mono justify-center border-8 p-10 rounded-xl my-5 shadow-2xl">
              <h3 className="text-xl pb-4">2D Platformer</h3>
              <Image className="w-9/10 border-4" src={p3} />
              <p className="pt-4 text-gray-500"> Created using Python with the PyGame Library</p> 
              <spam className="bg-red-300 p-1"> <a href="https://github.com/n4hm3?tab=repositories" target="_blank">GitHub</a></spam>
            </div>

            <div className=" md:w-1/2 sm:w-full font-mono justify-center border-8 p-10 rounded-xl my-5 shadow-2xl ">
              <h3 className="text-xl pb-4">Ecommerce Website</h3>
              <Image className="w-9/10 border-4 blur-sm" src={p4} />
              <p className="pt-4 text-gray-500"> Work in progress...</p> 
            </div>

        </div>
            <div className=" flex justify-between bg-white py-2 ">
              <p className="text-xs md:pt-10 sm:pt-0">Made by Numan Ahmed using reactJS and tailwindcss</p>
              <li className=" md:text-5xl text-2xl flex gap-4 ">
                <a href="https://www.instagram.com/nas4_4/" target="_blank"> <AiFillInstagram /> </a>
                <a href="https://www.linkedin.com/in/numan-ahmed-711299282/" target="_blank"> <AiFillLinkedin /> </a>
                <a href="https://github.com/n4hm3" target="_blank"> <AiFillGithub/> </a>
                <a href="https://www.hackerrank.com/n4hm3" target="_blank"> <FaHackerrank/> </a>
              </li>
            </div>
 
          { /* add the names of the competencies
            <div className="text-xl flex justify-center gap-8 ">
            <spam className="bg-red-100 ">Python</spam> <spam className="bg-red-100">HTML</spam> <spam className="bg-red-100 ">CSS</spam> <spam className="bg-red-100 ">JavaScript</spam> <spam className="bg-red-100 ">ReactJS</spam> <spam className="bg-red-100 ">Git</spam>
            </div>
            <div className=" text-3xl flex justify-center gap-4 ">
              <li className="text-3xl flex gap-4 pe-4">
                <a href="https://www.instagram.com/nas4_4/" target="_blank"> <AiFillInstagram /> </a>
                <a href="https://www.linkedin.com/in/numan-ahmed-711299282/" target="_blank"> <AiFillLinkedin /> </a>
                <a href="https://github.com/n4hm3" target="_blank"> <AiFillGithub/> </a>
                <a href="https://www.hackerrank.com/n4hm3" target="_blank"> <FaHackerrank/> </a>
              </li>
            </div>
          */}


        </section>     
      </main>
    </div>
  )
}
