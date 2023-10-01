const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarPersonagem();

		botao.classList.add("select");
		personagens[indice].classList.add("select");
	});
});

function desselecionarPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.select");
	personagemSelecionado.classList.remove("select");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.select");
	botaoSelecionado.classList.remove("select");
}