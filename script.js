
window.onload = ()=>{
setTimeout(()=>{
let loader=document.getElementById("loader")
if(loader) loader.style.display="none"
},1000)
}

/* MENU */

let menuBtn=document.getElementById("menuBtn")
let nav=document.getElementById("nav")

if(menuBtn){
menuBtn.onclick=()=>{
nav.classList.toggle("show")
}
}

/* SOUNDS */

const hover=document.getElementById("hoverSound")
const click=document.getElementById("clickSound")

document.querySelectorAll("a,button").forEach(el=>{

el.addEventListener("mouseenter",()=>{
if(hover){hover.currentTime=0;hover.play()}
})

el.addEventListener("click",()=>{
if(click){click.currentTime=0;click.play()}
})

})

/* DOWNLOAD COUNTER */

function downloadGame(){

let d=localStorage.getItem("downloads")
if(d==null)d=0

d++

localStorage.setItem("downloads",d)

let counter=document.getElementById("downloadCount")

if(counter)counter.innerText="Descargas: "+d

}

/* PARTICLES */

const canvas=document.getElementById("particles")

if(canvas){

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

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

p.y+=p.speed

if(p.y>canvas.height){
p.y=0
p.x=Math.random()*canvas.width
}

})

requestAnimationFrame(animate)

}

animate()

}
