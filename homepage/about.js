const menuLinks = [
    {text: 'Home', href:'homepage.html'},
    {text: 'Sarah\'s Resume', href:'resume.html'},
    {text: 'Sarah\'s Projects', href: 'projects.html'},
];

const homeBtn = document.querySelector('.HomeButton');
const resumeBtn = document.querySelector('.ResumeButton');
const projectBtn = document.querySelector('.ProjectButton');


homeBtn.addEventListener('click', function() {
  location.href = menuLinks[0].href;
});


resumeBtn.addEventListener('click', function() {
    location.href = menuLinks[1].href;
});

projectBtn.addEventListener('click', function() {
    location.href = menuLinks[2].href;
});
