document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', event => {
      const point = document.createElement('div');
      point.textContent = '+1';
      point.className = 'point';
      document.body.appendChild(point);
  
      const x = event.clientX;
      const y = event.clientY;
      point.style.left = `${x}px`;
      point.style.top = `${y}px`;
  
      setTimeout(() => {
        point.remove();
      }, 1000);
    });
  });
  