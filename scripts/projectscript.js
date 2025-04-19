const projects=document.getElementById('projectsid')
console.log('we have entered this')
projects.style.display='flex'
projects.style.flexDirection='row'
projects.style.gap=10
projects.style.flexWrap='wrap'
projects.style.margin=100
projects.style.justifyContent='space-between'
const projjson=[
    {
        name: 'WorkHive',
        description:'Designed and Developed WorkHive, Using PERN stack (PostgreSQL, ExpressJS, ReactJS, NodeJS). Implemented RBAC (Role Based Access Control) to ensure seamless hierarchy between different users, with 10+ workplace features like attendance management, Leave Requests and HR-Letters reducing manual processing time by 40%, Designed a user-friendly and eye catching front-end increasing user engagement by 25%',
        image:'../media/workhive.png'
    }, 
    {
        name: 'FastKart',
        description:'Constructed FastKart, an E-commerce Platform using PHP, HTML, CSS and JavaScript. Created an admin panel with secure login, enabling product authorization and inventory management, reducing manual inventory review time by 45%.	With smooth and seamless front-end, gave users access to 20+ home décor products.',
        image:'../media/fastkart.png'
    },
    {
        name: 'AQIAware',
        description:'Developed AQIAware, a single page website which calculates AQI based on 10+ parameters like O2, NO2, NOx, PM10, PM2.5 etc. This was achieved using the Random Forest Regressor model',
        image:'../media/aqi.png'
    }

]
console.log('we have entered this')

for(let i=0; i<projjson.length; i++){
console.log('we have entered this')

    const projectbox=document.createElement('div')
    projectbox.style.display='flex'
    projectbox.style.flexDirection='column'
    projectbox.style.backgroundColor='white';
    projectbox.style.border='inset 0px white'
// skillcontainer.style.backgroundColor='white'
projectbox.style.width=400;
projectbox.style.borderRadius='10px'
projectbox.style.alignItems='center'
// skillcontainer.className="skill-box"


 

    const name=document.createElement('h3')
    name.textContent=projjson[i].name
    

    const description=document.createElement('span')
    description.textContent=projjson[i].description
    description.style.fontSize='15px'


    const image=document.createElement('img')
    image.src=projjson[i].image
    image.alt=projjson[i].name
    image.style.height=100
    image.style.width=100
    image.style.objectFit='contain'

    
    projectbox.appendChild(image)
    projectbox.appendChild(name)
    projectbox.appendChild(description)
    projects.appendChild(projectbox)

}
