/* loader */

window.onload = () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},1000)

}

/* menu movil */

const menuBtn = document.getElementById("menuBtn")
const nav = document.getElementById("nav")

if(menuBtn){

menuBtn.onclick = () => {

nav.classList.toggle("show")

}

}

/* sonidos */

const hoverSound = document.getElementById("hoverSound")
const clickSound = document.getElementById("clickSound")

document.querySelectorAll("a,button,.btn").forEach(el=>{

el.addEventListener("mouseenter",()=>{

if(hoverSound){

hoverSound.currentTime = 0
hoverSound.play()

}

})

el.addEventListener("click",()=>{

if(clickSound){

clickSound.currentTime = 0
clickSound.play()

}

})

})

/* contador descargas */

function downloadGame(){

let downloads = localStorage.getItem("downloads")

if(downloads == null){

downloads = 0

}

downloads++

localStorage.setItem("downloads", downloads)

document.getElementById("downloadCount").innerText = "Descargas: " + downloads

window.location.href = "game.zip"

}

function loadDownloads(){

let downloads = localStorage.getItem("downloads")

if(downloads == null){

downloads = 0

}

let counter = document.getElementById("downloadCount")

if(counter){

counter.innerText = "Descargas: " + downloads

}

}

loadDownloads()

/* particulas */

const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*3,
speed:Math.random()*0.5

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.fillStyle="rgba(255,255,255,0.2)"

ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fill()

p.y += p.speed

if(p.y>canvas.height){

p.y=0
p.x=Math.random()*canvas.width

}

})

requestAnimationFrame(animate)

}

animate()
