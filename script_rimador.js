
var total_palavras = []


//Alimenta o tamanho total da base
window.onload = function() {

    let total_palavras_prov = Object.keys(base_palavras_principal)


    total_palavras_prov.forEach(element => {
        
        if (/\(.*\)/.test(element)) {

            total_palavras.push(element.split(" ")[0])

            
        } else {

            total_palavras.push(element)
          
        }

    })

}


//Tecla ESC
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        document.getElementById("entrada").value = "";
        document.getElementById("opcoes_quantidades").innerHTML = '';
        document.getElementById("letras").checked = false;
        document.getElementById("silabas").checked = false;
        document.getElementById("resultados_rimador").innerHTML = ''
        document.getElementById("numero_resultados").innerHTML = '&nbsp;'

    }

});

function opcoes() {

    let opcao_letra = document.getElementById("letras")
    let opcao_silaba = document.getElementById("silabas")

    if (opcao_letra.checked === true) {

        document.getElementById("opcoes_quantidades").innerHTML = '<p><mark>quantas letras?</mark></p><input type="radio" id="letras_2" value="2" name="opcoes_letras"></input><label for="letras_2" style="font-size: x-large">2</label>&nbsp;&nbsp;<input type="radio" id="letras_3" value="3" name="opcoes_letras"></input><label for="letras_3" style="font-size: x-large">3</label>&nbsp;&nbsp;<input type="radio" value="4" id="letras_4" name="opcoes_letras"></input><label for="letras_4" style="font-size: x-large">4</label>&nbsp;&nbsp;<input type="radio" value="5" id="letras_5" name="opcoes_letras"></input><label for="letras_5" style="font-size: x-large">5</label>'

    } else if (opcao_silaba.checked === true) {

        document.getElementById("opcoes_quantidades").innerHTML = '<p><mark>quantas silabas?</mark></p><input type="radio" id="silabas_1" name="opcoes_silabas" value="1"></input><label for="silabas_1" style="font-size: x-large">1</label>&nbsp;&nbsp;<input type="radio" id="silabas_2" name="opcoes_silabas" value="2"></input><label for="silabas_2" style="font-size: x-large">2</label>&nbsp;&nbsp;<input type="radio" id="silabas_3" name="opcoes_silabas" value="3"></input><label for="silabas_3" style="font-size: x-large">3</label>'

    }
}

//////////////
//Separação de sílabas de acordo com o padrão RegEx
function separarSilabas(palavra) {
    
    //Padrão Regex
    const padrao_silabas = new RegExp('(?:ch|nh|lh|gu|gü|qu|gn|ps|^cu(?=i(?!m))|^mu(?=i)|[mnzskjhx]|[fpbvtdcçrg][lr]?|[lr])?(?:[ieaoíéêáâãóõôu][iu](?![iuz]$)[iu]?|[u(i)]|[aáãâ][eo]|[õó][e]|[ieaouíéêáâãóõôúü])(?:(?:(?:(?:n(?!h)|d(?![rl])|m|c(?![rlh])|t(?![lr])|z|x|p(?![slr])|b(?![rl])|g[?!rl])s?(?![ieaouíéêáâãóõôúü]))|(?:(?:i$)(?![ieaouíéêáãâóõôúüs]))|(?:(?:s)(?![ieaouíéêáãâóõôúü]))|(?:(?:l)(?![hieaouíéêáãâóõôúü]))|(?:(?:g)(?![hrlnieaouíéêáãâóõôúü]))|(?:(?:r)(?![ieaouíéêáâãóõôúü]))|(?:(?:f)(?![rlieaouíéêáâãóõôúü]))))?', 'g');


    
    var silabas = palavra.toLowerCase().match(padrao_silabas);
    
    return silabas
    
};

//////////////
///Rimador

function rimar() {

    let entrada = document.getElementById("entrada").value

    let container_resultados = document.getElementById("resultados_rimador")

    container_resultados.innerHTML = ''

    //Opção LETRAS
    if (document.getElementById("letras").checked === true) {

        let opcoes_letras = document.getElementsByName("opcoes_letras")


        for (let f of opcoes_letras) {

            if (f.checked) {
    
                let valor_negativo = parseInt('-'+f.value)
    
                let rima = entrada.slice(valor_negativo)
    
                let lista_rimas = []
    
                total_palavras.forEach(element => {
    
                    if (element.slice(valor_negativo) === rima) {
                        lista_rimas.push(element)
                    }
    
                })
    
                document.getElementById("numero_resultados").innerHTML = 'Rimas encontradas: '+lista_rimas.length.toLocaleString('pt-br')
 
                lista_rimas.forEach(element => {
    
                    let novo_element = document.createElement('div')
                    novo_element.className = 'rima_rimador'
                    novo_element.innerHTML = '<mark>'+element+'</mark>'
                    container_resultados.appendChild(novo_element)
                })
    
            }
        }


    //Opção SÍLABAS
    } else if (document.getElementById("silabas").checked === true) {

        let lista_rimas = []

        let silabas_entrada = separarSilabas(entrada)


        if (document.getElementById("silabas_1").checked === true) {

            console.log('opção 1')

            total_palavras.forEach(element => {

                let silabas_element = separarSilabas(element)

                if (silabas_element.at(-1) === silabas_entrada.at(-1)) {

                    lista_rimas.push(element)
                }

            })

        } else if (document.getElementById("silabas_2").checked === true) {

            console.log("opcao 2")

            total_palavras.forEach(element => {

                let silabas_element = separarSilabas(element)

                if (silabas_element.at(-1) === silabas_entrada.at(-1) && silabas_element.at(-2) === silabas_entrada.at(-2)) {

                    lista_rimas.push(element)
                }

            })

        } else if (document.getElementById("silabas_3").checked === true) {

            console.log('opcão 3')

            total_palavras.forEach(element => {

                let silabas_element = separarSilabas(element)

                if (silabas_element.at(-1) === silabas_entrada.at(-1) && silabas_element.at(-2) === silabas_entrada.at(-2) && silabas_element.at(-3) === silabas_entrada.at(-3)) {

                    lista_rimas.push(element)
                }

            })

        }

        document.getElementById("numero_resultados").innerHTML = 'Rimas encontradas: '+lista_rimas.length.toLocaleString('pt-br')

        lista_rimas.forEach(element => {

            let novo_element = document.createElement('div')
            novo_element.className = 'rima_rimador'
            novo_element.innerHTML = '<mark>'+element+'</mark>'
            container_resultados.appendChild(novo_element)
        })

    }


}


