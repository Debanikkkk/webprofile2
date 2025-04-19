const projects=document.getElementById('projectsid')
console.log('we have entered this')
projects.style.display='flex'
projects.style.flexDirection='row'
projects.style.gap=10
projects.style.flexWrap='wrap'
projects.style.margin=100

const projjson=[
    {
        name: 'WorkHive',
        description:'Designed and Developed WorkHive, Using PERN stack (PostgreSQL, ExpressJS, ReactJS, NodeJS). Implemented RBAC (Role Based Access Control) to ensure seamless hierarchy between different users, with 10+ workplace features like attendance management, Leave Requests and HR-Letters reducing manual processing time by 40%, Designed a user-friendly and eye catching front-end increasing user engagement by 25%',
        image:'../media/workhive.png'
    }, 
      

]
console.log('we have entered this')

for(let i=0; i<projjson.length; i++){
console.log('we have entered this')

    const projectbox=document.createElement('div')
    projectbox.style.display='flex'
    projectbox.style.flexDirection='column'
    projectbox.style.backgroundColor

    const image=document.createElement('img')
    image.src=projjson[i].image
    image.alt=projjson[i].name
    image.style.height=100
    image.style.width=100
    image.style.objectFit='contain'

    projectbox.appendChild(image)
    projects.appendChild(projectbox)

}
