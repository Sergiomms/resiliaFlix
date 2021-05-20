
class Filme {

    constructor(poster, id) {

        this._poster = poster
        this._id = id
    }
    getPoster() {
        return this._poster
    }
    getId() {
        return this._id
    }
}

let arrFilmes = []

let arrIds = ['tt0241527', 'tt0120737', 'tt0133093', 'tt1001508', 'tt3065204', 'tt1189073',
    'tt1023111', 'tt0304141', 'tt0381707', 'tt1232829', 'tt4046784', 'tt0449088']
for (let i = 0; i < arrIds.length; i++) {
    request(arrIds[i])
}

function request(id) {

    const urlApi = 'http://www.omdbapi.com/'

    $.ajax({

        'url': urlApi,
        'data': {
            'i': id,
            'apikey': '10dc99d6'
        },
        'success': function (result) {

            const filme = new Filme(result.Poster, id)

            arrFilmes.push(filme)
            // console.log(result.Poster)

        },
        'error': function (erro) {

            console.log(`Erro:${erro}`)
        }

    })
}

// setTimeout(myFunc, 2000)

// function myFunc() {

//     console.log(arrFilmes[3])
// }

setTimeout(insereNoHtml, 1500)

function insereNoHtml() {

    let catalagoFilmes = $('#catalogoFilmes')
    for (let i = 0; i < arrFilmes.length; i++) {

        catalagoFilmes.append(
            `<div class="capaFilme">
            <img src="${arrFilmes[i].getPoster()}" data-id=${arrFilmes[i].getId()} alt="" srcset="" id="img1">
            </div>`
        )
    }

}


function nextPage(e) {
    if (e.target.tagName === 'IMG') {
        const id = e.target.getAttribute('data-id')
        params = new URLSearchParams()
        params.append('id', id)
        params.append('anterior', 'home.html')

        const url = 'info-filme.html?' + params.toString()
        location.href = url
    }
}

$(document).ready(function () {
    $('#catalogoFilmes').click(nextPage)
})

