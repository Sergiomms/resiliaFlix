$(document).ready(() => {
  let nome = $("#nome");
  let email = $("#email");
  let rg = $("#rg");
  let cep = $("#cep");
  let senha = $("#senha");
  let confirmacaoSenha = $("#confirmacaoSenha");
  let btnEnviar = $("#enviar");
  let numero = $("#numero");

  limpaInputDepoisDoEvento(nome, "focus");
  limpaInputDepoisDoEvento(email, "focus");
  limpaInputDepoisDoEvento(rg, "focus");
  limpaInputDepoisDoEvento(cep, "focus");

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
  numero.change(() => {
    btnEnviar.focus();
  });
  btnEnviar.click((event) => {
    if (nome.val()!== "" &&
        email.val()!== "" &&
        senha.val()!== "" &&
        rg.val()!== "" &&
        cep.val()!== "" &&
        numero.val()!== ""
    ) {
      location.href = "./home.html";
    } else {
      event.preventDefault();
      alert('Por favor, preencha todos os campos obrigatórios')
    }
  });
});
