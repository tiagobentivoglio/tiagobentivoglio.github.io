//////

var total_substantivos = {}
var total_adjetivos = {}

const lista_aes = ['alemão', 'bastião', 'cão', 'capelão', 'capitão', 'catalão', 'charlatão', 'escrivão', 'guardião', 'maçapão', 'pão', 'sacristão', 'tabelião']

const lista_s = ['cidadão', 'cortesão', 'cristão', 'desvão', 'irmão', 'pagão', 'benção', 'órgão', 'sótão', 'órfão']

const mais_de_um_plural = {'alão': ['alãos', 'alões', 'alães'], 'alazão': ['alazães', 'alazões'], 'aldeão': ['aldeãos', 'aldeões', 'aldeães'], 'anão': ['anãos', 'anões'], 'ancião': ['anciãos', 'anciões', 'anciães'], 'artesão': ['artesães', 'artesãos'], 'castelão': ['castelãos', 'castelões'], 'cirurgião': ['cirurgiões', 'cirurgiães'], 'corrimão': ['corrimãos', 'corrimões'], 'deão': ['deães', 'deões'], 'ermitão': ['ermitães', 'ermitãos', 'ermitões'], 'faisão': ['faisães', 'faisões'], 'fuão': ['fuãos', 'fuões'], 'guardião': ['guardiães', 'guardiões'], 'hortelão': ['hortelãos', 'hortelões'], 'refrão': ['refrães', 'refrões'], 'rufião': ['rufiães', 'rufiões'], 'sultão': ['sultões', 'sultãos', 'sultães'], 'truão': ['truães', 'truões'], 'verão': ['verões', 'verãos'], 'vilão': ['vilãos', 'vilões'], 'vulcão': ['vulcões', 'vulcãos'], 'zangão': ['zangões', 'zangãos']};

const lista_es = ['mal', 'cônsul', 'vice-cônsul', 'procônsul']

var so_plural = []

window.onload = function() {

    Object.entries(base_palavras_principal).forEach(element => {

        if (/\bs\./.test(element)) {
            total_substantivos[element[0]] = element[1]
        }

        if (/\badj\./.test(element)) {
            total_adjetivos[element[0]] = element[1]
        }
    })

    Object.keys(total_substantivos).forEach(element => {
        if (/\bs\.m\.pl\./.test(total_substantivos[element]) | /\bs\.f\.pl\./.test(total_substantivos[element]) | /\bs\..\.2n\./.test(total_substantivos[element]) | /s\.2g\.2n\./.test(total_substantivos[element])) {
            so_plural.push(element)
        }
    })

}

//Esc para limpar a tela
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        document.getElementById("entrada").value = "";
        document.getElementById("entrada").focus();
        document.getElementById("saida_plural").innerHTML = "&nbsp;";
    
    }
    if(event.key === "Enter"){
        document.getElementById("botao").click()
    }
});

function imprimir () {

    let entrada = document.getElementById("entrada").value

    let final = ''

    if (entrada.slice(-5) === 'zinho') {

        let plural_semi = pluralizar(entrada.slice(0, -5))

        final = plural_semi.slice(0, -1)+'zinhos'

    } else if (entrada.slice(-4) === 'zito') {

        let plural_semi = pluralizar(entrada.slice(0, -4))

        final = plural_semi.slice(0, -1)+'zitos'

    } else {

        final = pluralizar(entrada)
    }

    

    document.getElementById("saida_plural").innerHTML = final
}

