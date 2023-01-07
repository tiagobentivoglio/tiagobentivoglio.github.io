

/////


//A letra que foi chutada por último
var letra_guess = "";

//Quantos chutes foram dados
var chutes_total = 0;

//Palavras que foram chutadas
var quais_palavras_chutadas = [];

//Quantas letras já foram chutadas
var letras_chutadas = 1;

//Quantas letras já foram usadas
var letras_usadas = 0;

//Quais letras chutadas foram descartadas
var letras_descartadas = [];

//Quantas pelavras têm o mesmo tamanho
let lista_mesmo_tamanho = [];

let numero_dicas = 0;


//Quantas vezes a letra_guess foi adicionada no blank
var clique = 0;

//Funções

//Esc para limpar a tela
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        window.location.reload()
    }
});




//Gera os blanks de acordo com o botão clicado
function gerar_blanks (resposta) {

    letras_descartadas = [];

    //Limpar status
    document.getElementById("status").innerHTML = "&nbsp;";

    //Limpar opções de vogais
    document.getElementById("row_opcoes_vogais").innerHTML = ""

    //Criar blanks
    let texto_html = '<td class="blanks_letras" id=""><button class="blanks"></button></td>'.repeat(resposta);
    document.getElementById("row_blanks_letras").innerHTML = texto_html;
    let largura = 100/resposta;
    document.getElementsByClassName("blanks_letras").style = "width:"+largura;
    document.getElementById("tabela_blanks").style = "width:"+resposta*5+"%";

    //Sempre que gerar novos blanks, significa que está começando uma nova radoda e é necessário fazer mais uma sugestão de letra
    gerar_letra_aleatoria();



    let botoes = Array.from(document.getElementsByClassName("blanks"));

    //Look que atribui a escuta da letra sorteada que aparecerá nos blanks
    if (botoes.length === 0) {
    
    } else {
        botoes.forEach(element => {

            element.addEventListener("click", function () {

                let letra_atual = letra_guess                
                
                if (letra_atual === "a") {

                    let numero_opcoes = 5;

                    document.getElementById("tabela_opcoes_vogais").style = "width: "+numero_opcoes*5+"%"

                    document.getElementById("row_opcoes_vogais").innerHTML = '<td class="td_opcoes"><button class="opcoes_vogais" id="a">a</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="á">á</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="ã">ã</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="â">â</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="à">à</button></td>'
                    
                    document.getElementsByClassName("td_opcoes").style = "width: "+100/numero_opcoes+"%"

                    let opcoes_a = Array.from(document.getElementsByClassName("opcoes_vogais"));
        
                    opcoes_a.forEach(opcao => {
                        
                        opcao.addEventListener("click", function() {
                            element.innerHTML = opcao.id.toString();
                                
                            letras_usadas += 1;
                            listar_possiveis_palavras();
                            document.getElementById("row_opcoes_vogais").innerHTML = ""
                            
                                
                        })
                    })
                
                    
                } else if (letra_atual === "e") {


                    let numero_opcoes = 3;

                    document.getElementById("tabela_opcoes_vogais").style = "width: "+numero_opcoes*5+"%"

                    
                    document.getElementById("row_opcoes_vogais").innerHTML = '<td class="td_opcoes"><button class="opcoes_vogais" id="e">e</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="é">é</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="ê">ê</button></td>'

                    document.getElementsByClassName("td_opcoes").style = "width: "+100/numero_opcoes+"%"
                    
                    let opcoes_a = Array.from(document.getElementsByClassName("opcoes_vogais"));
        
                    opcoes_a.forEach(opcao => {
                        opcao.addEventListener("click", function() {
                            element.innerHTML = opcao.id.toString();
                            letras_usadas += 1;
                            
                            listar_possiveis_palavras();
                            document.getElementById("row_opcoes_vogais").innerHTML = ""
                            
                        })
                    })
                
                    

                } else if (letra_atual === "i") {

                    let numero_opcoes = 2;

                    document.getElementById("tabela_opcoes_vogais").style = "width: "+numero_opcoes*5+"%"

                    
                    document.getElementById("row_opcoes_vogais").innerHTML = '<td class="td_opcoes"><button class="opcoes_vogais" id="i">i</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="í">í</button></td>'
                    
                    document.getElementsByClassName("td_opcoes").style = "width: "+100/numero_opcoes+"%"

                    let opcoes_a = Array.from(document.getElementsByClassName("opcoes_vogais"));
        
                    opcoes_a.forEach(opcao => {
                        
                        opcao.addEventListener("click", function() {
                            element.innerHTML = opcao.id.toString();
                            letras_usadas += 1;
                            listar_possiveis_palavras();
                            document.getElementById("row_opcoes_vogais").innerHTML = ""
                            
                        })
                    })
                
                    

                } else if (letra_atual === "o") {

                    let numero_opcoes = 4;

                    document.getElementById("tabela_opcoes_vogais").style = "width: "+numero_opcoes*5+"%"

                    
                    document.getElementById("row_opcoes_vogais").innerHTML = '<td class="td_opcoes"><button class="opcoes_vogais" id="o">o</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="ó">ó</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="ô">ô</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="õ">õ</button></td>'

                    document.getElementsByClassName("td_opcoes").style = "width: "+100/numero_opcoes+"%"
                    
                    let opcoes_a = Array.from(document.getElementsByClassName("opcoes_vogais"));
        
                    opcoes_a.forEach(opcao => {
                        
                        opcao.addEventListener("click", function() {
                            element.innerHTML = opcao.id.toString();
                            letras_usadas += 1;
                            listar_possiveis_palavras();
                            document.getElementById("row_opcoes_vogais").innerHTML = ""
                            
                        })
                    })
                
                } else if (letra_atual === "u") {
                
                    let numero_opcoes = 2;

                    document.getElementById("tabela_opcoes_vogais").style = "width: "+numero_opcoes*5+"%"

                    
                    document.getElementById("row_opcoes_vogais").innerHTML = '<td class="td_opcoes"><button class="opcoes_vogais" id="u">u</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="ú">ú</button></td>'
                    
                    document.getElementsByClassName("td_opcoes").style = "width: "+100/numero_opcoes+"%"

                    let opcoes_a = Array.from(document.getElementsByClassName("opcoes_vogais"));
        
                    opcoes_a.forEach(opcao => {
                        
                        opcao.addEventListener("click", function() {
                            element.innerHTML = opcao.id.toString();
                            letras_usadas += 1;
                            listar_possiveis_palavras();
                            document.getElementById("row_opcoes_vogais").innerHTML = ""
                            
                        })
                    })
                
                    

                } else if (letra_atual === "c") {

                    let numero_opcoes = 2;

                    document.getElementById("tabela_opcoes_vogais").style = "width: "+numero_opcoes*5+"%"
                    
                    document.getElementById("row_opcoes_vogais").innerHTML = '<td class="td_opcoes"><button class="opcoes_vogais" id="c">c</button></td><td class="td_opcoes"><button class="opcoes_vogais" id="ç">ç</button></td>'

                    document.getElementsByClassName("td_opcoes").style = "width: "+100/numero_opcoes+"%"
                    
                    let opcoes_a = Array.from(document.getElementsByClassName("opcoes_vogais"));
        
                    opcoes_a.forEach(opcao => {
                        
                        opcao.addEventListener("click", function() {
                            element.innerHTML = opcao.id.toString();
                            letras_usadas += 1;
                            listar_possiveis_palavras();
                            document.getElementById("row_opcoes_vogais").innerHTML = ""
                            
                        })
                    })
                
                } else {

                    element.innerHTML = letra_guess;
                    
                    letras_usadas += 1;
                    listar_possiveis_palavras();
                }
                
                
            })
            })
    };

    //Gera lista das palavras com mesmo tamanho

    lista_mesmo_tamanho = [];

    let tamanho_palavra_pensada = Array.from(document.getElementsByClassName("blanks"));

    lista_raw.forEach(element => {

        if (element.length === tamanho_palavra_pensada.length) {
            lista_mesmo_tamanho.push(element)

        } else {

        }
    })

};


