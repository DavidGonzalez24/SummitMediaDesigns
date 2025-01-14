// Smooth Scrolling for Navigation Links
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


// Form Submission Handling
const estimateForm = document.getElementById('estimate-form');
estimateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}, for requesting an estimate! We will get back to you shortly.`);
    estimateForm.reset();
});


// Dynamic Background Animation in Hero Section
const hero = document.getElementById('hero');
let colors = ['#00509E', '#003366', '#0077CC'];
let currentColor = 0;


setInterval(() => {
    currentColor = (currentColor + 1) % colors.length;
    hero.style.backgroundColor = colors[currentColor];
}, 3000);


// Services Section Hover Effect
const services = document.querySelectorAll('.service');
services.forEach(service => {
    service.addEventListener('mouseover', () => {
        service.style.transform = 'scale(1.05)';
        service.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    });


    service.addEventListener('mouseout', () => {
        service.style.transform = 'scale(1)';
        service.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
});


// Auto Scroll Button in Footer
const footer = document.querySelector('footer');
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Back to Top';
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background: #00509E;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
`;
document.body.appendChild(scrollToTopButton);


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});


scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



