function enterPortfolio(){

document.getElementById("landing-page").classList.add("hidden")
document.getElementById("portfolio-wrapper").classList.remove("hidden")

lucide.createIcons()
renderCertificates()

}

function goToPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById(page+"-page").classList.add("active")

document.querySelectorAll(".sidebar-item").forEach(btn=>{
btn.classList.remove("active")
})

document.querySelector(`[data-page="${page}"]`)?.classList.add("active")

}

function toggleLanding(){

document.getElementById("landing-page").classList.toggle("hidden")
document.getElementById("portfolio-wrapper").classList.toggle("hidden")

}

/* theme */

function toggleTheme(){
document.body.classList.toggle("dark")
document.body.classList.toggle("light")
}

/* certificates */

const certificates=[

{
title:"AWS Academy Graduate - Cloud Foundations",
issuer:"AWS Academy",
date:"June 2025"
},

{
title:"Project Management Fundamentals 101",
issuer:"MST Connect",
date:"Aug 2025"
},

{
title:"Scrum Master Certification",
issuer:"Udemy",
date:"Nov 2025"
},

{
title:"Introduction to Agentic AI on AWS",
issuer:"Udemy",
date:"Mar 2026"
}

]

function renderCertificates(){

const grid=document.getElementById("certifications-grid")

if(!grid) return

grid.innerHTML=""

certificates.forEach(cert=>{

const card=document.createElement("div")

card.className="project-card"

card.innerHTML=`
<h3>${cert.title}</h3>
<p>${cert.issuer}</p>
<p>${cert.date}</p>
<button class="main-btn cta">View Certificate</button>
`

card.querySelector("button").onclick=()=>openModal(cert.title)

grid.appendChild(card)

})

}

/* modal */

function openModal(title){

document.getElementById("modal-title").innerText=title
document.getElementById("modal").classList.remove("hidden")

}

function closeModal(){
document.getElementById("modal").classList.add("hidden")
}

/* lightbox */

function openLightbox(src){

document.getElementById("lightbox-img").src=src
document.getElementById("lightbox").classList.remove("hidden")

}

function closeLightbox(){

document.getElementById("lightbox").classList.add("hidden")

}

/* email */

function sendEmail(){

const message=document.getElementById("email-message").value

window.location.href=`mailto:pgldecastro@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(message)}`

}