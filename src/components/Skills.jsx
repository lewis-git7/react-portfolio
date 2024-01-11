import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import SKILL_DATA  from '../assets/skillsData.json'
export default function Skills(){
  return(
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w3/4 mx-auto mb-8">
            Through dedicated personal development time, taking courses online and doing research, I have learned the following skills.
          </p>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {SKILL_DATA.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4"/>
                  <span className="title-font font-mediumm text-xl text-white">
                    {skill.skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
console.log(SKILL_DATA)