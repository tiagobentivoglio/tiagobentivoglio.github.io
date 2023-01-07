// Silabador

//Função interna//

function teste_silabador() {

    const padrao_silabas = new RegExp('(?:ch|nh|lh|gu|gü|qu|gn|ps|^cu(?=i(?!m))|^mu(?=i)|[mnzskjhx]|[fpbvtdcçrg][lr]?|[lr])?(?:[ieaoíéêáâãóõôu][iu](?![iuz]$)[iu]?|[u(i)]|[aáãâ][eo]|[õó][e]|[ieaouíéêáâãóõôúü])(?:(?:(?:(?:n(?!h)|d(?![rl])|m|c(?![rlh])|t(?![lr])|z|x|p(?![slr])|b(?![rl])|g[?!rl])s?(?![ieaouíéêáâãóõôúü]))|(?:(?:i$)(?![ieaouíéêáãâóõôúüs]))|(?:(?:s)(?![ieaouíéêáãâóõôúü]))|(?:(?:l)(?![hieaouíéêáãâóõôúü]))|(?:(?:g)(?![hrlnieaouíéêáãâóõôúü]))|(?:(?:r)(?![ieaouíéêáâãóõôúü]))|(?:(?:f)(?![rlieaouíéêáâãóõôúü]))))?', 'g');

    let lista_final = []
    let maximo = 100;

    for (i=0; i < maximo; i++) {
        let uma_palavra = palavra_aleatoria()
        
        let separacao = uma_palavra.toLowerCase().match(padrao_silabas);

        let final_separacao = separacao.join(".")

        lista_final.push(final_separacao)
    }

    console.log(lista_final)
}


//////Funções//////


//Enter para apertar o botão
function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if(e.key == "Enter") {
        e.preventDefault();
        document.getElementById("botao").click();
    }
};


//Separação de sílabas de acordo com o padrão RegEx
function separarSilabas() {
    
    //Padrão Regex
    const padrao_silabas = new RegExp('(?:ch|nh|lh|gu|gü|qu|gn|ps|^cu(?=i(?!m))|^mu(?=i)|[mnzskjhx]|[fpbvtdcçrg][lr]?|[lr])?(?:[ieaoíéêáâãóõôu][iu](?![iuz]$)[iu]?|[u(i)]|[aáãâ][eo]|[õó][e]|[ieaouíéêáâãóõôúü])(?:(?:(?:(?:n(?!h)|d(?![rl])|m|c(?![rlh])|t(?![lr])|z|x|p(?![slr])|b(?![rl])|g[?!rl])s?(?![ieaouíéêáâãóõôúü]))|(?:(?:i$)(?![ieaouíéêáãâóõôúüs]))|(?:(?:s)(?![ieaouíéêáãâóõôúü]))|(?:(?:l)(?![hieaouíéêáãâóõôúü]))|(?:(?:g)(?![hrlnieaouíéêáãâóõôúü]))|(?:(?:r)(?![ieaouíéêáâãóõôúü]))|(?:(?:f)(?![rlieaouíéêáâãóõôúü]))))?', 'g');


    var texto = document.getElementById("entrada").value;
    var silabas = texto.toLowerCase().match(padrao_silabas);
    var imprimir = `.${silabas.join(".")}.`;
    document.getElementById("saida").innerHTML = imprimir;
    
};
 

