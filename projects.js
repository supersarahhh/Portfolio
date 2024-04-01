const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const slides = document.querySelectorAll('.carousel-slide');
const imageLinks = [
    'https://dep-list-a9f48b983424.herokuapp.com/',
    'https://meridio-b1615a040797.herokuapp.com/',
    'https://flock-app-5648d3eddff2.herokuapp.com/',
];

let currentIndex = 0;

function updateSlide() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}

function goToPreviousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
}

next.addEventListener('click', goToNextSlide);
previous.addEventListener('click', goToPreviousSlide);

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        window.location.href = imageLinks[index];
    });
});

updateSlide();

const menuLinks = [
    {text: 'Home', href:'index.html'},
    {text: 'Sarah\'s About Me', href: 'about.html'},
    {text: 'Sarah\'s Resume', href:'SarahTranResume23.pdf'},
    {text: 'LinkedIn', href:'https://www.linkedin.com/in/transarah/'},
    {text: 'LinkedIn', href:'https://github.com/supersarahhh'},
    {text: 'home-icon', href:'index.html'}
];

const homeBtn = document.querySelector('.HomeButton');
const aboutBtn = document.querySelector('.AboutButton');
const resumeBtn = document.querySelector('.ResumeButton');
const liBtn = document.querySelector('.linkedin')
const gitBtn = document.querySelector('.git')
const homeIcn = document.querySelector('.home')


homeBtn.addEventListener('click', function() {
  location.href = menuLinks[0].href;
});

aboutBtn.addEventListener('click', function() {
    location.href = menuLinks[1].href;
});
resumeBtn.addEventListener('click', function() {
    location.href = menuLinks[2].href;
});
liBtn.addEventListener('click', function() {
    location.href = menuLinks[3].href;
 });
gitBtn.addEventListener('click', function() {
    location.href = menuLinks[4].href;
});
homeIcn.addEventListener('click', function() {
    location.href = menuLinks[5].href;
  });

const kebab = document.querySelector('.menu');

kebab.addEventListener('click', function() {
  kebab.classList.toggle("change");

  homeBtn.classList.toggle("hidden");
  aboutBtn.classList.toggle("hidden");
  resumeBtn.classList.toggle("hidden");
  
});



