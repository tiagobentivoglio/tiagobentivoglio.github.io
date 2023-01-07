var lista_palavras_total = []

var lista_silabas_total = []

var top_150 = []

let opcoes_silabas = document.getElementsByClassName("mover_square")

let palavras_corretas = []

let acertos = 0;
let erros = 0;

window.onload = function () {

    lista_palavras_total = Object.keys(base_palavras_principal)

    lista_palavras_total.forEach(element => {

        
        let lista_silabas = separarSilabas(element);
        

        if (lista_silabas.length > 0){


            lista_silabas.forEach(i => {

                if (/[a-z*]/i.test(i)) {
                    lista_silabas_total.push(i);
                }
                
            });
        }

    })

    lista_silabas_total = lista_silabas_total.byCount()

    top_150 = lista_silabas_total.slice(0, 50)

    Array.from(opcoes_silabas).forEach(element => {

        let silaba_nova = top_150[Math.floor(Math.random() * top_150.length)];

        element.innerHTML = silaba_nova;

        top_150.splice(top_150.indexOf(silaba_nova), 1)
    })

    let lista_cards = Array.from(document.getElementsByClassName("mover_square"))

    let lista_silabas_possiveis = []

    lista_cards.forEach(element => {
        lista_silabas_possiveis.push(element.innerHTML)
    })

    let lista_palavras_possiveis = []

    let lista_combinacoes = getCombinations(lista_silabas_possiveis)

    lista_combinacoes.forEach(element => {

        let juncao_silabas = element.join("")

        if (base_palavras_principal[juncao_silabas]) {
            lista_palavras_possiveis.push(juncao_silabas)
        }
    }) 

    document.getElementById("possibilidades").innerHTML = 'Palavras possíveis: <mark>'+lista_palavras_possiveis.length+'</mark>'

}

function reiniciar() {

    window.location.reload()

}

///Função para ordenar por frequencia
Array.prototype.byCount= function(){
    var itm, a= [], L= this.length, o= {};
    for(var i= 0; i<L; i++){
        itm= this[i];
        if(!itm) continue;
        if(o[itm]== undefined) o[itm]= 1;
        else ++o[itm];
    }
    for(var p in o) a[a.length]= p;
    return a.sort(function(a, b){
        return o[b]-o[a];
    });
}


//Separação de sílabas de acordo com o padrão RegEx
function separarSilabas(palavra) {
    
    //Padrão Regex
    const padrao_silabas = new RegExp('(?:ch|nh|lh|gu|gü|qu|gn|ps|^cu(?=i(?!m))|^mu(?=i)|[mnzskjhx]|[fpbvtdcçrg][lr]?|[lr])?(?:[ieaoíéêáâãóõôu][iu](?![iuz]$)[iu]?|[u(i)]|[aáãâ][eo]|[õó][e]|[ieaouíéêáâãóõôúü])(?:(?:(?:(?:n(?!h)|d(?![rl])|m|c(?![rlh])|t(?![lr])|z|x|p(?![slr])|b(?![rl])|g[?!rl])s?(?![ieaouíéêáâãóõôúü]))|(?:(?:i$)(?![ieaouíéêáãâóõôúüs]))|(?:(?:s)(?![ieaouíéêáãâóõôúü]))|(?:(?:l)(?![hieaouíéêáãâóõôúü]))|(?:(?:g)(?![hrlnieaouíéêáãâóõôúü]))|(?:(?:r)(?![ieaouíéêáâãóõôúü]))|(?:(?:f)(?![rlieaouíéêáâãóõôúü]))))?', 'g');

    var silabas = palavra.toLowerCase().match(padrao_silabas);
    
    return silabas
    
};

//////////////
// Funções de arrastar e soltar as sílabas

function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);

    event
        .currentTarget;
            
};


function onDragOver(event) {
    
    event.preventDefault();
}

function onDrop(event) {

    
    const ide = event
        .dataTransfer
        .getData('text');

    if (document.getElementById(ide).parentNode.id === 'origem') {

        let novo_elem = document.getElementById(ide).cloneNode(true)
        novo_elem.id = ide.id+'clone'
        const draggableElement = novo_elem;
        const dropzone = event.currentTarget;

            

            dropzone.appendChild(draggableElement);
            event
                .dataTransfer
                .clearData();
            
        if (dropzone.getElementsByClassName("mover_square_fake").length > 0) {

            console.log("tem um fake")
    
            Array.from(dropzone.getElementsByClassName("mover_square_fake")).forEach(element => {
                dropzone.removeChild(element)
            })
    
        }

    } else {

        let novo_elem = document.getElementById(ide)
        const draggableElement = novo_elem;
        const dropzone = event.currentTarget;
        dropzone.appendChild(draggableElement);
        event
            .dataTransfer
            .clearData();
    }
        
}

function onClick(el) {  

    document.getElementById("destino").removeChild(el)
    if (document.getElementById("destino").children.length === 0) {
        let div_fake = document.createElement('div')
        div_fake.className = "mover_square_fake"
        div_fake.innerHTML = '&nbsp;'
        div_fake.style = 'border: 1px solid rgb(195, 204, 218)'
        document.getElementById("destino").appendChild(div_fake)
    }

}

