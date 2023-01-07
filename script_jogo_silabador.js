// Jogo de separação de sílabas //

//Variáveis globais
var acertos = 0;
var erros = 0;

//Funções 

//Esc para limpar a tela
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        acertos = 0;
        erros = 0;
        document.getElementById("acertos").innerHTML = "Acertos: "+acertos;
        document.getElementById("erros").innerHTML = "Erros: "+erros;
        document.getElementById("palavra_aleatoria").innerHTML = "&nbsp;";
        limpar_resultado();
        limpar_gabarito();
    }
});

function limpar_resultado() {
    document.getElementById("resultado").innerHTML = "&nbsp;";
};

function limpar_gabarito() {
    document.getElementById("gabarito").innerHTML = "&nbsp;";
};

function numero_silabas() {

    //Padrão Regex
    const padrao_silabas = new RegExp('(?:ch|nh|lh|gu|gü|qu|gn|ps|^cu(?=i(?!m))|^mu(?=i)|[mnzskjhx]|[fpbvtdcçrg][lr]?|[lr])?(?:[ieaoíéêáâãóõôu][iu](?![iuz]$)[iu]?|[u(i)]|[aáãâ][eo]|[õó][e]|[ieaouíéêáâãóõôúü])(?:(?:(?:(?:n(?!h)|d(?![rl])|m|c(?![rlh])|t(?![lr])|z|x|p(?![slr])|b(?![rl])|g[?!rl])s?(?![ieaouíéêáâãóõôúü]))|(?:(?:i$)(?![ieaouíéêáãâóõôúüs]))|(?:(?:s)(?![ieaouíéêáãâóõôúü]))|(?:(?:l)(?![hieaouíéêáãâóõôúü]))|(?:(?:g)(?![hrlnieaouíéêáãâóõôúü]))|(?:(?:r)(?![ieaouíéêáâãóõôúü]))|(?:(?:f)(?![rlieaouíéêáâãóõôúü]))))?', 'g');


    var texto = document.getElementById("palavra_aleatoria").value;
    var silabas = texto.toLowerCase().match(padrao_silabas);
    tamanho = silabas.length;
    
    

    return tamanho;
};

function resultado_final(tamanho, resposta) {
    if (resposta === tamanho) {

        acertos +=1;
        document.getElementById("acertos").innerHTML = "Acertos: "+acertos;

        if (tamanho === 1) {
            document.getElementById("resultado").innerHTML = "<mark>Correto!</mark> Há 1 sílaba.";
        } else {
            document.getElementById("resultado").innerHTML = "<mark>Correto!</mark> Há "+tamanho+" sílabas.";
        }
        
    } else if (resposta !== tamanho) {

        erros +=1;
        document.getElementById("erros").innerHTML = "Erros: "+erros;

        if (tamanho === 1) {
            document.getElementById("resultado").innerHTML = "<mark>Errado</mark>, há "+tamanho+" sílaba.";
        } else {
            document.getElementById("resultado").innerHTML = "<mark>Errado</mark>, há "+tamanho+" sílabas.";
        };
        
    };
    let gabarito = separarSilabas();
    document.getElementById("gabarito").innerText = gabarito;
};

function nova_palavra() {

    let lista_total = Object.keys(base_palavras_principal)
    let nova_palavra_aleatoria = lista_total[Math.floor(Math.random() * lista_total.length)];

    document.getElementById("palavra_aleatoria").innerHTML = nova_palavra_aleatoria;
}

//Separação de sílabas de acordo com padrão RegEx
function separarSilabas() {
    
    //Padrão Regex
    const padrao_silabas = new RegExp('(?:ch|nh|lh|gu|gü|qu|gn|ps|^cu(?=i(?!m))|^mu(?=i)|[mnzskjhx]|[fpbvtdcçrg][lr]?|[lr])?(?:[ieaoíéêáâãóõôu][iu](?![iuz]$)[iu]?|[u(i)]|[aáãâ][eo]|[õó][e]|[ieaouíéêáâãóõôúü])(?:(?:(?:(?:n(?!h)|d(?![rl])|m|c(?![rlh])|t(?![lr])|z|x|p(?![slr])|b(?![rl])|g[?!rl])s?(?![ieaouíéêáâãóõôúü]))|(?:(?:i$)(?![ieaouíéêáãâóõôúüs]))|(?:(?:s)(?![ieaouíéêáãâóõôúü]))|(?:(?:l)(?![hieaouíéêáãâóõôúü]))|(?:(?:g)(?![hrlnieaouíéêáãâóõôúü]))|(?:(?:r)(?![ieaouíéêáâãóõôúü]))|(?:(?:f)(?![rlieaouíéêáâãóõôúü]))))?', 'g');


    var texto = document.getElementById("palavra_aleatoria").value;
    var silabas = texto.toLowerCase().match(padrao_silabas);
    var imprimir = `.${silabas.join(".")}.`;
    return imprimir
};
////////////
 

function iniciar_jogo() {

    clearInterval(intervalo)

    var tempo = 60;

    //Limpar os acertos e erros anteriores
    acertos = 0;
    erros = 0;

    document.getElementById("acertos").innerHTML = "Acertos: "+acertos;
    document.getElementById("erros").innerHTML = "Erros: "+erros;

    //Limpar os resultados anteriores
    document.getElementById("resultado").innerHTML = "&nbsp;"
    document.getElementById("gabarito").innerHTML = "&nbsp;"

    //Gera uma nova palavra para iniciar o jogo
    nova_palavra()

    
    

    //Timer
    var intervalo = setInterval(() => {
        document.getElementById("counter").innerHTML = "tempo: "+tempo+" s";

        tempo--;

    if (tempo < 0) {

        clearInterval(intervalo)

        //document.getElementById("counter").innerHTML = "tempo: 60 s";

        if (erros===1) {
            document.getElementById("resultado").innerHTML = "Você teve "+acertos+" acertos e "+erros+" erro."
        } else if (acertos===1) {
            document.getElementById("resultado").innerHTML = "Você teve "+acertos+" acerto e "+erros+" erros."
        } else if (erros===1 && acertos ===1) {
            document.getElementById("resultado").innerHTML = "Você teve "+acertos+" acerto e "+erros+" erro."
        } else {
            document.getElementById("resultado").innerHTML = "Você teve "+acertos+" acertos e "+erros+" erros."
        }

        let pontuacao = acertos-erros

        document.getElementById("gabarito").innerHTML = 'Sua pontuação é <mark>'+pontuacao+'</mark>.'

        
    }

    }, 1000);

}





////////////
//botões de número


document.getElementById('1').onclick = function () {
    resposta = 1;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('2').onclick = function () {
    resposta = 2;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('3').onclick = function () {
    resposta = 3;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('4').onclick = function () {
    resposta = 4;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('5').onclick = function () {
    resposta = 5;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('6').onclick = function () {
    resposta = 6;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('7').onclick = function () {
    resposta = 7;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('8').onclick = function () {
    resposta = 8;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('9').onclick = function () {
    resposta = 9;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('10').onclick = function () {
    resposta = 10;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('11').onclick = function () {
    resposta = 11;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('12').onclick = function () {
    resposta = 12;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('13').onclick = function () {
    resposta = 13;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('14').onclick = function () {
    resposta = 14;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

document.getElementById('15').onclick = function () {
    resposta = 15;
    numero_silabas();
    resultado_final(tamanho, resposta);
};

