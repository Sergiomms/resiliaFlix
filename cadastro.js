$(document).ready(() => {
  //Serve para limpar o valor do input quando clicado
  function limpaValorDoInput(entrada) {
    entrada.on("click", () => {
      entrada.val("");
    });
  }

  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    if (re.test(email.val())) {
      senha.val("").focus();
      return email.val();
    } else {
      email.val("").focus();
    }
  }

  function limpa_formulário_cep() {
    // Limpa valores do formulário de cep.
    rua.val("");
    bairro.val("");
    cidade.val("");
    estado.val("");
    complemento.val("");
    numero.val("");
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
  let btnEnviar = $("#enviar");
  let formulario = $("form");

  //Limpa o valor do input passado como parâmetro;
  limpaValorDoInput(nome);
  limpaValorDoInput(email);
  limpaValorDoInput(cep);
  limpaValorDoInput(rg);

  email.blur(() => {
    validateEmail(email);
  });

  senha.blur(() => {
    let letrasMaiusculas = /[A-Z]/;
    let letrasMinusculas = /[a-z]/;
    let numeros = /[0-9]/;
    let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    let valorSenha = senha.val();
    if (valorSenha.length >= 6) {
      let contagemMaiusculas = 0;
      let contagemMinusculas = 0;
      let contagemNumeros = 0;
      let contagemCaracteresEspecias = 0;
      for (let i = 0; i < valorSenha.length; i++) {
        if (letrasMaiusculas.test(valorSenha[i]) && contagemMaiusculas === 0) {
          contagemMaiusculas++;
          console.log(contagemMaiusculas);
        } else if (
          letrasMinusculas.test(valorSenha[i]) &&
          contagemMinusculas === 0
        ) {
          contagemMinusculas++;
          console.log(contagemMinusculas);
        } else if (numeros.test(valorSenha[i]) && contagemNumeros === 0) {
          contagemNumeros++;
          console.log(contagemNumeros);
        } else if (
          caracteresEspeciais.test(valorSenha[i]) &&
          contagemCaracteresEspecias === 0
        ) {
          contagemCaracteresEspecias++;
          console.log(contagemCaracteresEspecias);
        }
      }
      if (
        contagemMaiusculas === 1 &&
        contagemMinusculas === 1 &&
        contagemNumeros === 1 &&
        contagemCaracteresEspecias === 1
      ) {
        confirmacaoSenha.val("").focus();
      }
    } else {
      alert(
        "senha deve conter:\n1 letra maiúscula\n1 letra minúscula\n1 caracter especial\nNúmeros",
      );
      senha.val("");
    }
  });

  confirmacaoSenha.blur(() => {
    if (confirmacaoSenha.val() === senha.val()) {
      rg.val("").focus();
    } else {
      confirmacaoSenha.val("").focus();
    }
  });

  //Valida o campo de rg
  rg.blur(() => {
    if (typeof rg !== "string") {
      let validaRg = 7;

      if (rg.val().length >= validaRg) {
        cep.val("").focus();
      } else {
        rg.val("");
      }
    }
  });

  //Quando o campo cep perde o foco.
  cep.blur(() => {
    //Nova variável "cep" somente com dígitos.
    let valorCep = cep.val().replace(/\D/g, "");

    //Verifica se campo cep possui valor informado.
    if (valorCep !== "") {
      //Expressão regular para validar o CEP.
      let validaCep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validaCep.test(valorCep)) {
        //Preenche os campos com "..." enquanto consulta webservice.
        rua.val("...");
        bairro.val("...");
        cidade.val("...");
        estado.val("...");
        complemento.val("...");
        numero.val("...");
        //Consulta o webservice viacep.com.br/
        $.getJSON(
          "https://viacep.com.br/ws/" + valorCep + "/json/?callback=?",
          function (dados) {
            if (!("erro" in dados)) {
              //Atualiza os campos com os valores da consulta.
              rua.val(dados.logradouro);
              bairro.val(dados.bairro);
              cidade.val(dados.localidade);
              estado.val(dados.uf);
              complemento.val(dados.complemento);
              numero.val("").focus();
            } //end if.
            else {
              //CEP pesquisado não foi encontrado.
              limpa_formulário_cep();
              alert("CEP não encontrado.");
            }
          },
        );
      } //end if.
      else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } //end if.
    else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
    }
  });
  btnEnviar.click((event) => {
    event.preventDefault();
    if (formulario) console.log("campos estão válidos");
    else console.log("campos inválidos");
  });
});
