const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const images = document.getElementsByClassName('images');

let currentImgIndex = 0;

function updateCarousel() {
    for (let i = 0; i < images.length; i++) {
        if (i === currentImgIndex) {
            images[i].style.display = 'block';
        } else {
            images[i].style.display = 'none';
        }
    }
}

next.addEventListener('click', () => {
    images[currentImgIndex].style.display = 'none';
    
    currentImgIndex = (currentImgIndex + 1) % images.length;
    images[currentImgIndex].style.display = 'block';
});

previous.addEventListener('click', () => {
    images[currentImgIndex].style.display = 'none';
    
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    images[currentImgIndex].style.display = 'block';
});

updateCarousel();

const menuLinks = [
    {text: 'Home', href:'index.html'},
    {text: 'Sarah\'s About Me', href: 'about.html'},
    {text: 'Sarah\'s Resume', href:'SarahTranResume-3.pdf'},
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