function pluralizar(palavra) {

    

    //checar se é substantivo ou adjetivo 
    if (Object.keys(total_substantivos).includes(palavra) === false && Object.keys(total_adjetivos).includes(palavra) === false) {
        
        return 'Não conheço o plural de <mark>'+palavra+'</mark>.'

    //Checar se é palavra que só existe no plural
    } else if (so_plural.includes(palavra)) {

        return palavra
        
    } else if (Object.keys(mais_de_um_plural).includes(palavra)) {

        let resultado = mais_de_um_plural[palavra].join(' ou ')

        return resultado

    } else {

        //Terminados em r, z, n
        if (palavra.at(-1) === 'r' | palavra.at(-1) === 'z' | palavra.at(-1) === 'n' | lista_es.includes(palavra)) {

            return palavra+'es'

        } else if (palavra.at(-1) === 's') {

            if (classificarTonica(palavra)['tipo'] === 'oxítona' | classificarTonica(palavra)['tipo'] === 'monossílaba tônica') {
                return palavra+'es'

            } else if (classificarTonica(palavra)['tipo'] === 'paroxítona') {
                return palavra

            }

        } else if (palavra.slice(-2) === 'al' | palavra.slice(-2) === 'ul') {

            return palavra.slice(0, -1)+'is'

        } else if (palavra.slice(-2) === 'el') {

            if (classificarTonica(palavra)['tipo'] === 'oxítona') {

                return palavra.slice(0, -2)+'éis'

            } else if (classificarTonica(palavra)['tipo'] === 'paroxítona') {

                return palavra.slice(0, -1)+'is'

            } else {

                return palavra.slice(0, -1)+'is'

            }

        } else if (palavra.slice(-2) === 'ol') {

            if (classificarTonica(palavra)['tipo'] === 'oxítona') {

                return palavra.slice(0, -2)+'óis'

            } else if (classificarTonica(palavra)['tipo'] === 'paroxítona') {

                return palavra.slice(0, -1)+'is'

            }  else  {
                return palavra.slice(0, -1)+'is'
            }

        } else if (palavra.slice(-2) === 'il') {

            if (classificarTonica(palavra)['tipo'] === 'oxítona') {

                return palavra.slice(0, -1)+'s'

            } else if (classificarTonica(palavra)['tipo'] === 'paroxítona') {

                return palavra.slice(0, -2)+'eis'

            }


        } else if (palavra.slice(-2) === 'ão') {

            if (lista_aes.includes(palavra)) {

                return palavra.slice(0, -2)+'ães'

            } else if (classificarTonica(palavra)['tipo'] === 'paroxítona' | classificarTonica(palavra)['tipo'] === 'monossílaba tônica') {

                return palavra+'s'

            } else if (lista_s.includes(palavra)) {

                return palavra+'s'

            } else {

                return palavra.slice(0, -2)+'ões'

            };

        } else if (palavra.at(-1) === 'm') {
            
            return palavra.slice(0, -1)+'ns'

        } else {

            return palavra+'s'

        }

    }

    
}

////

