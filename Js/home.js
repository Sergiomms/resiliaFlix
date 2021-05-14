
class Filme {

    constructor(poster){

        this._poster = poster
    }
    getPoster(){
        return this._poster
    }
}

    let arrFilmes = []

    let arrIds = ['tt0241527','tt0120737', 'tt0133093', 'tt1001508', 'tt3065204', 'tt1189073', 
    'tt1023111', 'tt0304141','tt0381707', 'tt1232829']
    for(let i = 0; i<arrIds.length; i++){
        request(arrIds[i])
    }

    function request(id){

        const urlApi = 'http://www.omdbapi.com/'

        $.ajax({

            'url' : urlApi,
            'data': {
                'i': id,
                'apikey': '10dc99d6'
            },
            'success' : function(result){

                const filme = new Filme(result.Poster)

                arrFilmes.push(filme)
                console.log(result.Poster)

            },
            'error': function (erro){

                console.log(`Erro:${erro}`)
            }

        })
    }

// $(document).ready(function carrega (){  

    setTimeout(myFunc, 2000) 

    function myFunc(){

        console.log(arrFilmes[3])
    }        

    setTimeout(insereNoHtml, 1000)

    function insereNoHtml(){

        let catalagoFilmes = $('#catalogoFilmes')
        for(let i = 0; i<arrFilmes.length; i++){

            catalagoFilmes.append(
            `<div class="capaFilme">
            <img src="${arrFilmes[i]._poster}" alt="" srcset="" id="img1">`
            )
        }
        
    }

// })
