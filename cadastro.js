//Serve para limpar o valor do input quando clicado
function limpaValorDoInput(entrada) {
  entrada.on("click", () => {
    entrada.val(" ");
  });
}

let nome = $("#nome");
let email = $("#email");
let senha = $("#senha");
let confirmacaoSenha = $("#confirmacaoSenha");
let rg = $("#rg");
let cep = $("#cep");
let estado = $("#estado");
let cidade = $("#cidade");
let bairro = $("#bairro");
let rua = $("#rua");
let numero = $("#numero");
let complemento = $("#complemento");

//Limpa o valor do input passado como parâmetro;
limpaValorDoInput(nome);
limpaValorDoInput(email);
limpaValorDoInput(cep);
limpaValorDoInput(rg);
