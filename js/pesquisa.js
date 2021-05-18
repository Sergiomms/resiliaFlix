var inputGlobal = ''


$(document).ready(function () {
    verificaAnterior()
    //insereFilmes(objTeste)

    $('.submit').on('click', function (event) {
        event.preventDefault()
        $('.alert').addClass('d-none')
        const input = $('#pesquisa').val()
        inputGlobal = input
        pesquisar(input)
    })
    $('#resultado').click(nextPage)

})

function verificaAnterior() {
    const paramsRecebido = new URLSearchParams(window.location.search)
    input = paramsRecebido.get('pesquisa')
    if (input) {
        $('#pesquisa').val(input)
        inputGlobal = input
        pesquisar(input)
    }
}

function pesquisar(input) {
    $.ajax({
        'url': 'https://www.omdbapi.com/',
        'data': {
            'apikey': 'ae5c9bff',
            's': input,
            'type': 'movie'
        },
        'success': function (result) {
            console.log(result)
            document.querySelector('#resultado').innerHTML = ''
            try {
                insereFilmes(result)
            } catch (e) {
                $('.alert').text(e.message)
                $('.alert').removeClass('d-none')
                console.log(e.message)
            }

        }
    })
}

function insereFilmes(obj) {
    if (obj.Response === "True") {
        criaElemento(obj.Search)
        return
    } else {
        throw new Error('Filme não encontrado')
    }
}

function criaElemento(arr) {
    const divResultado = document.querySelector('#resultado')
    divResultado.innerHTML = ''
    arr.forEach(element => {
        const div = `
            <div class="filme m-2">
                <button class="btn-title" >
                    <div class="div-poster">
                        <img class="capa" src="${element.Poster}" data-id = "${element.imdbID}" alt="Poster indisponível">
                    </div>
                </button>
                <p class="mx-2">${element.Title}</p>
            </div>
        `
        divResultado.innerHTML += div
    });
}

const objTeste = {
    "Search": [
        {
            "Title": "Harry Potter and the Deathly Hallows: Part 2",
            "Year": "2011",
            "imdbID": "tt1201607",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Harry Potter and the Sorcerer's Stone",
            "Year": "2001",
            "imdbID": "tt0241527",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
            "Title": "Harry Potter and the Chamber of Secrets",
            "Year": "2002",
            "imdbID": "tt0295297",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"
        },
        {
            "Title": "Harry Potter and the Prisoner of Azkaban",
            "Year": "2004",
            "imdbID": "tt0304141",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
        },
        {
            "Title": "Harry Potter and the Goblet of Fire",
            "Year": "2005",
            "imdbID": "tt0330373",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Harry Potter and the Order of the Phoenix",
            "Year": "2007",
            "imdbID": "tt0373889",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"
        },
        {
            "Title": "Harry Potter and the Deathly Hallows: Part 1",
            "Year": "2010",
            "imdbID": "tt0926084",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
        },
        {
            "Title": "Harry Potter and the Half-Blood Prince",
            "Year": "2009",
            "imdbID": "tt0417741",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
        },
        {
            "Title": "Harry Potter and the Forbidden Journey",
            "Year": "2010",
            "imdbID": "tt1756545",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg"
        },
        {
            "Title": "Harry Potter and the Escape from Gringotts",
            "Year": "2014",
            "imdbID": "tt3731688",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTJmOTRjMDEtMjg1YS00YzJjLTk5MWYtZmQzMTBiNGQxYzZhXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
        }
    ],
    "totalResults": "79",
    "Response": "True"
}

function nextPage(e) {
    if (e.target.classList.contains('capa')) {
        console.log('page')
        const id = e.target.getAttribute('data-id')
        params = new URLSearchParams()
        params.append('id', id)
        params.append('anterior', 'pesquisa.html')
        params.append('pesquisa', inputGlobal)

        const url = 'info-filme.html?' + params.toString()
        location.href = url
    }

}