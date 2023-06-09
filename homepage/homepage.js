const menuLinks = [
    {text: 'About Sarah', href:'index.html'},
    {text: 'Sarah\'s Resume', href:'SarahTranResume-3.pdf'},
    {text: 'Sarah\'s Projects', href: 'projects.html'},
    {text: 'LinkedIn', href:'https://www.linkedin.com/in/transarah/'}
];

const aboutBtn = document.querySelector('.AboutButton');
const resumeBtn = document.querySelector('.ResumeButton');
const projectBtn = document.querySelector('.ProjectButton');
const liBtn = document.querySelector('.linkedin')

aboutBtn.addEventListener('click', function() {
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