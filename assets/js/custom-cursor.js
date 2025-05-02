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

  // Update mouse position
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - 7}px, ${mouseY - 7}px)`;
  });

  // Ring animation
  function animate() {
    ringX += (mouseX - ringX) * 0.08; // slower (from 0.15 -> 0.08)
    ringY += (mouseY - ringY) * 0.08;
    ring.style.transform = `translate(${ringX - 7}px, ${ringY - 7}px)`;
    requestAnimationFrame(animate);
  }
  
  animate();

  // Only apply hover effect for images
  const hoverTargets = document.querySelectorAll('img');

  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      // Add light pink color on hover for images
      ring.classList.add('image-hover');
      cursor.classList.add('image-hover');
    });
    el.addEventListener('mouseleave', () => {
      // Remove light pink color when leaving an image
      ring.classList.remove('image-hover');
      cursor.classList.remove('image-hover');
    });
  });
});
