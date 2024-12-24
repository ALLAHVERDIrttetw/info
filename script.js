// Interactive Bubbles Animation
const canvas = document.getElementById('bubbles-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

class Bubble {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.y -= this.speed;
        if (this.y + this.radius < 0) {
            this.y = canvas.height + this.radius;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

function createBubbles() {
    bubbles = [];
    for (let i = 0; i < 50; i++) {
        let radius = Math.random() * 10 + 5;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        let speed = Math.random() * 2 + 1;
        bubbles.push(new Bubble(x, y, radius, color, speed));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach(bubble => bubble.update());
    requestAnimationFrame(animate);
}

createBubbles();
animate();

// Resizing Canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createBubbles();
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
