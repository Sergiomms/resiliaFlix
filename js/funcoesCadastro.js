function limpaInputDepoisDoEvento(entrada, tipoDeEvento) {
  entrada.on(tipoDeEvento, () => {
    entrada.val("");
  });
}
//Verifica se o input nome foi preenchido com nome e sobrenome
function validacaoNome(nome) {
  let valorNome = nome.val();
  let validacaoPrincipal = /\S+\ +\S+/;
  let validacao1 = /[0-9]/;
  if (valorNome !== "Digite seu nome aqui!") {
    if (validacao1.test(valorNome)) {
      alert("Digite nome e sobrenome");
      nome.val("").focus();
      return false;
    } else if (validacaoPrincipal.test(valorNome)) {
      $("#email").val("").focus();
      return true;
    } else {
      alert("Digite nome e sobrenome");
      nome.val("").focus();
      return false;
    }
  } else {
    alert("Digite nome e sobrenome");
    nome.val("").focus();
    return false;
  }
}

//Verifica se o input email foi preenchido com email válido
function validacaoEmail(email) {
  let re = /\S+@\S+\.\S+/;
  if (email.val() !== "") {
    if (re.test(email.val())) {
      $("#senha").val("").focus();
      return true;
    } else {
      alert("Digite um email válido como:\nexemplo@diretorio.com");
      email.val("").focus();
      return false;
    }
  } else {
    alert("Digite um email válido como:\nexemplo@diretorio.com");
    email.val("").focus();
    return false;
  }
}

//Verifica se o input senha foi preenchido com senha válida
function validacaoSenha(senha) {
  let valorSenha = senha.val();
  var letrasMaiusculas = /[A-Z]/;
  var letrasMinusculas = /[a-z]/;
  var numeros = /[0-9]/;
  var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
  let contagemMaiusculas = 0;
  let contagemMinusculas = 0;
  let contagemNumeros = 0;
  let contagemCaracterEspeciais = 0;
  if (valorSenha.length >= 6) {
    for (let i = 0; i < valorSenha.length; i++) {
      if (letrasMaiusculas.test(valorSenha[i]) && contagemMaiusculas === 0) {
        contagemMaiusculas++;
      }
      if (letrasMinusculas.test(valorSenha[i]) && contagemMinusculas === 0) {
        contagemMinusculas++;
      }
      if (numeros.test(valorSenha[i]) && contagemNumeros === 0) {
        contagemNumeros++;
      }
      if (
        caracteresEspeciais.test(valorSenha[i]) &&
        contagemCaracterEspeciais === 0
      ) {
        contagemCaracterEspeciais++;
      }
    }
    if (
      contagemMaiusculas === 1 &&
      contagemMinusculas === 1 &&
      contagemNumeros === 1 &&
      contagemCaracterEspeciais === 1
    ) {
      $("#confirmacaoSenha").val("").focus();
      return true;
    } else {
      alert(
        "Senha deve conter no mínimo 6 caracteres sendo:\n1 letra maiúscula\n1 letra minúscula\n1 caracter especial\n números",
      );
      senha.val("").focus();
      return false;
    }
  } else {
    alert(
      "Senha deve conter no mínimo 6 caracteres sendo:\n1 letra maiúscula\n1 letra minúscula\n1 caracter especial\n números",
    );
    senha.val("").focus();
    return false;
  }
}

function verificaConfirmacaoSenha(confirmacaoSenha, senha) {
  if (confirmacaoSenha.val() === senha.val()) {
    $("#rg").val("").focus();
    return true;
  } else {
    alert("Senhas estão diferentes, digite novamente!");
    confirmacaoSenha.val("").focus();
    return false;
  }
}

function validacaoRg(rg) {
  let rgInt = parseInt(rg.val());
  if (!isNaN(rgInt)) {
    let validaRg = 7;

    if (rg.val().length >= validaRg) {
      $("#cep").val("").focus();
      return true;
    } else {
      alert("Rg deve ter pelo menos 7 dígitos");
      rg.val("").focus();
      return false;
    }
  } else {
    alert("Digite apenas os números do rg");
    rg.val("").focus();
    return false;
  }
}

function limpa_formulário_cep() {
  // Limpa valores do formulário de cep.
  $("#rua").val("");
  $("#bairro").val("");
  $("#cidade").val("");
  $("#estado").val("");
  $("#complemento").val("");
  $("#numero").val("");
}

function validacaoCep(cep) {
  //Nova variável "cep" somente com dígitos.
  let valorCep = cep.val().replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (valorCep.length === 8) {
    //Expressão regular para validar o CEP.
    let validaCep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validaCep.test(valorCep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      $("#rua").val("...");
      $("#bairro").val("...");
      $("#cidade").val("...");
      $("#estado").val("...");
      $("#complemento").val("...");
      $("#numero").val("...");
    }
    let url = `https://viacep.com.br/ws/${valorCep}/json/`;
    //Consulta o webservice viacep.com.br/
    $.ajax({
      url: url,
      success: (dados) => {
        //Atualiza os campos com os valores da consulta.
        $("#rua").val(dados.logradouro);
        $("#bairro").val(dados.bairro);
        $("#cidade").val(dados.localidade);
        $("#estado").val(dados.uf);
        $("#complemento").val(dados.complemento);
        $("#numero").val("").focus();
        return true;
      },
      error: () => {
        limpa_formulário_cep();
        alert("cep inválido digite novamente");
        cep.val("").focus();
        return false;
      },
    });
  } else {
    limpa_formulário_cep();
    alert("Digite apenas o números do cep");
    cep.val("").focus();
    return false;
  }
}
