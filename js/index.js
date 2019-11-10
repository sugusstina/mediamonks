window.onload = setTimeout(() => {
  const loader = document.querySelector('.loading-page');
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
}, 2000);