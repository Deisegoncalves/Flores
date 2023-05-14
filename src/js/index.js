
const botaoAlteraTema = document.getElementById("botao-alterar-tema");


const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");


botaoAlteraTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  
  // podemos ultizar essa funcao em vez dos body.classList.remove e body.classList.add para alternar
body.classList.toggle("modo-escuro")

  if (modoEscuroEstaAtivo) {
   
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/gira.jpg");

  } else {
    
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/dama.jpg");
  }
});
