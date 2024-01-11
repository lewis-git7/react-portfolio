import {CodeIcon} from '@heroicons/react/solid';
import React from 'react';
import PROJECT_DATA from '../assets/projectsData.json'

console.log(PROJECT_DATA)

export default function Projects(){
  return(
    <section id="projects" className="text-gray-400 bg-gray-900 body-font pb-20">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="m-auto w-10"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Projects I've Built</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {PROJECT_DATA.map((project) => (
            <div className="w-1/2 h-64 bg-gray-700 p-4 border rounded-md hover:bg-gray-800 hover:cursor-pointer">
              <a href="https://www.google.com" className="flex justify-evenly">
              <div>
                <h2 className="font-semibold text-white text-xl">{project.projectName}</h2>
                <p className="text-sm text-yellow-500 italic">{project.skillsUsed}</p>
              </div>
                
            </a>
            
            </div>
            
          ))}
        </div>
        
        
        
        
      </div>
    </section>
  )
}