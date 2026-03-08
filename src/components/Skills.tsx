import circle from '../assets/circle.svg'
import solidCircle from '../assets/solid-circle.svg'
import skillJson from '../config/skills.json'

const MAX_LEVEL = 5

const skillItem = (skill : {skill: string, level: number}) => {

  const skillLevelItems = []
  for (let i = 0; i < MAX_LEVEL; i++) {
    if (i < skill.level) {
      skillLevelItems.push(<img src={solidCircle} alt="circle" />)
    } else {
      skillLevelItems.push(<img src={circle} alt="circle" />)
    }
  }

  return (
    <li>
      { skill.skill }
      <span>
        { skillLevelItems }
      </span>
    </li>
  )
}

export const Skills = () => {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <ul id="skill-list">
        { skillJson.skills.map((skill) => skillItem(skill)) }
      </ul>
    </div>
  )
}
