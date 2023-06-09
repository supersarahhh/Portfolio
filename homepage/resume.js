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


const menuLinks = [
    {text: 'Home', href:'index.html'},
    {text: 'About Sarah', href:'about.html'},
    {text: 'Sarah\'s Projects', href: 'projects.html'},
    {text: 'LinkedIn', href:'https://www.linkedin.com/in/transarah/'}
];

const homeBtn = document.querySelector('.HomeButton');
const aboutBtn = document.querySelector('.AboutButton');
const projectBtn = document.querySelector('.ProjectButton');
const liBtn = document.querySelector('.linkedin')

homeBtn.addEventListener('click', function() {
  location.href = menuLinks[0].href;
});

aboutBtn.addEventListener('click', function() {
    location.href = menuLinks[1].href;
});

projectBtn.addEventListener('click', function() {
    location.href = menuLinks[2].href;
});

liBtn.addEventListener('click', function() {
  location.href = menuLinks[3].href;
});

const kebab = document.querySelector('.menu');

kebab.addEventListener('click', function() {
  kebab.classList.toggle("change");

  homeBtn.classList.toggle("hidden");
  aboutBtn.classList.toggle("hidden");
  projectBtn.classList.toggle("hidden");

  console.log('hamburg')
});

