function toggleNav() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = this.getAttribute('href');
        }
    });
});
