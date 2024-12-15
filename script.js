alert("Seja bem vindo(a) ao Meu Portfólio!")

function clickMenu() {
    if (itens.style.display == 'block') {
      itens.style.display = 'none'
   } 
   else {
     itens.style.display = 'block'
   }

   }


let currentIndex = 0;

function moveSlide(direction) {
    const images = document.querySelector('.carousel-images');
    const totalImages = images.children.length;

    // Atualizar índice
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Mover carrossel
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => moveSlide(1), 3000); // Muda de slide a cada 3 segundos

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Formulário enviado com sucesso! Obrigado por entrar em contato.");
    form.reset(); // Limpa o formulário
});