//Lógica de classificação das tônicas e impressão na tela
function classificarTonica() {

        //Listas

        //Padrão Regex
    const padrao_silabas = new RegExp('(?:ch|nh|lh|gu|gü|qu|gn|ps|^cu(?=i(?!m))|^mu(?=i)|[mnzskjhx]|[fpbvtdcçrg][lr]?|[lr])?(?:[ieaoíéêáâãóõôu][iu](?![iuz]$)[iu]?|[u(i)]|[aáãâ][eo]|[õó][e]|[ieaouíéêáâãóõôúü])(?:(?:(?:(?:n(?!h)|d(?![rl])|m|c(?![rlh])|t(?![lr])|z|x|p(?![slr])|b(?![rl])|g[?!rl])s?(?![ieaouíéêáâãóõôúü]))|(?:(?:i$)(?![ieaouíéêáãâóõôúüs]))|(?:(?:s)(?![ieaouíéêáãâóõôúü]))|(?:(?:l)(?![hieaouíéêáãâóõôúü]))|(?:(?:g)(?![hrlnieaouíéêáãâóõôúü]))|(?:(?:r)(?![ieaouíéêáâãóõôúü]))|(?:(?:f)(?![rlieaouíéêáâãóõôúü]))))?', 'g');

    const acentuadas = ['ã','á', 'â', 'é', 'ê', 'ó', 'ô', 'õ', 'í', 'ú'];

    const finais_along = ['l', 'r', 'x', 'z', 'm',  'i', 'u'];

    const finais_along_prop = ['l', 'r', 'x', 'z',  'i', 'u'];

    const vogais = ['a', 'o', 'e'];


    //Excessões
    const mono_atonas = ['o', 'a', 'os', 'as', 'um', 'uns', 'me', 'te', 'se', 'lhe', 'nos', 'vos', 'lhes', 'que', 'com', 'de', 'em ', 'por', 'sem', 'sob', 'à', 'ao', 'da', 'do', 'na', 'no', 'num', 'nuns', 'e', 'mas', 'nem', 'ou', 'dom', 'frei', 'seus'];


    var texto = document.getElementById("entrada").value;
    var silabas = texto.toLowerCase().match(padrao_silabas);

    // a lógica é construída a partir do tamanho da palavra;
    // se a lista está vazia, nenhuma palavra foi digitada;

    if (silabas.length == 0) {
        document.getElementById("saida").innerHTML = "Parece que você ainda não digitou nada";
    
    // se tem uma sílaba;

    } else if (silabas.length == 1) {

        // usei duas regras para gerar o mesmo resultado só para manter a diferença entre monossílabas átonas e tônicas;

        if (mono_atonas.indexOf(silabas[0]) >= 0) {
            let resultado = `<mark>${silabas[0]}</mark>`;
            document.getElementById("saida").innerHTML = resultado;
        } else {
            let resultado = `<mark>${silabas[0]}</mark>`;
            document.getElementById("saida").innerHTML = resultado;
        }

    // se tem duas sílabas;

    } else if (silabas.length == 2) {
        var ultima = silabas[1].toString();
        var penultima = silabas[0].toString();


        if (ultima.includes('ã') | ultima.includes('õ')) {

            for (i=0; i < penultima.length; i++) {

                if (acentuadas.indexOf(penultima.charAt(i)) >= 0) {
                    let resultado = `.<mark>${silabas[0]}</mark>.${silabas[1]}.`;
                    return document.getElementById("saida").innerHTML = resultado;

                } 

            };

            let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;
            return document.getElementById("saida").innerHTML = resultado;

        } else {
            // se a última sílaba é acentuada, é oxítona;

            for (i=0; i < ultima.length; i++) {

                if (acentuadas.indexOf(ultima.charAt(i)) >= 0) {

                    let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;

                    return document.getElementById("saida").innerHTML = resultado;
                }
            };

            // se a penúltima sílaba é acentuada, é paroxítona;

            for (i=0; i < penultima.length; i++) {
                if (acentuadas.indexOf(penultima.charAt(i)) >= 0) {
                    let resultado = `.<mark>${silabas[0]}</mark>.${silabas[1]}.`;
                    return document.getElementById("saida").innerHTML = resultado;
                }
            };

            // se palavra de duas sílabas termina com l, r, x, i ou u, é oxítona;

            if (finais_along.indexOf(ultima.slice(- 1)) >=0) {
                let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;
                document.getElementById("saida").innerHTML = resultado;

            // se termina com s e não é precedido por o, a, e;

            } else if (ultima.slice(-1) == "s" && vogais.indexOf(ultima.slice(-2, -1)) == -1) {
                
                    let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;
                    document.getElementById("saida").innerHTML = resultado;

            // todos os outros casos são paroxítonas não acentuadas;

            } else {
                let resultado = `.<mark>${penultima}</mark>.${ultima}.`;
                document.getElementById("saida").innerHTML = resultado;
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
                    return document.getElementById("saida").innerHTML = resultado;

                } 

            };

            let resultado = `.${silabas[0]}.<mark>${silabas[1]}</mark>.`;
            return document.getElementById("saida").innerHTML = resultado;

        } else if (antepenultima.includes('ã')) {

            let restante = silabas.slice(0, -2);
            let resultado = `.${restante.join('.')}.<mark>${penultima}</mark>.${ultima}.`;
            return document.getElementById("saida").innerHTML = resultado;

        } else {

            // se a última sílaba é acentuada, é oxítona;

            for (i=0; i < ultima.length; i++) {
                if (acentuadas.indexOf(ultima.charAt(i)) >= 0) {
                    let restante = silabas.slice(0, -1);
                    let resultado = `.${restante.join('.')}.<mark>${ultima}</mark>.`;
                    return document.getElementById("saida").innerHTML = resultado;
                }
            };

            // se a penúltima sílaba é acentuada, é paroxítona;

            for (i=0; i < penultima.length; i++) {
                if (acentuadas.indexOf(penultima.charAt(i)) >= 0) {
                    let restante = silabas.slice(0, -2);
                    let resultado = `.${restante.join('.')}.<mark>${penultima}</mark>.${ultima}.`;
                    return document.getElementById("saida").innerHTML = resultado;
                }
            };

            // se a antepenúltima é acentuada, é proparoxítona;
            
            for (i=0; i < antepenultima.length; i++) {
                if (acentuadas.indexOf(antepenultima.charAt(i)) >= 0) {
                    if (silabas.length == 3) {
                        let restante = silabas.slice(0, -3);
                        let resultado = `.${restante.join('.')}<mark>${antepenultima}</mark>.${penultima}.${ultima}.`;
                        return document.getElementById("saida").innerHTML = resultado;
                    } else {
                        let restante = silabas.slice(0, -3);
                        let resultado = `.${restante.join('.').concat('.')}<mark>${antepenultima}</mark>.${penultima}.${ultima}.`;
                        return document.getElementById("saida").innerHTML = resultado;
                    }
                    
                }
            };

            // se palavra de três sílabas termina com l, r, x, i ou u, é oxítona;

            if (finais_along_prop.indexOf(ultima.slice(- 1)) >= 0) {
                let restante = silabas.slice(0, -1);
                let resultado = `.${restante.join('.')}.<mark>${ultima}</mark>.`;
                document.getElementById("saida").innerHTML = resultado;

            // se termina com s e não é precedido por o, a, e, é oxítona;

            } else if (ultima.slice(ultima.charAt(-1)) == "s" && vogais.indexOf(ultima.slice(ultima.charAt(-2), ultima.charAt(-1))) == -1) {
                let restante = silabas.slice(0, -1);
                let resultado = `.${restante.join('.')}.<mark>${ultima}</mark>.`;
                document.getElementById("saida").innerHTML = resultado;

            // todos os outros casos são paroxítonas não acentuadas;

            } else {
                if (silabas.length == 3) {
                    let resultado = `.${antepenultima}.<mark>${penultima}</mark>.${ultima}.`;
                    document.getElementById("saida").innerHTML = resultado;

                } else if (silabas.length > 3) {
                    let restante = silabas.slice(0, -3);
                    let resultado = `.${restante.join('.')}.${antepenultima}.<mark>${penultima}</mark>.${ultima}.`;
                    document.getElementById("saida").innerHTML = resultado;
                }
            }
        };
    }

    //var imprimir = silabas.join(".");
    //document.getElementById("saida").value = imprimir;
};


