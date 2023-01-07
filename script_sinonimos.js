
window.onload = function () {
    let tamanho = Object.keys(base_sinonimos_raw).length
    document.getElementById("tamanho").innerHTML = tamanho.toLocaleString('pt-br')
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
        document.getElementById("resultados_principais").innerHTML = "&nbsp;"
        document.getElementById("resultados_secundarios").innerHTML = "&nbsp;"
    }
});

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


///
function consultar_sinonimo () {

    let entrada = document.getElementById("entrada").value;

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

        document.getElementById("resultados_principais").innerHTML = mais_comum.slice(0, 5).join(', ')

        if (mais_comum.length > 10) {
            document.getElementById("resultados_secundarios").innerHTML = mais_comum.slice(6, 10).join(', ')
        }

    } else {

        document.getElementById("resultados_principais").innerHTML = "A palavra não foi encontrada."
        document.getElementById("resultados_secundarios").innerHTML = "&nbsp;"

    }
}


///////////

//Função interna para checar o tamanho da base
function get_total () {
    let tamanho = Object.keys(base_sinonimos_raw).length
    console.log(tamanho)
}
