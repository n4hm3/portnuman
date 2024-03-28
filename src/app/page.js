
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaPython, FaJs, FaReact, FaHtml5, FaGitAlt, FaCss3Alt, FaHackerrank } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Project from "./project.js";

export default function Home() {
  return (
    <html>
      <head>
        <title>Numan Ahmed</title>
      </head>
      <body >
        <nav className="py-5 flex justify-between md:px-3 sm:px-4">
          <h1 className="text-xl font-bold font-sans">Numan Ahmed.</h1>
          <ul className="flex items-center">
            <li><a href="mailto:nahmedshaon@gmail.com" target="_blank" className="text-sm font-bold px-1 py-1 rounded-md">CONTACT ME |</a></li>
          <ul className="flex text-xl items-center ">
            <li><a href="https://www.linkedin.com/in/numan-ahmed-711299282/" target="_blank" className=""><AiFillLinkedin /></a></li>
            <li><a href="https://github.com/n4hm3" target="_blank" className=""><AiFillGithub /></a></li>
            <li><a href="https://www.instagram.com/nas4_4/" target="_blank" className=""><AiFillInstagram /></a></li>
          </ul>
          </ul>
        </nav>
        <main className="md:px-20 sm:px-4">
          <section className="min-h-screen">

            <div className="flex justify-center">
              <div className="text-5xl ps-6 pt-8 md:py-9 md:leading-10 lg:py-12">
                <h2>Hi, my name is Numan</h2>
                <h3>Check out some of my work below ↓</h3>
              </div>
            </div>
            <h1 className="font-bold pt-24 pb-5 text-3xl flex justify-left">PROJECTS</h1>
            <div className='pt-2'>
            <Project title="<Flower_Recognition_CNN />" video="FlowerCNN.mp4" description="Developed a flower classification system for identifying different types of flowers through deep learning and image processing, resulting in an average accuracy of 90%. I learned a lot about Convolutional Neural Network (CNN) architecture and how to combine different libraries for data manipulation. I used 4 layers, a ReLU activation function and trained over 10 epochs." techStack="Python/TensorFlow/Keras/OpenCV/Scikit-learn" link="https://github.com/n4hm3/FlowerRecognition"/>
</div>
            <div className='pt-2'>
            <Project title="<Photography_Portfolio_Website />" video="PhotoPort.mp4" description="Designed a portfolio page to display my friend’s photography. I designed the website in Figma and then implemented it in Vanilla HTML, CSS and JavaScript. This was my first attempt at web development and have learned a lot since then. I hope to remake this page in the future with faster image loading time and a more creative design. I used GitHub pages to host the site." techStack="HTML/JS/CSS" link="https://aristfe.github.io/portfolio/index.html"/>
</div>
            <div className='pt-2'>
            <Project title="<Sandunes_2D_Platformer />" video="SandunesPy.mp4" description="Inspired by games like Mario and Hollow Knight, I made a tile based platformer. I used an object oriented approach and cycled through many iterations. Using the PyGame library I learned to read documentation efficiently. I also learned a lot about pixel art and animation. Credit to DaFluffyPotato for the engine file I used in the later iterations." techStack="Python/PyGame/OOP" link="https://github.com/n4hm3/sandDunesPlatformer"/>
</div>
            <div className='pt-2'>
            <Project title="<Sorting_Algorithm_Visualiser_CLI />" video="sortingAlgo.mp4" description="To gain a more intuitive understanding of the algorithms I learned from lectures, I implemented them in Java. This was a fun puzzle that helped me engage with the content. I hope to make more visualisations in the future using different programming languages and tools." techStack="Java/Terminal" link="https://github.com/n4hm3/SortingAlgoVisuals"/>
</div>

          </section>
        </main>
        <footer className="flex justify-between md:px-3 sm:px-4">
          <p className="text-sm">© {new Date().getFullYear()} Numan Ahmed</p>
        </footer>
      </body>
    </html>
  );
}