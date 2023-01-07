var total_palavras = {}

let total_substantivos = []
let total_verbos = []
let total_adjetivos = []
let total_adverbios = []
let total_pronomes = []
let total_preposicoes = []
let total_numeral = []
let total_conjuncao = []
let total_artigo = []
let total_interjeicao = []


//Alimenta o tamanho total da base
window.onload = function() {

    let total_palavras_prov = Object.keys(base_palavras_principal)

    let total_par = 0;

    total_palavras_prov.forEach(element => {
        
        if (/\(.*\)/.test(element)) {

            total_par ++;
            total_palavras[element.split(" ")[0]] = base_palavras_principal[element]

        } else {
            total_palavras[element] = base_palavras_principal[element]
        }

        

    })
    
    console.log(total_par)

    let tamanho = Object.keys(total_palavras).length
    document.getElementById("tamanho").innerHTML = tamanho.toLocaleString('pt-br')

    
    
    Object.entries(total_palavras).forEach(element => {

        //Popular lista substantivos
        if (/\bs\./.test(element)) {

            total_substantivos.push(element)
        }
        //Popular lista verbos
        if (/\bv\./.test(element) && /fl/.test(element) === false) {

            total_verbos.push(element)
        }
        //Popular lista adjetivos
        if (/\badj\./.test(element)) {

            total_adjetivos.push(element)
        }
        //Popular lista advérbios
        if (/\badv\./.test(element)) {

            total_adverbios.push(element)
        }
        //Popular lista pronomes
        if (/\bpron\./.test(element)) {

            total_pronomes.push(element)
        }
        //Popular lista preposições
        if (/\bprep\./.test(element)) {

            total_preposicoes.push(element)
        }
        //Popular lista numerais
        if (/\bnum\./.test(element)) {

            total_numeral.push(element)
        }
        //Popular lista conjunções
        if (/\bconj\./.test(element)) {

            total_conjuncao.push(element)
        }
        //Popular lista artigos
        if (/\bart\./.test(element)) {

            total_artigo.push(element)
        }
        //Popular lista interjeições
        if (/\binterj\./.test(element)) {

            total_interjeicao.push(element)
        }

    })

}




//Enter para apertar o botão
document.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        document.getElementById("botao").click()
    }
});

//Esc para limpar a tela
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        document.getElementById("entrada").value = "";
        
        document.getElementById("classe").innerHTML = "&nbsp";

        document.getElementById("inst_classe_aleatoria").innerHTML = 'Ou escolha uma palavra aleatória pela classe'

    }
});

//Tratar a informação que veio da base
function tratar_info (info) {

    let primeira_parte = info.split(";")[0]

    let lista_elementos = primeira_parte.split(" ")

    return lista_elementos

}

//Busca simples
function consultar_palavra () {
    let entrada = document.getElementById("entrada").value;

    document.getElementById("inst_classe_aleatoria").innerHTML = 'Ou escolha uma palavra aleatória pela classe'

    if (Object.keys(total_palavras).includes(entrada)) {

        let valores = total_palavras[entrada];

        let valores_uteis = tratar_info(valores)

        let imprimir = replace_valores(valores_uteis);

        if (imprimir.Classe.length === 1) {
            document.getElementById("classe").innerHTML = '<mark>'+entrada+'</mark> é um '+imprimir.Classe+'.'
        } else if (imprimir.Classe.length > 1) {
            document.getElementById("classe").innerHTML = '<mark>'+entrada+'</mark> pode ser '+imprimir.Classe.join(" ou ")+'.'
        }

        //if (imprimir.Gênero.length > 0) {
        //    document.getElementById("genero").innerHTML = 'Gênero(s): '+imprimir.Gênero.join(", ")
        //}
        
        //if (imprimir.Número.length > 0) {
        //    document.getElementById("numero").innerHTML = 'Número(s): '+imprimir.Número.join(", ")
        //}

    } else if (entrada === "") {

        document.getElementById("classe").innerHTML = "Digite uma palavra para consultar."

    } else {

        document.getElementById("classe").innerHTML = "Não consta <mark>"+entrada+"</mark> em nossa base de palavras."

    }
    
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
        
        //Remover possíveis dados duplicados
        dados_palavra['Classe'] = Array.from(new Set(dados_palavra['Classe']));

        

        return dados_palavra

    } else {

    }

}


//Botões de classes de palavras

document.getElementById('subs').onclick = function () {

    

    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de substantivos: '+total_substantivos.length.toLocaleString('pt-br')

    let um_substantivo = total_substantivos[Math.floor(Math.random() * total_substantivos.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_substantivo[0]+'</mark> é um substantivo.'

};

document.getElementById('verb').onclick = function () {
    


    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de verbos: '+total_verbos.length.toLocaleString('pt-br')

    let um_verbo = total_verbos[Math.floor(Math.random() * total_verbos.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_verbo[0]+'</mark> é um verbo.'

};

document.getElementById('adj').onclick = function () {

    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de adjetivos: '+total_adjetivos.length.toLocaleString('pt-br')

    let um_adjetivo = total_adjetivos[Math.floor(Math.random() * total_adjetivos.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_adjetivo[0]+'</mark> é um adjetivo.'

};

document.getElementById('adv').onclick = function () {

    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de advérbios: '+total_adverbios.length.toLocaleString('pt-br')

    let um_adverbio = total_adverbios[Math.floor(Math.random() * total_adverbios.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_adverbio[0]+'</mark> é um advérbio.'

};

document.getElementById('pron').onclick = function () {


    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de pronomes: '+total_pronomes.length.toLocaleString('pt-br')

    let um_pronome = total_pronomes[Math.floor(Math.random() * total_pronomes.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_pronome[0]+'</mark> é um pronome.'

};

document.getElementById('prep').onclick = function () {

    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de preposições: '+total_preposicoes.length.toLocaleString('pt-br')

    let um_preposicao = total_preposicoes[Math.floor(Math.random() * total_preposicoes.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_preposicao[0]+'</mark> é uma preposição.'

};

document.getElementById('num').onclick = function () {

    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de numerais: '+total_numeral.length.toLocaleString('pt-br')

    let um_numeral = total_numeral[Math.floor(Math.random() * total_numeral.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_numeral[0]+'</mark> é um numeral.'

};

document.getElementById('conj').onclick = function () {

    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de conjunções: '+total_conjuncao.length.toLocaleString('pt-br')

    let um_conjuncao = total_conjuncao[Math.floor(Math.random() * total_conjuncao.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_conjuncao[0]+'</mark> é uma conjunção.'

};

document.getElementById('art').onclick = function () {

    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de artigos: '+total_artigo.length.toLocaleString('pt-br')

    let um_artigo = total_artigo[Math.floor(Math.random() * total_artigo.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_artigo[0]+'</mark> é um artigo.'

};

document.getElementById('int').onclick = function () {

    document.getElementById("inst_classe_aleatoria").innerHTML = 'Total de interjeições: '+total_interjeicao.length.toLocaleString('pt-br')

    let um_interjeicao = total_interjeicao[Math.floor(Math.random() * total_interjeicao.length)];

    document.getElementById("classe").innerHTML = '<mark>'+um_interjeicao[0]+'!</mark> é uma interjeição.'

};

