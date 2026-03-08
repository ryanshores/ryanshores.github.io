const maxLevel = 5;
const skills = [
    {
        skill: 'HTML/CSS/JS',
        level: 4
    },
    {
        skill: 'Backend & Architecture',
        level: 5
    },
    {
        skill: 'Frontend',
        level: 3
    },
    {
        skill: 'Cloud & DevOps',
        level: 4
    },
    {
        skill: 'Database & Platforms',
        level: 5
    }

]

const circle = document.createElement('img');
circle.setAttribute('src', 'svg/circle.svg');

const solidCircle = document.createElement('img');
solidCircle.setAttribute('src', 'svg/solid-circle.svg');

const skillsElement = document.getElementById("skill-list");
skills.forEach(skill => {
    const spanItem = document.createElement('span');

    for (let i = 0; i < skill.level; i++) {
        spanItem.append(solidCircle.cloneNode());
    }

    for (let i = skill.level; i < maxLevel; i++) {
        spanItem.append(circle.cloneNode());
    }

    const skillItem = document.createElement('li');
    skillItem.textContent = `${skill.skill} `;
    skillItem.appendChild(spanItem);
    skillsElement.appendChild(skillItem);
})