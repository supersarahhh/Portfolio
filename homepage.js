const menuLinks = [
    {text: 'About Sarah', href:'about.html'},
    {text: 'Sarah\'s Resume', href:''},
    {text: 'Sarah\'s Projects', href: 'projects.html'},
    {text: 'LinkedIn', href:'https://www.linkedin.com/in/transarah/'},
    {text: 'LinkedIn', href:'https://github.com/supersarahhh'}
];

const aboutBtn = document.querySelector('.AboutButton');
const resumeBtn = document.querySelector('.ResumeButton');
const projectBtn = document.querySelector('.ProjectButton');
const liBtn = document.querySelector('.linkedin');
const gitBtn = document.querySelector('.git')

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

gitBtn.addEventListener('click', function() {
    location.href = menuLinks[4].href;
});