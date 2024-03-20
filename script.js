// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-L61X6Q6E9C');

// JavaScript for changing header background color
const header = document.querySelector('header');

header.addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    header.style.backgroundColor = '#' + randomColor;
});
