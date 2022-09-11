import React from 'react'
import Skill from './Skill'

const skillList = [
  'UI/UX Design',
  'Web Development',
  'Project Managment',
  'Growth Hacking',
  'Smart Contract',
  'Marketing',
  'UX Writing',
  'Community Marketing',
  'Technical',
  'UI/UX Design',
  'Web Development',
  'Project Managment',
  'Growth Hacking',
  'Smart Contract',
  'Marketing',
  'UX Writing',
  'Community Marketing',
  'Technical',
]

function Skills() {
  return (
    <div className='flex gap-5 overflow-x-scroll'>
        {skillList.map((skill, index) =>
          <Skill key={index} skill={skill}/>
        )}
    </div>
  )
}

export default Skills