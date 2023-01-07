//Enter para apertar o botão
document.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        document.getElementById("botao").click()
    }
});

//Esc para limpar a tela
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        document.getElementById("palavra_aleatoria").innerHTML = "&nbsp;";
        document.getElementById("resultado").innerHTML = "&nbsp;";
        document.getElementById("gabarito").innerHTML = "&nbsp;";

    }
});

desafio = ""

gabarito = ""

//Botão pega palavra aleatória
function nova_palavra_classes () {

    //Limpar o resultado e gabarito
    document.getElementById("resultado").innerHTML = "&nbsp;"
    document.getElementById("gabarito").innerHTML = "&nbsp;"

    //Pega nova palavra
    let total = Object.keys(base_palavras_principal)
    let aleatoria = total[Math.floor(Math.random() * total.length)];
    document.getElementById("palavra_aleatoria").innerHTML = aleatoria

    desafio = aleatoria

    //Obter resposta
    let valores = base_palavras_principal[aleatoria];
    let valores_uteis = tratar_info(valores)
    let imprimir = replace_valores(valores_uteis);

    gabarito = imprimir

}

//Tratar a informação que veio da base
function tratar_info (info) {

    let primeira_parte = info.split(";")[0]

    let lista_elementos = primeira_parte.split(" ")

    return lista_elementos

}


//Leitura dos dados de valores
function replace_valores (valor) {

    if (typeof valor === 'object') {
        
        let dados_palavra = {
            'Classe': [],
            'Gênero': [],
            'Número': []
        };

        valor.forEach(element => {

            if (/\badj\./.test(element)) {
                dados_palavra['Classe'].push('adjetivo')

            } else if (/\bs\./.test(element)) {
                dados_palavra['Classe'].push('substantivo')

            } else if (/\bv\./.test(element)) {
                dados_palavra['Classe'].push('verbo')
            
            } else if (/\badv\./.test(element)) {
                dados_palavra['Classe'].push('advérbio')
    
            } else if (/\bnum\./.test(element)) {
                dados_palavra['Classe'].push('numeral')
    
            } else if (/\bpron\./.test(element)) {
                dados_palavra['Classe'].push('pronome')

            } else if (/\binterj\./.test(element)) {
                dados_palavra['Classe'].push('interjeição')
    
            } else if (/\bprep\./.test(element)) {
                dados_palavra['Classe'].push('preposição')
    
            } else if (/\bconj\./.test(element)) {
                dados_palavra['Classe'].push('conjunção')
    
            } else if (/\bart\./.test(element)) {
                dados_palavra['Classe'].push('artigo')
            }
            
            if (/2g\./.test(element)) {
                dados_palavra['Gênero'].push('Dois gêneros')
    
            } else if (/m\./.test(element)) {
                dados_palavra['Gênero'].push('Masculino')
    
            } else if (/f\./.test(element)) {
                dados_palavra['Gênero'].push('Feminino')
    
            }
            
            if (/2n\./.test(element)) {
                dados_palavra['Número'].push('Singular e plural')
            }
        })


        const mapValores = {
            'adj\.': 'Adjetivo. ',
            '2g\.': 'Dois gêneros. ',
            's\.': 'Substantivo. ',
            'f\.': 'Feminino. ',
            'm\.': 'Masculino. ',
            ';': ' -',
            'pl\.': 'Plural. ',
            'adv\.': 'Advérbio.',
            'cf\.': 'compare com',
            'v\.': 'verbo',
            'fr\.': 'francês',
            'fl\.': 'flexão',
            '2n\.': 'dois números',
            'num\.': 'numeral'
            
        };

        //let valor_novo = valor.replace(/(s\.|f\.|m\.|;|pl\.|adj\.|2g\.|adv\.|cf\.|v\.|fr\.|fl\.|2n\.|num\.)/gi, matched => mapValores[matched]);
        
     

        return dados_palavra

    } else {

    }

}


//Botões de resposta

document.getElementById('subs').onclick = function () {
    resposta = 'substantivo';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};

document.getElementById('verb').onclick = function () {
    resposta = 'verbo';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};

document.getElementById('adj').onclick = function () {
    resposta = 'adjetivo';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};

document.getElementById('adv').onclick = function () {
    resposta = 'advérbio';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};

document.getElementById('pron').onclick = function () {
    resposta = 'pronome';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};

document.getElementById('prep').onclick = function () {
    resposta = 'preposição';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};

document.getElementById('num').onclick = function () {
    resposta = 'numeral';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};

document.getElementById('conj').onclick = function () {
    resposta = 'conjunção';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};

document.getElementById('art').onclick = function () {
    resposta = 'artigo';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};

document.getElementById('int').onclick = function () {
    resposta = 'interjeição';
    
    if (gabarito.Classe.includes(resposta)) {
        document.getElementById("resultado").innerHTML = "Correto!"
        
        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    } else {
        document.getElementById("resultado").innerHTML = "Incorreto!"

        if (gabarito.Classe.length === 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> é um '+gabarito.Classe+'.'
        } else if (gabarito.Classe.length > 1) {
            document.getElementById("gabarito").innerHTML = '<mark>'+desafio+'</mark> pode ser '+gabarito.Classe.join(" ou ")+'.'
        }

    }

};