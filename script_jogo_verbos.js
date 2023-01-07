/////////////////
//Jogo dos verbos
/////////////////

//Esc para limpar a tela
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        acertos = 0;
        erros = 0;
        document.getElementById("palavra_aleatoria_jogo_verbos").innerHTML = "&nbsp;";
        document.getElementById("acertos").innerHTML = "Acertos:&nbsp;&nbsp;";
        document.getElementById("erros").innerHTML = "Erros:&nbsp;&nbsp;";
        document.getElementById("resultado_jogo_verbos").innerHTML = "&nbsp;"
    }
});

//Variáveis iniciais
let acertos = 0;
let erros = 0;
let gabarito = []

/////////////////
//Funções

function gerar_verbo_aleatorio() {

    gabarito = []

    document.getElementById("resultado_jogo_verbos").innerHTML = "&nbsp;"

    const tempo_possiveis = [presente_ind, pret_imperfeito_ind, pret_perfeito_ind, pret_maisque_ind, futuro_pres_ind, futuro_pret_ind, presente_sub, pret_imperfeito_sub, futuro_sub, presente_imperat_positivo, presente_imperat_negativo];

    let um_tempo = tempo_possiveis[Math.floor(Math.random() * tempo_possiveis.length)];

    let pessoa_aleatoria = ''

    //Se for imperativo, escolher sobre as segundas pessoas do singular e plural
    if (um_tempo === presente_imperat_positivo | um_tempo === presente_imperat_negativo) {

        const pessoas = ['2ps', '2pp']

        pessoa_aleatoria = pessoas[Math.floor(Math.random() * pessoas.length)];

    } else {

        const pessoas = ['1ps', '2ps', '3ps', '1pp', '2pp', '3pp']

        pessoa_aleatoria = pessoas[Math.floor(Math.random() * pessoas.length)];

    }

    

    let imprimir = um_tempo(2)

    console.log(imprimir['infinitivo'])
    
    //Se for imperativo, o nome do atributo muda
    if (imprimir['modo'] === 'imperativo') {

        //Se for imperativo negativo, incluir o não
        if (imprimir['maneira'] === 'negativo') {

            imprimir[pessoa_aleatoria] = 'não '+imprimir[pessoa_aleatoria]

        }

        gabarito.push(imprimir['maneira']+' '+imprimir['modo'])

    //Se for a 1pp do presente do indicativo, também pode ser a 1pp do pretérito perfeito do indicativo
    } else if (imprimir['tempo'] === 'presente' && imprimir['modo'] === "indicativo" && pessoa_aleatoria === '1pp') {

        gabarito.push(imprimir['tempo']+' '+imprimir['modo'])

        gabarito.push('pretérito perfeito '+imprimir['modo'])

    //Se for a 1pp do pretérito perfeito do indicativo, também pode ser a 1pp do presente do indicativo
    } else if (imprimir['tempo'] === 'pretérito perfeito' && imprimir['modo'] === "indicativo" && pessoa_aleatoria === '1pp') {

        gabarito.push(imprimir['tempo']+' '+imprimir['modo'])

        gabarito.push('presente '+imprimir['modo'])

    //Se for a 3pp do pretérito perfeito do indicativo, também pode ser a 3pp do pretérito mais-que-perfeito do indicativo
    } else if (imprimir['tempo'] === "pretérito perfeito" && imprimir['modo'] === "indicativo" && pessoa_aleatoria === '3pp') {

        gabarito.push(imprimir['tempo']+' '+imprimir['modo'])

        gabarito.push('pretérito mais-que-perfeito '+imprimir['modo'])

    //Se for a 3pp do pretérito mais-que-perfeito do indicativo, também pode ser a 3pp do pretérito perfeito do indicativo
    } else if (imprimir['tempo'] === "pretérito mais-que-perfeito" && imprimir['modo'] === "indicativo" && pessoa_aleatoria === '3pp') {
        
        gabarito.push(imprimir['tempo']+' '+imprimir['modo'])

        gabarito.push('pretérito perfeito '+imprimir['modo'])

    } else {

        gabarito.push(imprimir['tempo']+' '+imprimir['modo'])

    }

    let pessoa_imprimir = ''

    if (pessoa_aleatoria === '1ps') {
        pessoa_imprimir = '<mark>eu</mark>'
    } else if (pessoa_aleatoria === '2ps') {
        pessoa_imprimir = '<mark>tu</mark>'
    } else if (pessoa_aleatoria === '3ps') {
        pessoa_imprimir = '<mark>ele</mark>'
    } else if (pessoa_aleatoria === '1pp') {
        pessoa_imprimir = '<mark>nós</mark>'
    } else if (pessoa_aleatoria === '2pp') {
        pessoa_imprimir = '<mark>vós</mark>'
    } else if (pessoa_aleatoria === '3pp') {
        pessoa_imprimir = '<mark>eles</mark>'
    }

    if (imprimir['modo'] === 'imperativo') {
        document.getElementById("palavra_aleatoria_jogo_verbos").innerHTML = imprimir[pessoa_aleatoria]
    } else {
        //Imprime a forma verbal a ser analisada pela pessoa
        document.getElementById("palavra_aleatoria_jogo_verbos").innerHTML = pessoa_imprimir+' '+imprimir[pessoa_aleatoria]
    }



}


function iniciar_jogo() {

    clearInterval(intervalo)

    var tempo = 60;

    //Limpar os acertos e erros anteriores
    acertos = 0;
    erros = 0;

    document.getElementById("acertos").innerHTML = "Acertos: "+acertos;
    document.getElementById("erros").innerHTML = "Erros: "+erros;

    //Limpar os resultados anteriores
    document.getElementById("resultado_jogo_verbos").innerHTML = "&nbsp;"

    //Gera uma nova palavra para iniciar o jogo
    gerar_verbo_aleatorio()

    //Timer
    var intervalo = setInterval(() => {
        document.getElementById("counter").innerHTML = "tempo: "+tempo+" s";

        tempo--;

    if (tempo < 0) {

        clearInterval(intervalo)

        let pontuacao = acertos-erros

        document.getElementById("resultado_jogo_verbos").innerHTML = 'Sua pontuação é <mark>'+pontuacao+'</mark>.'

        
    }

    }, 1000);

}

/////////////////
//Escuta dos botões
const botoes_respostas = document.getElementsByClassName("botao_temposverbais")

Array.from(botoes_respostas).forEach(element => {
    element.addEventListener("click", function () {
        
        if (gabarito.includes(element.id)) {
            acertos += 1;
            document.getElementById("acertos").innerHTML = "Acertos: "+acertos;
            document.getElementById("resultado_jogo_verbos").innerHTML = "<mark>Correto!</mark>"
        } else {
            erros +=1;
            document.getElementById("erros").innerHTML = "Erros: "+erros;
            document.getElementById("resultado_jogo_verbos").innerHTML = "<mark>Errado...</mark>"
        }

    })
})
