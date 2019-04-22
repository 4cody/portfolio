const homeBtn = document.getElementById('home');
const projBtn = document.getElementById('projects');
const togHome = document.getElementById('switch-home');
const togProj = document.getElementById('switch-proj');

homeBtn.addEventListener('click', homeClick);
projBtn.addEventListener('click', projClick);

function homeClick () {
    homeBtn.classList.add('focus');
    projBtn.classList.remove('focus');

    togHome.style.display = 'block';
    togProj.style.display = 'none';
}

function projClick () {
    homeBtn.classList.remove('focus');
    projBtn.classList.add('focus');

    togHome.style.display = 'none';
    togProj.style.display = 'block';
}