//char caracter a b c d e
//string 'texto aqui' ou  ""
//numeros number 1 2 3 4 5 int 1,35 float
//boolean V ou F, True or false
//{} objetos
//function (){}
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//esconder o menu ao clicar em um item
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da pagina quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

//testimonial slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//scrollreveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .item
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials, 
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)
//back to top
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show2')
  } else {
    backToTopButton.classList.remove('show2')
  }
}

//menu ativo conforme a sessão visível
const sections = document.querySelectorAll(' main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionid = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop

    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpoint && checkpointEnd) {
      document
        .querySelectior('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelectior('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//when scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
