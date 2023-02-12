let mobileBtn = document.getElementById('mobile-btn')
let navLinks = document.getElementById('nav-links')
let closeBtn = document.getElementById('close-btn')

const navBackground = document.getElementById('mobile-nav-background')


mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    navBackground.classList.add('show')
    // closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    navBackground.classList.remove('show')
})