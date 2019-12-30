const nav = document.querySelector('nav');
const navToggle = document.querySelector('#nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

let navIsActive = false;

const toggleNav = () => {
  navIsActive = !navIsActive;
  if (navIsActive === false) {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
};

navToggle.addEventListener('click', toggleNav);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', toggleNav);
}