//Esc para limpar a tela
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        document.getElementById("entrada").value = "";
        document.getElementById("saida").innerHTML = "&nbsp;";
    
    }
});

//Sem uso
function enviarEmail() {
    var quem = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var palavra = document.getElementById("palavra").value;
    var mensagem = document.getElementById("mensagem").value;
    let body = `Quem: ${quem}, E-mail: ${email}, Mensagem: ${mensagem}`
    window.open(`mailto:tiago.bentivoglio@gmail.com?subject=${palavra}&body=${body}`);
};






//Padrão Regex
//const padrao_silabas = new RegExp('(?:ch|nh|lh|gu|gü|qu|gn|ps|^cu(?=i(?!m))|^mu(?=i)|[mnzskjhx]|[fpbvtdcçrg][lr]?|[lr])?(?:[ieaoíéêáâãóõôu][iu](?![iuz]$)[iu]?|[u(i)]|[aáãâ][eo]|[õó][e]|[ieaouíéêáâãóõôúü])(?:(?:(?:(?:n(?!h)|d(?![rl])|m|c(?![rlh])|t(?![lr])|z|x|p(?![slr])|b(?![rl])|g[?!rl])s?(?![ieaouíéêáâãóõôúü]))|(?:(?:i$)(?![ieaouíéêáãâóõôúüs]))|(?:(?:s)(?![ieaouíéêáãâóõôúü]))|(?:(?:l)(?![hieaouíéêáãâóõôúü]))|(?:(?:g)(?![hrlnieaouíéêáãâóõôúü]))|(?:(?:r)(?![ieaouíéêáâãóõôúü]))|(?:(?:f)(?![rlieaouíéêáâãóõôúü]))))?', 'g');

//Listas
//const acentuadas = ['ã','á', 'â', 'é', 'ê', 'ó', 'ô', 'õ', 'í', 'ú'];

//const finais_along = ['l', 'r', 'x', 'z', 'm',  'i', 'u'];

//const finais_along_prop = ['l', 'r', 'x', 'z',  'i', 'u'];

//const vogais = ['a', 'o', 'e'];


//Excessões
//const mono_atonas = ['o', 'a', 'os', 'as', 'um', 'uns', 'me', 'te', 'se', 'lhe', 'nos', 'vos', 'lhes', 'que', 'com', 'de', 'em ', 'por', 'sem', 'sob', 'à', 'ao', 'da', 'do', 'na', 'no', 'num', 'nuns', 'e', 'mas', 'nem', 'ou', 'dom', 'frei', 'seus'];
