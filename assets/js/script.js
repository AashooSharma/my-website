// ===========================
// Hero Section Typing Effect
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing-text");
  if (!typingText) return; // Agar hero abhi load nahi hua to exit

  const texts = ["DevOps Engineer", "AI/ML Enthusiast", "Cybersecurity Expert"];
  let index = 0;
  let charIndex = 0;
  const typingDelay = 100;
  const eraseDelay = 50;

  function type() {
    if (charIndex < texts[index].length) {
      typingText.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, 1500); // Pause before erase
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, eraseDelay);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(type, 500); // Pause before type next
    }
  }

  type();
});






const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');

  // Canvas Resize
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Grid & Particle Settings
  const gridSize = 50;
  const glowColor = 'rgba(0,255,195,0.3)';
  const particleCount = 60;
  const particles = [];

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: `rgba(0,255,195,${Math.random()})`
    });
  }

  function drawGridAndParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Neon Grid
    ctx.strokeStyle = glowColor;
    ctx.lineWidth = 1;

    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw Particles
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();

      // Move particles
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around edges
      if (p.x > canvas.width) p.x = 0;
      if (p.x < 0) p.x = canvas.width;
      if (p.y > canvas.height) p.y = 0;
      if (p.y < 0) p.y = canvas.height;
    });

    requestAnimationFrame(drawGridAndParticles);
  }

  drawGridAndParticles();
}

