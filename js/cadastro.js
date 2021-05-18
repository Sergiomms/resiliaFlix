$(document).ready(() => {
  let nome = $("#nome");
  let email = $("#email");
  let rg = $("#rg");
  let cep = $("#cep");
  let senha = $("#senha");
  let confirmacaoSenha = $("#confirmacaoSenha");
  let btnEnviar = $("#btnEnviar");

  limpaInputDepoisDoEvento(nome, "click");
  limpaInputDepoisDoEvento(email, "click");
  limpaInputDepoisDoEvento(rg, "click");
  limpaInputDepoisDoEvento(cep, "click");

  nome.change(() => {
    validacaoNome(nome);
  });

  email.change(() => {
    validacaoEmail(email);
  });

  senha.change(() => {
    validacaoSenha(senha);
  });

  confirmacaoSenha.change(() => {
    verificaConfirmacaoSenha(confirmacaoSenha, senha);
  });

  rg.change(() => {
    validacaoRg(rg);
  });
  cep.change(() => {
    validacaoCep(cep);
  });
  btnEnviar.click(() => {
    location.href = "./home.html";
  });
});
