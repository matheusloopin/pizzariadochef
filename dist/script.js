const botaoX = document.getElementById("botao");
const bg = document.querySelector(".move");
const overlay = document.querySelector(".overlay");
const btx = document.getElementById("btx");

// botao menu sumir ao rolar a página.
let lastScrollTop = 0;
const botaoMenu = document.getElementById("botao");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // Rolar para baixo -> esconde o botão
    botaoMenu.style.opacity = "0";
    botaoMenu.style.pointerEvents = "none";
  } else {
    // Rolar para cima -> mostra o botão
    botaoMenu.style.opacity = "1";
    botaoMenu.style.pointerEvents = "auto";
  }

  lastScrollTop = scrollTop;
});


function aparecer() {
  bg.classList.toggle("active");
  overlay.classList.toggle("active"); // Ativa/desativa o overlay
  botaoX.classList.toggle("hidden"); // Esconde/mostra o ícone de hambúrguer
}

// Abre/fecha o menu ao clicar no botão de abrir
botaoX.addEventListener("click", aparecer);

// Fecha o menu ao clicar no botão de fechar
btx.addEventListener("click", aparecer);

// Fecha o menu ao clicar no overlay
overlay.addEventListener("click", aparecer);


// Digitando
const text = "Hambúrguer do Cheff, Sabor e qualidade em cada mordida!";
  const typingElement = document.getElementById("typing");
  const cursorElement = document.getElementById("cursor");
  
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100); // Ajuste o tempo para velocidade de digitação
    } else {
      cursorElement.style.display = "none"; // Remove o cursor após a digitação
    }
  }

  setTimeout(type, 500); // Pequeno delay antes de começar a digitar


// Swisper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }  ,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});