
$(document).ready(function () {

    getFilme()
    $('#voltar').click(linkVoltar)
})

function getFilmeId() {
    const params = new URLSearchParams(window.location.search)
    const anterior = params.get('anterior')
    console.log(params.get('id'))


}

function getFilme() {
    const params = new URLSearchParams(window.location.search)
    const filmeId = params.get('id')

    $.ajax({
        'url': 'https://www.omdbapi.com/',
        'data': {
            'apikey': 'ae5c9bff',
            'i': filmeId,
        },
        'success': function (result) {
            console.log(result)
            try {
                insereFilmes(result)
            } catch (e) {
                console.log(e.message)
            }

        }
    })
}

function insereFilmes(obj) {
    if (obj.Response === "True") {
        criaElemento(obj)
        return 'success'
    } else {
        throw new Error('Algo de errado ocorreu')
    }
}

function criaElemento(obj) {
    const divPoster = document.querySelector('#poster')
    const divinfoFilme = document.querySelector('#infoFilme')
    const titulo = document.querySelector('#titulo')

    titulo.innerText = obj.Title
    divPoster.innerHTML = `<img src="${obj.Poster}" alt="">`
    divinfoFilme.innerHTML = `
    <p><strong>Sinopse: </strong>${obj.Plot}</p>
    <p><strong>Diretor: </strong>${obj.Director}</p>
    <p><strong>Duração: </strong>${obj.Runtime}</p>
    <p><strong>Atores: </strong>${obj.Actors}</p>
    `
}

function linkVoltar() {
    const paramsRecebido = new URLSearchParams(window.location.search)
    paramsEnviar = new URLSearchParams()

    if (paramsRecebido.get('pesquisa')) {
        paramsEnviar.append('pesquisa', paramsRecebido.get('pesquisa'))
    }

    const url = paramsRecebido.get('anterior') + "?" + paramsEnviar.toString()
    location.href = url

}