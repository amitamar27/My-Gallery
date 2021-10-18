'use strict'

var gProjs



function createProjs() {
    var projs = []
    projs.push(createProj('minesweeper','minesweeper project ','this is minesweeper game project from sprint 1',"img/portfolio/Minesweeper(game).jpg"))
    projs.push(createProj('pacman','pacman project ','this is pacman game project from sprint 1',"img/portfolio/pacman.jpg"))
    projs.push(createProj('todo-list','todo-list project ','this is todo-list project from sprint 1',"img/portfolio/todo.jpg"))
    gProjs = projs
    console.log(gProjs)
}

// getProjById

function getProjById(projId){
    var proj = gProjs.find((proj)=>{
        return projId === proj.id 
    })
    return proj
}



function createProj(name, title, desc, url, labels = []) {
    return {
        id: makeId(),
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: getFullDate(),
        labels: labels
    }
}