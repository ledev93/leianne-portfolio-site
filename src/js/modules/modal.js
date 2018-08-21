
const mainModal = document.getElementById('mainModal')
const aboutModal = document.getElementById('aboutModal')
const aboutModalBtn = document.getElementById('aboutModalBtn')
const projectsModal = document.getElementById('projectsModal')
const projectsModalBtn = document.getElementById('projectsModalBtn')
const closeBtn1 = document.getElementById('btn1')
const closeBtn2 = document.getElementById('btn2')


aboutModalBtn.addEventListener('click', () => aboutModal.style.display = "inline")
projectsModalBtn.addEventListener('click', () => projectsModal.style.display = "inline")


closeBtn1.addEventListener('click', () => aboutModal.style.display = "none")
closeBtn2.addEventListener('click', () => projectsModal.style.display = "none")



