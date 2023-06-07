const menuLinks = [
    {text: 'About Sarah', href:'about.html'},
    {text: 'Sarah\'s Resume', href:'resume.html'},
    {text: 'Sarah\'s Projects', href: 'projects.html'},
];

const aboutBtn = document.querySelector('.AboutButton');
const resumeBtn = document.querySelector('.ResumeButton');
const projectBtn = document.querySelector('.ProjectButton');

aboutBtn.addEventListener('click', function() {
    location.href = menuLinks[0].href;
});

resumeBtn.addEventListener('click', function() {
    location.href = menuLinks[1].href;
});

projectBtn.addEventListener('click', function() {
    location.href = menuLinks[2].href;
});