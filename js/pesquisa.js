$(document).ready(function(){

    $('.submit').on('click', function(event){
        event.preventDefault()
        $('.alert').addClass('d-none')
        const input = $('#pesquisa').val()
        pesquisar(input)
    })
})

function pesquisar( input ){
    $.ajax({
        'url' : 'https://www.omdbapi.com/',
        'data' :{
            'apikey' : 'ae5c9bff',
            's' : input,
        },
        'success' : function(result){
            try{
                console.log(insereFilmes(result))
            } catch(e){
                $('.alert').text(e.message)
                $('.alert').removeClass('d-none')
                console.log(e.message)
            }

        }
    })
}

function insereFilmes(obj){

    if(obj.Response === "True"){
        criaElemento(obj.Search)
        return
    } else{
        throw new Error('Filme não encontrado')
    }
}

function criaElemento( arr ){
    const divResultado = document.querySelector('#resultado')
    divResultado.innerHTML = ''
    arr.forEach(element => {
        const div = `
            <div class="filme">
                <img class="capa" src="${element.Poster}">
                <p class="mx-3">${element.Title}</p>
            </div>
        `
        divResultado.innerHTML += div
    });
}

