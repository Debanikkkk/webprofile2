const skills=[
    {
    name: 'NodeJS',
    logo: './media/nodejs.png'
    },
    {
    name: 'ExpressJS',
    logo: './media/expressjs.png'
    },
    {
    name: 'PostgreSQL',
    logo: './media/postgresql.png'
    },
    {
    name: 'ReactJS',
    logo: './media/reactjs.png'
    },
    {
    name: 'HTML',
    logo: './media/html.png'
    }, {
    name: 'CSS',
    logo: './media/css.png'
    },

]
const container=document.getElementById('skill-container');
    // container.style.display='flex'
    // container.style.gap=10;
    // container.style.flexDirection='row'
for(let i=0; i<skills.length; i++){
const skillcontainer=document.createElement('div')

skillcontainer.style.display='flex'
skillcontainer.style.flexDirection='column'
skillcontainer.style.gap='10px'
skillcontainer.style.border='inset 0px white'
// skillcontainer.style.backgroundColor='white'
skillcontainer.style.borderRadius='10px'
skillcontainer.className="skill-box"


const img=document.createElement('img')
img.src=skills[i].logo;
img.alt=skills[i].name;
// img.style.objectFit='contain'
img.width=150;



const name=document.createElement('span')
name.textContent=skills[i].name;

skillcontainer.appendChild(img)
skillcontainer.appendChild(name)
container.appendChild(skillcontainer)
}