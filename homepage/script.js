const menuLinks = [
    {text: 'About Sarah', href: '/Users/sarahtran/code/Portfolio/AboutmePage/index.html'},
    {text: 'Sarah\'s Resume', href: ''},
    {text: 'Sarah\'s Projects', href: ''},
    {text: 'Connect with Sarah?', href: ''},
];

const aboutBtn = document.getElementsByClassName('AboutButton');
const resumeBtn = document.getElementsByClassName('ResumeButton');
const projectBtn = document.getElementsByClassName('ProjectButton');
const socialBtn = document.getElementsByClassName('SocialButton');

menuLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    aboutBtn.appendChild(linkEl);
});


aboutBtn.addEventListener('click', function() {
    window.location.href =  menuLinks[0].href;
});