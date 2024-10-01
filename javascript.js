let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    let s = this.scrollY;
    if (s > (window.innerHeight) * 0.2) {
        navbar.classList.add("navchange");
    }
    else {
        navbar.classList.remove("navchange");
    }
})



const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mainNav.classList.remove('active');
  }
});