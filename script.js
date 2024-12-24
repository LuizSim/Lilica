const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  const totalSlides = document.querySelectorAll('.slide').length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Seleciona os elementos da tela inicial e da galeria
const telaInicial = document.getElementById('tela-inicial');
const galeria = document.getElementById('galeria');
const botaoEntrar = document.getElementById('entrar');

// Adiciona evento de clique ao botão da tela inicial
botaoEntrar.addEventListener('click', () => {
  telaInicial.classList.add('sair'); // Adiciona a classe para saída da tela inicial
  setTimeout(() => {
    telaInicial.style.display = 'none'; // Oculta a tela inicial após a animação
    galeria.classList.add('entrar'); // Mostra a galeria com a animação
  }, 1000); // Tempo para coincidir com a animação
});
