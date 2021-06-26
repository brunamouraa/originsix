// ABRE E FECHA MENU QUANDO CLICAR NO ICON //

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}


// QUANDO CLICAR EM UM ITEM, FECHAR O MENU // 

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}


// COLOCAR SOMBRA NO HEADER QUANDO DER SCROLL //

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
// OFFSEThEIGHT é o deslocamento da pagina

function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
      // scroll é maior que a altura do header
      header.classList.add('scroll')
    } else {
      // menor que a altura do header
      header.classList.remove('scroll')
    }
}

// TESTIMONIALS SLIDER SWIPER//

const swiper = new Swiper('.swiper-container', {
    slidePerView: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    mouseweheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});


//SCROLLREVEAL: MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PAGINA //
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
     #about .image, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonials,
     #contact .text, #contact .links,
     footer .brand, footer .social
     `,
     {interval: 100}
)


// BOTÃO VOLTAR PARA O TOP//

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }


// MENU ATIVO CONFORME SEÇÃO VISIVEL NA PAGINA
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