//Lógica de classificação das tônicas e impressão na tela
function classificarTonica(qual) {

    //Listas

    //Padrão Regex
    const padrao_silabas = new RegExp('(?:ch|nh|lh|gu|gü|qu|gn|ps|^cu(?=i(?!m))|^mu(?=i)|[mnzskjhx]|[fpbvtdcçrg][lr]?|[lr])?(?:[ieaoíéêáâãóõôu][iu](?![iuz]$)[iu]?|[u(i)]|[aáãâ][eo]|[õó][e]|[ieaouíéêáâãóõôúü])(?:(?:(?:(?:n(?!h)|d(?![rl])|m|c(?![rlh])|t(?![lr])|z|x|p(?![slr])|b(?![rl])|g[?!rl])s?(?![ieaouíéêáâãóõôúü]))|(?:(?:i$)(?![ieaouíéêáãâóõôúüs]))|(?:(?:s)(?![ieaouíéêáãâóõôúü]))|(?:(?:l)(?![hieaouíéêáãâóõôúü]))|(?:(?:g)(?![hrlnieaouíéêáãâóõôúü]))|(?:(?:r)(?![ieaouíéêáâãóõôúü]))|(?:(?:f)(?![rlieaouíéêáâãóõôúü]))))?', 'g');

    const acentuadas = ['ã','á', 'â', 'é', 'ê', 'ó', 'ô', 'õ', 'í', 'ú'];

    const finais_along = ['l', 'r', 'x', 'z', 'm',  'i', 'u'];

    const finais_along_prop = ['l', 'r', 'x', 'z',  'i', 'u'];

    const vogais = ['a', 'o', 'e'];


    //Excessões
    const mono_atonas = ['o', 'a', 'os', 'as', 'um', 'uns', 'me', 'te', 'se', 'lhe', 'nos', 'vos', 'lhes', 'que', 'com', 'de', 'em ', 'por', 'sem', 'sob', 'à', 'ao', 'da', 'do', 'na', 'no', 'num', 'nuns', 'e', 'mas', 'nem', 'ou', 'dom', 'frei', 'seus'];


    var texto = qual;
    var minuscula = texto.toLowerCase();
    var silabas = minuscula.match(padrao_silabas);

    // a lógica é construída a partir do tamanho da palavra;
    // se a lista está vazia, nenhuma palavra foi digitada;


    if (silabas === null) {

        return {'tipo': 'nada'}

    } else if (silabas.length === 0) {
        return {'tipo': 'zero'}

    // se tem uma sílaba;

    } else if (silabas.length === 1) {

        // usei duas regras para gerar o mesmo resultado só para manter a diferença entre monossílabas átonas e tônicas;

        if (mono_atonas.indexOf(silabas[0]) >= 0) {
            let resultado = `<mark>${silabas[0]}</mark>`;

            return {'tipo': 'monossílaba átona', 'resultado': resultado}

        } else {
            let resultado = `<mark>${silabas[0]}</mark>`;
            
            return {'tipo': 'monossílaba tônica', 'resultado': resultado}
        }

    // se tem duas sílabas;

    } else if (silabas.length === 2) {
        var ultima = silabas[1].toString();
        var penultima = silabas[0].toString();

        if (ultima.includes('ã') | ultima.includes('õ')) {

            for (i=0; i < penultima.length; i++) {

                if (acentuadas.indexOf(penultima.charAt(i)) >= 0) {
                    let resultado = `.<mark>${silabas[0]}</mark>.${silabas[1]}.`;
                    return {'tipo': 'paroxítona', 'resultado': resultado}

                } 

            };

            let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;
            return {'tipo': 'oxítona', 'resultado': resultado}

        } else {

            // se a última sílaba é acentuada, é oxítona;

            for (i=0; i < ultima.length; i++) {
                if (acentuadas.indexOf(ultima.charAt(i)) >= 0) {
                    let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;
                    return {'tipo': 'oxítona', 'resultado': resultado}
                }
            };

            // se a penúltima sílaba é acentuada, é paroxítona;

            for (i=0; i < penultima.length; i++) {
                if (acentuadas.indexOf(penultima.charAt(i)) >= 0) {
                    let resultado = `.<mark>${silabas[0]}</mark>.${silabas[1]}.`;
                    return {'tipo': 'paroxítona', 'resultado': resultado}
                }
            };

            // se palavra de duas sílabas termina com l, r, x, i ou u, é oxítona;

            if (finais_along.indexOf(ultima.slice(- 1)) >=0) {
                let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;
                return {'tipo': 'oxítona', 'resultado': resultado}

            // se termina com s e não é precedido por o, a, e;

            } else if (ultima.slice(-1) == "s" && vogais.indexOf(ultima.slice(-2, -1)) == -1) {
                
                    let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;
                    return {'tipo': 'oxítona', 'resultado': resultado}

            // todos os outros casos são paroxítonas não acentuadas;

            } else {
                let resultado = `.<mark>${penultima}</mark>.${ultima}.`;
                return {'tipo': 'paroxítona', 'resultado': resultado}
            }
        }

    // se tem três ou mais sílabas;

    } else if (silabas.length >= 3) {

        var antepenultima = silabas.slice(-3, -2).toString();

        var penultima = silabas.slice(-2, -1).toString();

        var ultima = silabas.slice(-1).toString();

        if (ultima.includes('ã') | ultima.includes('õ')) {

            for (i=0; i < penultima.length; i++) {

                if (acentuadas.indexOf(penultima.charAt(i)) >= 0) {
                    let resultado = `.<mark>${silabas[0]}</mark>.${silabas[1]}.`;
                    return {'tipo': 'paroxítona', 'resultado': resultado}

                } 

            };

            let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;
            return {'tipo': 'oxítona', 'resultado': resultado}

        } else if (antepenultima.includes('ã')) {

            let restante = silabas.slice(0, -2);
            let resultado = `.${restante.join('.')}.<mark>${penultima}</mark>.${ultima}.`;
            return {'tipo': 'paroxítona', 'resultado': resultado}

        } else {

        
            // se a última sílaba é acentuada, é oxítona;

            for (i=0; i < ultima.length; i++) {
                if (acentuadas.indexOf(ultima.charAt(i)) >= 0) {
                    let restante = silabas.slice(0, -1);
                    let resultado = `.${restante.join('.')}.<mark>${ultima}</mark>.`;
                    return {'tipo': 'oxítona', 'resultado': resultado}
                }
            };

            // se a penúltima sílaba é acentuada, é paroxítona;

            for (i=0; i < penultima.length; i++) {
                if (acentuadas.indexOf(penultima.charAt(i)) >= 0) {
                    let restante = silabas.slice(0, -2);
                    let resultado = `.${restante.join('.')}.<mark>${penultima}</mark>.${ultima}.`;
                    return {'tipo': 'paroxítona', 'resultado': resultado}
                }
            };

            // se a antepenúltima é acentuada, é proparoxítona;
            
            for (i=0; i < antepenultima.length; i++) {
                if (acentuadas.indexOf(antepenultima.charAt(i)) >= 0) {
                    if (silabas.length === 3) {
                        let restante = silabas.slice(0, -3);
                        let resultado = `.${restante.join('.')}<mark>${antepenultima}</mark>.${penultima}.${ultima}.`;
                        
                        return {'tipo': 'proparoxítona', 'resultado': resultado}
                    } else {
                        let restante = silabas.slice(0, -3);
                        let resultado = `.${restante.join('.').concat('.')}<mark>${antepenultima}</mark>.${penultima}.${ultima}.`;
                        return {'tipo': 'proparoxítona', 'resultado': resultado}
                    }
                    
                }
            };

            // se palavra de três sílabas termina com l, r, x, i ou u, é oxítona;

            if (finais_along_prop.indexOf(ultima.slice(- 1)) >= 0) {
                let restante = silabas.slice(0, -1);
                let resultado = `.${restante.join('.')}.<mark>${ultima}</mark>.`;
                return {'tipo': 'oxítona', 'resultado': resultado}

            // se termina com s e não é precedido por o, a, e, é oxítona;

            } else if (ultima.slice(ultima.charAt(-1)) == "s" && vogais.indexOf(ultima.slice(ultima.charAt(-2), ultima.charAt(-1))) == -1) {
                let restante = silabas.slice(0, -1);
                let resultado = `.${restante.join('.')}.<mark>${ultima}</mark>.`;
                return {'tipo': 'oxítona', 'resultado': resultado}

            // todos os outros casos são paroxítonas não acentuadas;

            } else {
                if (silabas.length === 3) {
                    let resultado = `.${antepenultima}.<mark>${penultima}</mark>.${ultima}.`;
                    return {'tipo': 'paroxítona', 'resultado': resultado}

                } else if (silabas.length > 3) {
                    let restante = silabas.slice(0, -3);
                    let resultado = `.${restante.join('.')}.${antepenultima}.<mark>${penultima}</mark>.${ultima}.`;
                    return {'tipo': 'paroxítona', 'resultado': resultado}
                }
            }
        }
    };

};


///// Função interna
let lista_teste = []

function testar () {

    Object.keys(total_substantivos).forEach(element => {

        if (element.includes('õ') && classificarTonica(element)['tipo'] === 'paroxítona') 
        
        lista_teste.push(pluralizar(element))


    })

    console.log(lista_teste)
}