///////////////
//Lista as palavra que se encaixam nos critérios.
//Função chamada toda vez que uma nova letra é preenchida.

var possibilidades_palavras = []
function listar_possiveis_palavras() {

    let get_blanks = Array.from(document.getElementsByClassName("blanks"));

    let palavra_intermediario = []

    get_blanks.forEach(element => {
        palavra_intermediario.push(element.innerHTML)
    });

    let ordem = 0;

    palavra_intermediario.forEach(abc => {

        let excluir = []


        lista_mesmo_tamanho.forEach(element => {

            
            if (abc !== "" && abc === element.slice(ordem, ordem+1) && possibilidades_palavras.includes(element) === false) {

                possibilidades_palavras.push(element)

            } else if (abc !== "" && abc !== element.slice(ordem, ordem+1) && possibilidades_palavras.includes(element)) {

                excluir.push(element)
                
            }

        })

        excluir.forEach(element => {
            if (possibilidades_palavras.includes(element)) {
                possibilidades_palavras.splice(possibilidades_palavras.indexOf(element), 1)
                
            }
        })

        ordem += 1;

    })

    lista_mesmo_tamanho = possibilidades_palavras;
        
    //Mecanismo de chutes
    chutar()


};

//////////
//Função interna
//Retorna item mais frequente de uma array
function mais_freq(arr){
    
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

//////////
//////////
//Geradores de letras sugeridas
//Retorna letra a partir dos resultados possíveis
function gerar_letra_nao_aleatoria() {

    var total_letras = [];

    var em_branco = [];

    //Saber quais letras já estão nos blanks
    let get_blanks = Array.from(document.getElementsByClassName("blanks"));
    let palavra_intermediario = []
    get_blanks.forEach(element => {
        palavra_intermediario.push(element.innerHTML)

        if (element.innerHTML === '') {
            let qual_em_branco = get_blanks.indexOf(element);
            em_branco.push(qual_em_branco)
        }
    });


    //Popular lista de letras ainda possíveis
    possibilidades_palavras.forEach(element =>{

        let letras_elemento = element.split("", element.length)

        letras_elemento.forEach(abc => {

            if (em_branco.includes(letras_elemento.indexOf(abc)) && letras_descartadas.includes(abc) === false) {
                
                total_letras.push(abc)

            }
            
        })

    });

    if (total_letras.length > 0) {

        //Pega a letra mais frequente
        let nova_letra = mais_freq(total_letras)

        document.getElementById("letra_sugestao").innerText = "Letra: "+nova_letra.toUpperCase();
        document.getElementById("instrucao_preenchimento").innerHTML = "Clique onde está a letra "+nova_letra.toUpperCase();
        document.getElementById("cell_nao").innerHTML = '<button class="simnao" id="nao" onclick="nao()">sugerir outra letra</button>';

        letra_guess = nova_letra;

        document.getElementById("numero_letras_tentadas").innerHTML = "Letras sugeridas: "+letras_chutadas;

    } else {
        console.log("caiu aqui")
        document.getElementById("status").innerHTML = "Nenhuma palavra se encaixa nesse padrão!"
        document.getElementById("reboot").innerHTML = '<button id="reboot_button" onclick="botao_recomecar()">Recomeçar!</button>'
    }

}

//Gera uma letra aleatória para perguntar se está na palavra
function gerar_letra_aleatoria () {

    if (letras_usadas === 0) {

        var letras_inicio = ["a", "e", "i", "o", "u"];

        var letras = [];
        
        letras_inicio.forEach(element => {
            if (letras_descartadas.includes(element) === false) {
                letras.push(element)
            }
        })
        
        if (letras.length === 0) {

            document.getElementById("status").innerHTML = "Status: "
            document.getElementById("chute").innerHTML = "Não existe palavra sem vogal!"


            document.getElementById("reboot").innerHTML = '<button id="reboot_button">Recomeçar!</button>'
            //Função do botão Recomeçar
            let recomecar = document.getElementById("reboot_button")
            recomecar.addEventListener("click", function() {
                window.location.reload()
            })

        } else {
            let nova_letra = letras[Math.floor(Math.random() * letras.length)];

            document.getElementById("letra_sugestao").innerText = "Letra: "+nova_letra.toUpperCase();
            document.getElementById("instrucao_preenchimento").innerHTML = "Clique onde está a letra "+nova_letra.toUpperCase();
            document.getElementById("cell_nao").innerHTML = '<button class="simnao" id="nao" onclick="nao()">sugerir outra letra</button>';

            letra_guess = nova_letra;

            document.getElementById("numero_letras_tentadas").innerHTML = "Letras sugeridas: "+letras_chutadas;

            return nova_letra;
        }
        

    } else {

        var letras_inicio = ["b", "c", "ç", "d", "f", "g", "h", "j", "l", "m", "n", "p", "q", "r", "s", "t","v", "x", "z"];

        var letras = [];

        letras_inicio.forEach(element => {
            if (letras_descartadas.includes(element) === false) {
                letras.push(element)
            }
        })

        let nova_letra = letras[Math.floor(Math.random() * letras.length)];

        document.getElementById("letra_sugestao").innerText = "Letra: "+nova_letra.toUpperCase();
        document.getElementById("instrucao_preenchimento").innerHTML = "Clique onde está a letra "+nova_letra.toUpperCase();
        document.getElementById("cell_nao").innerHTML = '<button class="simnao" id="nao" onclick="nao()">sugerir outra letra</button>';

        letra_guess = nova_letra;


        //document.getElementById("texto_numero_letras_tentadas").innerHTML = "Letras chutadas: ";
        document.getElementById("numero_letras_tentadas").innerHTML = letras_chutadas;

        return nova_letra;
    }
    

}
////////
////////


//Botão Sugerir outra letra
function nao() {

    letras_chutadas += 1;

    document.getElementById("row_opcoes_vogais").innerHTML = ""

    if (letras_usadas > 0) {

        letras_descartadas.push(letra_guess)

        gerar_letra_nao_aleatoria();

        
        //if (possibilidades_palavras.length < 300) {
           
        //    letras_descartadas.push(letra_guess)
            
        //    gerar_letra_nao_aleatoria();

        //} else {
        
        //    letras_descartadas.push(letra_guess)

        //    gerar_letra_aleatoria();
        //}

        

    } else {
        

        letras_descartadas.push(letra_guess)

        gerar_letra_aleatoria ();
    }
    
};

/////////////////////
/////////////////////
//Funções internas da função chutar

function resposta_sim() {

    document.getElementById("status").innerHTML = "Acertei!"
    document.getElementById("reboot").innerHTML = '<button id="reboot_button">Recomeçar!</button>'
    let recomecar = document.getElementById("reboot_button")
    recomecar.addEventListener("click", function() {
        window.location.reload()
    })

};

function botao_recomecar() {
    window.location.reload()
};

///Função interna da função consultar_sinonimo - retorna array ordenada pela frequencia
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

///Consulta uma palavra na base de sinônimos
function consultar_sinonimo (entrada) {

    let resultado = base_sinonimos_raw.map(a => a.palavra);

    if (resultado.includes(entrada)) {

        let ordem = resultado.indexOf(entrada)

        let dados = base_sinonimos_raw[ordem].sinonimos

        let lista_sinonimos = []

        dados.forEach(element => {
            element.forEach(palavra => {
                if (palavra !== entrada) {
                    lista_sinonimos.push(palavra)
                }
                
            })
        });

        let mais_comum = lista_sinonimos.byCount()

        let top_cinco = mais_comum.slice(0, 5)

        return top_cinco

    } else {

        let resultado = []

        return resultado

    }
}


//Se a pergunta da dica está correta
function dica_certa() {
    let qual = quais_palavras_chutadas.at(-1)
    document.getElementById("status").innerHTML = "É a palavra <mark>"+qual+"</mark>."
    document.getElementById("reboot").innerHTML = '<button id="reboot_button" onclick="botao_recomecar()">Recomeçar!</button>'
}

//Parece que essa função é redundante. A tentar_de_novo faz a mesma coisa.
function dica_errada() {

    chutes_total += 1;

    //Excluir a palavra descartada pela dica errada
    quais_palavras_chutadas.forEach(element => {
        if (lista_mesmo_tamanho.includes(element)) {
            lista_mesmo_tamanho.splice(lista_mesmo_tamanho.indexOf(element), 1)
        }
    })

    document.getElementById("numero_chutes").innerHTML = "Chutes: "+chutes_total;

    //console.log("ainda possíveis")
    //console.log(lista_mesmo_tamanho)

    //Colocar outro direcionamento aqui
    //Talvez um try do rimador

    let novo_chute = lista_mesmo_tamanho[Math.floor(Math.random() * lista_mesmo_tamanho.length)]

    document.getElementById("status").innerHTML = "É a palavra <mark>"+novo_chute+"</mark>?"
    document.getElementById("reboot").innerHTML = '<button id="correto" onclick="resposta_sim()">Sim!</button><button id="retry_button" onclick="tentar_de_novo()">Outro chute</button>'

    get_chute = novo_chute

    
}

//Função que fica chutando até a lista de palavras possíveis acabar
function tentar_de_novo() {

    let get_chute = quais_palavras_chutadas.at(-1)

    //Retira a palavra chutada da lista de palavras possíveis
    lista_mesmo_tamanho.splice(lista_mesmo_tamanho.indexOf(get_chute), 1)

    chutes_total += 1;

    //Se a lista de palavras possíveis restou vazia, nenhuma palavra se encaixa no padrão inserido
    if (lista_mesmo_tamanho.length === 0) {

        document.getElementById("status").innerHTML = "Nenhuma palavra se encaixa nesse padrão."
        document.getElementById("reboot").innerHTML = '<button id="reboot_button" onclick="botao_recomecar()">Recomeçar!</button>'

    // Se ainda tem elementos, fazer um chute aleatório.
    } else {

        document.getElementById("numero_chutes").innerHTML = "Chutes: "+chutes_total;

        let novo_chute = lista_mesmo_tamanho[Math.floor(Math.random() * lista_mesmo_tamanho.length)]

        document.getElementById("status").innerHTML = "É a palavra <mark>"+novo_chute+"</mark>?"
        document.getElementById("reboot").innerHTML = '<button id="correto" onclick="resposta_sim()">Sim!</button><button id="retry_button" onclick="tentar_de_novo()">Outro chute</button>'

        get_chute = novo_chute

    }
}

function gerar_dica() {

    let possiveis_dicas = []

    // Consulta os sinônimos de cada palavra da lista de palavras ainda possíveis.
    //E verifica qual palavra tem sinônimos na nossa base de ideias relacionadas.
    lista_mesmo_tamanho.forEach(element => {
        
        let sinonimos_chute = consultar_sinonimo(element)

        if (sinonimos_chute.length !== 0) {

            sinonimos_chute.push(element)

            possiveis_dicas.push(sinonimos_chute)
        } else {

        }

    })


    if (possiveis_dicas.length > 0) {

        //Dentre as palavras que têm sinônimos, sortear uma.
        let qual_pedir_dica = possiveis_dicas[Math.floor(Math.random() * possiveis_dicas.length)]

        //A própria palavra será a última da lista.
        let get_chute = qual_pedir_dica.at(-1)

        //console.log(get_chute)

        qual_pedir_dica.pop()

        //
        console.log(qual_pedir_dica)

        //Sorteia um dos sinônimos para aparecer na tela
        let um_sinonimo = qual_pedir_dica[Math.floor(Math.random() * qual_pedir_dica.length)]
        numero_dicas += 1;
        document.getElementById("numero_dicas_display").innerHTML = "Dicas: "+numero_dicas;

        //Adiciona a palavra na lista das palavras já chutadas
        quais_palavras_chutadas.push(get_chute)

        //Pergunta se está correto
        document.getElementById("status").innerHTML = "A palavra está relacionada a <mark>"+um_sinonimo+"</mark>?"
        document.getElementById("reboot").innerHTML = '<button id="correto" onclick="dica_certa()">Sim!</button><button id="retry_button" onclick="dica_errada()">Não</button>'

    } else {

        throw 'Nenhuma dica encontrada!'

    }

    

};
/////////////////////
/////////////////////
//Função rimador

//A palavra que é usada para perguntar a rima
var rima_tentativa = ""

//Lista com todas que rimam com a palavra usada na pergunta
let todas_que_rimam = []

function rima_errada() {

    //Eliminar todas as que rimam
    lista_mesmo_tamanho.forEach(element=> {

        //Se rima
        if (element.slice(-3) === rima_tentativa) {
            console.log('eliminada: '+element)
            //Elimina da lista de possíveis
            lista_mesmo_tamanho.splice(lista_mesmo_tamanho.indexOf(element), 1)

        }

    })


    chutar()

};

function rima_correta() {

    //Eliminar todas as que não rimam
    lista_mesmo_tamanho.forEach(element=> {

        //Se não rima
        if (element.slice(-3) !== rima_tentativa) {

            console.log('eliminada: '+element)
            //Elimina da lista de possíveis
            lista_mesmo_tamanho.splice(lista_mesmo_tamanho.indexOf(element), 1)

        }

    })

    //Ler as letras que já foram adicionadas
    let get_blanks = Array.from(document.getElementsByClassName("blanks"));

    //Preencher com as letras da rima
    get_blanks[-1].innerHTML = rima_tentativa[-1]
    get_blanks[-2].innerHTML = rima_tentativa[-2]
    get_blanks[-3].innerHTML = rima_tentativa[-3]


};

function eliminar_rimas () {

    console.log("eliminar rimas")
    console.log("palavras possíveis: "+lista_mesmo_tamanho.length)

    rima_tentativa = "";

    let todas_rimas = []

    lista_mesmo_tamanho.forEach(element =>{

        todas_rimas.push(element.slice(-3))

    })
        

    let rima_mais_comum = todas_rimas.byCount();

    console.log("rima mais comum: "+ rima_mais_comum[0]);
        

    if (todas_que_rimam.length >= lista_mesmo_tamanho.length*0.05) {

            console.log("tem bastante rima")

            //Tentar eliminar as que não rimam
            document.getElementById("status").innerHTML = "A sua palavra rima com <mark>"+rima_mais_comum+"</mark>?"
            document.getElementById("reboot").innerHTML = '<button id="correto" onclick="rima_correta()">Sim!</button><button id="ibidem">É essa palavra!</button><button id="retry_button" onclick="rima_errada()">Não</button>'

            rima_tentativa = rima_mais_comum;

    } else {

        console.log("não tem bastante rima")
        throw 'não tem bastante rima'

    }

}

////////////////////
//Função para fazer um chute de palavra pensada
function chutar () {

    //Ler as letras que já foram adicionadas
    let get_blanks = Array.from(document.getElementsByClassName("blanks"));
    
    //Resultado será uma lista
    let palavra_intermediario = [];

    //Quantidade de quadrados em branco
    let numero_em_branco = 0;

    //Iterar e preencher as duas variáveis acima
    get_blanks.forEach(element => {
        palavra_intermediario.push(element.innerHTML)
        if (element.innerHTML === "") {
            numero_em_branco += 1;
        }
    });

    //Se sobrar somente um blank, fazer um chute
    if (numero_em_branco === 1) {

        //Se a lista está vazia, nenhuma palavra se encaixa no padrão
        if (lista_mesmo_tamanho.length === 0) {

            document.getElementById("status").innerHTML = "Nenhuma palavra se encaixa nesse padrão."
            document.getElementById("reboot").innerHTML = '<button id="reboot_button" onclick="botao_recomecar()">Recomeçar!</button>'

        //Se a lista tem um único elmento, essa é a palavra pensada
        } else if (lista_mesmo_tamanho.length === 1) {

            chutes_total += 1;
            document.getElementById("numero_chutes").innerHTML = "Chutes: "+chutes_total;
            document.getElementById("status").innerHTML = "É a palavra <mark>"+lista_mesmo_tamanho[0]+"</mark>."
            document.getElementById("reboot").innerHTML = '<button id="reboot_button" onclick="botao_recomecar()">Recomeçar!</button>'

        //Se a lista tem mais de um elemento, chutar e eliminar as possibilidades.
        //Neste caso, de restar ainda um blank, já não cabe sugerir letras. 
        //É necessário ter outras formas de diminuir a lista de palavras possíveis.

        } else {
            
            console.log(lista_mesmo_tamanho)

            try {
                //Gerar dica
                gerar_dica()

            //Se não conseguir gerar dica, segue daqui.
            } catch(e) {

                console.log(e)

                chutes_total += 1;
            
                document.getElementById("numero_chutes").innerHTML = "Chutes: "+chutes_total;

                //Chuta aleatoriamente
                let get_chute = lista_mesmo_tamanho[Math.floor(Math.random() * lista_mesmo_tamanho.length)]

                //Adiciona a palavra na lista das palavras já chutadas
                quais_palavras_chutadas.push(get_chute)

                //Pergunta se está correto
                document.getElementById("status").innerHTML = "É a palavra <mark>"+get_chute+"</mark>?"
                document.getElementById("reboot").innerHTML = '<button id="correto" onclick="resposta_sim()">Sim!</button><button id="retry_button" onclick="tentar_de_novo()">Outro chute</button>'
            };
            

        }
        

    } else {

        //Se a lista está vazia, nenhuma palavra se encaixa no padrão
        if (lista_mesmo_tamanho.length === 0) {

            document.getElementById("status").innerHTML = "Nenhuma palavra se encaixa nesse padrão."
            document.getElementById("reboot").innerHTML = '<button id="reboot_button" onclick="botao_recomecar()">Recomeçar!</button>'

        //Se a lista tem um único elemento, essa é a palavra pensada
        } else if (lista_mesmo_tamanho.length === 1) {

            chutes_total += 1;
            document.getElementById("numero_chutes").innerHTML = "Chutes: "+chutes_total;
            document.getElementById("status").innerHTML = "É a palavra <mark>"+lista_mesmo_tamanho[0]+"</mark>."


            document.getElementById("reboot").innerHTML = '<button id="reboot_button" onclick="botao_recomecar()">Recomeçar!</button>'


        //Se a lista tem 2 elementos, chutar um dos dois
        } else if (lista_mesmo_tamanho.length >= 2 && lista_mesmo_tamanho.length < 4) {

            console.log(lista_mesmo_tamanho)

            try {

                gerar_dica()

            } catch(e) {

                console.log("não encontrou dica")

                chutes_total += 1;
                document.getElementById("numero_chutes").innerHTML = "Chutes: "+chutes_total;
                let get_chute = lista_mesmo_tamanho[Math.floor(Math.random() * lista_mesmo_tamanho.length)]
                quais_palavras_chutadas.push(get_chute)
                document.getElementById("status").innerHTML = "É a palavra <mark>"+get_chute+"</mark>?"


                document.getElementById("reboot").innerHTML = '<button id="correto" onclick="resposta_sim()">Sim!</button><button id="retry_button" onclick="tentar_de_novo()">Outro chute</button>'

                //Função tentar de novo
                //let retry = document.getElementById("retry_button")
                //retry.addEventListener("click", function() {

                //lista_mesmo_tamanho.splice(lista_mesmo_tamanho.indexOf(get_chute), 1)
                //let novo_chute = lista_mesmo_tamanho[0]
                //document.getElementById("status").innerHTML = "É a palavra <mark>"+novo_chute+"</mark>."
                //document.getElementById("reboot").innerHTML = '<button id="reboot_button" onclick="botao_recomecar()">Recomeçar!</button>'
                
                //});
            };
            

        } else if (lista_mesmo_tamanho.length >= 4 && lista_mesmo_tamanho.length < 50) {

            if (get_blanks.filter(x => x === '').length <= 2) {

                
                try {

                    //Passar pelo rimador
                    eliminar_rimas()
    
                //Se não conseguir gerar dica, segue daqui.
                } catch(e) {
    
                    console.log(e)

                    document.getElementById("status").innerHTML = "Estou pensando... Tente mais uma letra"

                }

            
            } else {

                document.getElementById("status").innerHTML = "Estou pensando... Tente mais uma letra"

                console.log("as três letras finais já foram preenchidas")

            }


        } else {
            document.getElementById("status").innerHTML = "Estou pensando... Tente mais uma letra"
            
        }

    }


}

/////////////////////
/////////////////////
/////////////////////
/////////////////////
//botões de número

document.getElementById('1').onclick = function () {
    gerar_blanks(1);
};

document.getElementById('2').onclick = function () {
    gerar_blanks(2);
};

document.getElementById('3').onclick = function () {
    gerar_blanks(3);
};

document.getElementById('4').onclick = function () {
    gerar_blanks(4);
};

document.getElementById('5').onclick = function () {
    gerar_blanks(5);
};

document.getElementById('6').onclick = function () {

    gerar_blanks(6);
};

document.getElementById('7').onclick = function () {
    gerar_blanks(7);
};

document.getElementById('8').onclick = function () {
    gerar_blanks(8);
};

document.getElementById('9').onclick = function () {
    gerar_blanks(9);
};

document.getElementById('10').onclick = function () {
    gerar_blanks(10);
};

document.getElementById('11').onclick = function () {
    gerar_blanks(11);
};

document.getElementById('12').onclick = function () {
    gerar_blanks(12);
};

document.getElementById('13').onclick = function () {
    gerar_blanks(13);
};

document.getElementById('14').onclick = function () {
    gerar_blanks(14);
};

document.getElementById('15').onclick = function () {
    gerar_blanks(15);
};
