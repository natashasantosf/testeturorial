document.querySelector('.hamburguer').addEventListener('click', () => {
    console.log('Hamburguer clicked');
    document.querySelector('.nav-links').classList.toggle('expanded');
  });
console.log('Hamburguer menu script loaded');