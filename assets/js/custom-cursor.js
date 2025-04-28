document.addEventListener('DOMContentLoaded', () => {
  // Create cursor elements
  const cursor = document.createElement('div');
  const ring = document.createElement('div');

  cursor.classList.add('cursor-core');
  ring.classList.add('cursor-ring');

  document.body.appendChild(cursor);
  document.body.appendChild(ring);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - 7}px, ${mouseY - 7}px)`;
  });
  
  // Ring
  function animate() {
    ringX += (mouseX - ringX) * 0.08; // slower (from 0.15 -> 0.08)
    ringY += (mouseY - ringY) * 0.08;
    ring.style.transform = `translate(${ringX - 7}px, ${ringY - 7}px)`;
    requestAnimationFrame(animate);
  }
  
  
  animate();

  // Hover effect
  const hoverTargets = document.querySelectorAll('a, button, input[type="button"], input[type="submit"]');

  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('hover');
      cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('hover');
      cursor.classList.remove('hover');
    });
  });
});
