const menuLinks = [
    {text: 'Home', href:'index.html'},
    {text: 'Sarah\'s Resume', href:'SarahTranResume23.pdf'},
    {text: 'Sarah\'s Projects', href: 'projects.html'},
    {text: 'LinkedIn', href:'https://www.linkedin.com/in/transarah/'},
    {text: 'github', href:'https://github.com/supersarahhh'},
    {text: 'home-icon', href:'index.html'}
];

const homeBtn = document.querySelector('.HomeButton');
const resumeBtn = document.querySelector('.ResumeButton');
const projectBtn = document.querySelector('.ProjectButton');
const liBtn = document.querySelector('.linkedin')
const gitBtn = document.querySelector('.git')
const homeIcn = document.querySelector('.home')


homeBtn.addEventListener('click', function() {
  location.href = menuLinks[0].href;
});


resumeBtn.addEventListener('click', function() {
    location.href = menuLinks[1].href;
});
projectBtn.addEventListener('click', function() {
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
    resumeBtn.classList.toggle("hidden");
    projectBtn.classList.toggle("hidden");

    console.log('hamburg')
});

const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');


const openModal = () => {
    modal.style.display = 'block';  
  };
const closeModal = () => {
    modal.style.display = 'none';
  };
  
openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

  setTimeout(openModal, 1000);

