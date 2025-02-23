// Интерактивный свет фонаря
const lanternLight = document.querySelector('.lantern-light');
const lanternBeam = document.querySelector('.lantern-beam');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    lanternLight.style.transform = `translate(-50%, -50%) scale(${1 + x * 0.2}, ${1 + y * 0.2})`;
    lanternBeam.style.transform = `translate(-50%, -50%) rotate(${x * 90 - 45}deg)`;
});

// Динамические частицы
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('dynamic-particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${Math.random() * 5 + 1}px`;
    particle.style.height = `${Math.random() * 5 + 1}px`;
    particle.style.animationDuration = `${Math.random() * 5 + 2}s`;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}

setInterval(createParticle, 500);

// Динамические звёзды
function createStar() {
    const star = document.createElement('div');
    star.classList.add('dynamic-star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = `${Math.random() * 2 + 1}px`;
    star.style.animationDuration = `${Math.random() * 7 + 3}s`;

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 15000);
}

setInterval(createStar, 1000);

// Обработка формы контактов
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
        this.reset();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});