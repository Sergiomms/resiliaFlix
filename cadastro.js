//Serve para limpar o valor do input quando clicado
function limpaValorDoInput(entrada) {
  entrada.on("click", () => {
    entrada.val(" ");
  });
}

let nome = $("#nome");
let email = $("#email");
let senha = $("#senha");
let rg = $("#rg");
let confirmacaoSenha = $("#confirmacaoSenha");
let cep = $("#cep");

//Limpa o valor do input passado como parâmetro;
limpaValorDoInput(nome);
limpaValorDoInput(email);
limpaValorDoInput(cep);
limpaValorDoInput(rg);
