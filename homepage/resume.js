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
    {text: 'Home', href:'homepage.html'},
    {text: 'About Sarah', href:'about.html'},
    {text: 'Sarah\'s Projects', href: 'projects.html'},
];

const homeBtn = document.querySelector('.HomeButton');
const aboutBtn = document.querySelector('.AboutButton');
const projectBtn = document.querySelector('.ProjectButton');


homeBtn.addEventListener('click', function() {
  location.href = menuLinks[0].href;
});

aboutBtn.addEventListener('click', function() {
    location.href = menuLinks[1].href;
});

projectBtn.addEventListener('click', function() {
    location.href = menuLinks[2].href;
});