/////////////
//Combinar todos os elementos em uma array
function getCombinations(lista) {

    var combi = [];
    var temp = [];
    var slent = Math.pow(2, lista.length);

    for (var i = 0; i < slent; i++)
    {
        temp = [];
        for (var j = 0; j < lista.length; j++)
        {
            if ((i & Math.pow(2, j)))
            {
                temp.push(lista[j]);
            }
        }
        if (temp.length > 0)
        {
            combi.push(temp);
        }

    }

    combi.sort((a, b) => a.length - b.length);
    
    return combi;

}




function checar() {

    //Ler a palavra parcial
    let palavra_parcial = []
    let silabas_destino = document.getElementById("destino").children

    Array.from(silabas_destino).forEach(element => {
        palavra_parcial.push(element.innerHTML)
    })

    let palavra_resultante = palavra_parcial.join("")

    console.log("palavra resultante: "+palavra_resultante)

    //Checar se existe
    if (lista_palavras_total.includes(palavra_resultante) && palavras_corretas.includes(palavra_resultante) === false) {

        palavras_corretas.push(palavra_resultante)

        let dados = base_palavras_principal[palavra_resultante]

        acertos += 1;
        
        let dados_palavra = {
            'Classe': [],
            'Gênero': [],
            'Número': []
        }


        if (typeof dados === 'string') {

            
            if (/\badj\./.test(dados)) {
                dados_palavra['Classe'].push('adjetivo')

            } else if (/\bs\./.test(dados)) {
                dados_palavra['Classe'].push('substantivo')

            } else if (/\bv\./.test(dados)) {
                dados_palavra['Classe'].push('verbo')
                
            } else if (/\badv\./.test(dados)) {
                dados_palavra['Classe'].push('advérbio')
        
            } else if (/\bnum\./.test(dados)) {
                dados_palavra['Classe'].push('numeral')
        
            } else if (/\bpron\./.test(dados)) {
                dados_palavra['Classe'].push('pronome')

            } else if (/\binterj\./.test(dados)) {
                dados_palavra['Classe'].push('interjeição')
        
            } else if (/\bprep\./.test(dados)) {
                dados_palavra['Classe'].push('preposição')
        
            } else if (/\bconj\./.test(dados)) {
                dados_palavra['Classe'].push('conjunção')
        
            } else if (/\bart\./.test(dados)) {
                dados_palavra['Classe'].push('artigo')
            }
                
            if (/2g\./.test(dados)) {
                dados_palavra['Gênero'].push('Dois gêneros')
        
            } else if (/m\./.test(dados)) {
                dados_palavra['Gênero'].push('Masculino')
        
            } else if (/f\./.test(dados)) {
                dados_palavra['Gênero'].push('Feminino')
        
            }
                
            if (/2n\./.test(dados)) {
                dados_palavra['Número'].push('Singular e plural')
            }

            
            //Remover possíveis dados duplicados
            dados_palavra['Classe'] = Array.from(new Set(dados_palavra['Classe']));

            

            

        } else {

            console.log('não é uma string')

        }

        document.getElementById("acertos").innerHTML = 'Palavras encontradas: <mark>'+acertos+'</mark>'

        if (dados_palavra['Classe'].length === 1) {

            if (dados_palavra['Classe'][0] === 'interjeição' | dados_palavra['Classe'][0] === 'conjunção') {

                document.getElementById("status").innerHTML = 'Correto! <mark>'+palavra_resultante+'</mark> é uma '+dados_palavra['Classe']

            } else {

                document.getElementById("status").innerHTML = 'Correto! <mark>'+palavra_resultante+'</mark> é um '+dados_palavra['Classe']

            }

            
        } else if (dados_palavra['Classe'].length > 1) {

            console.log("mais de uma possibilidade")

            document.getElementById("status").innerHTML = 'Correto! <mark>'+palavra_resultante+'</mark> pode ser '+dados_palavra['Classe'].join(" ou ")

        }



    } else if (palavras_corretas.includes(palavra_resultante)) {

        document.getElementById("status").innerHTML = 'A palavra <mark>'+palavra_resultante+'</mark> já foi computada.'

    } else if (palavra_resultante === "&nbsp;") {

        document.getElementById("status").innerHTML = "Nenhuma palavra foi formada ainda."

    } else {
        erros += 1;
        //document.getElementById("erros").innerHTML = "Erros: "+erros
        document.getElementById("status").innerHTML = 'Não conhecemos a palavra <mark>'+palavra_resultante+'</mark>.'

    }

};



function limpar () {

    let silabas_destino = document.getElementById("destino")
    while (silabas_destino.lastElementChild) {
        silabas_destino.removeChild(silabas_destino.lastElementChild);
    }
    let div_fake = document.createElement('div')
    div_fake.className = "mover_square_fake"
    div_fake.innerHTML = '&nbsp;'
    div_fake.style = 'border: 1px solid rgb(195, 204, 218)'
    document.getElementById("destino").appendChild(div_fake)

    document.getElementById("status").innerHTML = '&nbsp;'

}

//Esc para limpar a tela
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        acertos = 0;
        erros = 0;
        document.getElementById("acertos").innerHTML = 'Palavras encontradas: <mark>'+acertos+'</mark>'
        //document.getElementById("erros").innerHTML = "Erros: "+erros
    
    }
});