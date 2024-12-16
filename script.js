// Seleciona todos os elementos com a classe "rating" (esses são os itens de classificação)
const ratings = document.querySelectorAll(".rating");

// Seleciona o contêiner que envolve todos os itens de classificação
const ratingsContainer = document.querySelector(".ratings-container");

// Seleciona o botão de envio (que envia a avaliação)
const sendBtn = document.querySelector("#send");

// Seleciona o painel onde o feedback será exibido após o envio
const panel = document.querySelector("#panel");

// Variável para armazenar a classificação selecionada (inicialmente definida como "Satisfied")
let selectedRating = "Satisfied";

// Adiciona um ouvinte de evento para detectar cliques no contêiner de avaliações
ratingsContainer.addEventListener("click", (e) => {
  // Verifica se o alvo do clique é um item com a classe "rating"
  if (e.target.parentNode.classList.contains("rating")) {
    // Remove a classe "active" de todos os itens de avaliação
    removeActive();

    // Adiciona a classe "active" ao item de avaliação clicado (para destacar a seleção)
    e.target.parentNode.classList.add("active");

    // Atualiza a variável "selectedRating" com o texto do próximo elemento irmão (que contém o valor da avaliação)
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

// Adiciona um ouvinte de evento para o clique no botão de envio
sendBtn.addEventListener("click", () => {
  // Atualiza o conteúdo do painel com a mensagem de agradecimento e a avaliação selecionada
  panel.innerHTML = `
        <p class="heart">❤️</p>   <!-- Exibe um coração -->
        <strong>Thank You! </strong>   <!-- Exibe o texto de agradecimento -->
        <br>
        <strong>Feedback: ${selectedRating} </strong>   <!-- Exibe a avaliação selecionada -->
    `;
});

// Função para remover a classe "active" de todos os itens de avaliação
function removeActive() {
  // Itera por todos os itens de avaliação e remove a classe "active"
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
