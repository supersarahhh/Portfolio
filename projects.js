// const next = document.querySelector('.next');
// const previous = document.querySelector('.previous');
const images = document.querySelectorAll('.images img');
const imageLinks = [
    'https://github.com/supersarahhh/dep-',
    'https://meridio-b1615a040797.herokuapp.com/',
    'https://flock-app-5648d3eddff2.herokuapp.com/',

]; 

const imagesContainer = document.querySelector('.carousel-images');

imagesContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = Array.from(imagesContainer.children).indexOf(event.target);
        if (index >= 0 && index < imageLinks.length) {
            window.location.href = imageLinks[index];
        }
    }
});



const menuLinks = [
    {text: 'Home', href:'index.html'},
    {text: 'Sarah\'s About Me', href: 'about.html'},
    {text: 'Sarah\'s Resume', href:'SarahTranResume.pdf'},
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



