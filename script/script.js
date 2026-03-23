const btn_mobile = document.querySelector('#btn_mobile')
const navbar = document.querySelector('#navbar')
const icon = document.querySelector('.btn_mobile i')

btn_mobile.addEventListener('click', () => {
    navbar.classList.toggle('show')
    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
})