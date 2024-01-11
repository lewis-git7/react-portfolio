import me from '../assets/me.jpeg'

export default function About(){
  return(
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-23 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <span className="text-yellow-500">Lewis.</span>
            <br className="hidden sm:flex"/>I enjoy building web-based applications.
          </h1>
          <p className="mb-8 leading-relaxed">
            Ambitions, driven BSc Computer Science graduate, seeking employment.
            Academic studies have allowed me to pursue my passion for IT and technology, hoping to explore this passion further.
          </p>
          <div className="flex justify-center">
            <a
            href="#contact"
            className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Work With Me
            </a>
            <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:1-1/2 w-5/6">
          <img
          className="relative mx-auto rounded-3xl overflow-hidden"
          alt="image-of-me"
          src={me}
          />
        </div>
      </div>
    </section>
  )
}