
//Esc para limpar a tela
document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        document.getElementById("sobre_texto").innerHTML = '<p style="font-size: 180px">&#77868;</p>'
    
    }
});


document.getElementById("botao_silabador").onclick = function () {

    document.getElementById("sobre_texto").innerHTML = '<p id="titulo_texto_sobre"><mark>Silabador</mark></p><br><p id="corpo_texto_sobre">O Silabador é uma aplicação que usa <mark>RegEx</mark> para identificar a estrutura das sílabas. Para construir o padrão RegEx, foram consideradas todas as possibilidades da língua portuguesa para as três partes de qualquer sílaba (onset, núcleo e coda).<br> A identificação da sílaba tônica é feita a partir da quantidade de sílabas da palavra e de suas características morfológicas, seguindo as regras encontradas em qualquer <mark>gramática</mark>.</p>'
    
};

document.getElementById("botao_conjugador").onclick = function () {

    document.getElementById("sobre_texto").innerHTML = '<p id="titulo_texto_sobre"><mark>Conjugador</mark></p><br><p id="corpo_texto_sobre">O Conjugador é uma aplicação bastante simples, que aplica as desinências modo-temporais e número-pessoais aos radicais dos verbos regulares e de conjugação pronominal. Há adaptação ortográfica do radical nos casos previstos pelas gramáticas. Ainda não há conjugação dos verbos irregulares nem defectivos.</p>'
    
};

document.getElementById("sobre_base_palavras").onclick = function () {

    document.getElementById("sobre_texto").innerHTML = '<p id="titulo_texto_sobre"><mark>Base de Palavras</mark></p><br><p id="corpo_texto_sobre">A Base de Palavras é um banco de dados em formato JSON que registra a ortografia e a classe das palavras. <br> Foi construída com <mark>web scrapping</mark> do site do <a href="https://www.academia.org.br/nossa-lingua/busca-no-vocabulario">Vocabulário Ortográfico da Língua Portuguesa</a> (Academia Brasileira de Letras) usando script <mark>Python</mark> (Selenium). </p>'
    
};

document.getElementById("sobre_ideias_relacionadas").onclick = function () {

    document.getElementById("sobre_texto").innerHTML = '<p id="titulo_texto_sobre"><mark>Ideias Relacionadas</mark></p><br><p id="corpo_texto_sobre">A base Ideas Relacionadas é uma aplicação dos dados encontrados <a href="https://github.com/fititnt/DicSin-dicionario-sinonimos-portugues-brasileiro">neste link</a>. Originalmente, é uma base de dados de sinônimos da língua portuguesa, mas chamamos de "Ideas Relacionadas" para expandir seu uso.<br> Fizemos o parsing para JSON usando Python.</p>'
    
};

document.getElementById("sobre_plurais").onclick = function () {

    document.getElementById("sobre_texto").innerHTML = '<p id="titulo_texto_sobre"><mark>Pluralizador</mark></p><br><p id="corpo_texto_sobre">O Pluralizador é uma aplicação simples, que visa registrar em forma de código as regras de flexão de número de substantivo e adjetivos que podem ser encontradas em qualquer gramática.</p>'
    
};

document.getElementById("sobre_advinho").onclick = function () {

    document.getElementById("sobre_texto").innerHTML = '<p id="titulo_texto_sobre"><mark>Adivinho a palavra</mark></p><br><p id="corpo_texto_sobre">O Advinho a palavra é inspirado no jogo da Forca: o usuário pensa em uma palavra e o computador deve adivinhá-la com base em letras que são sugeridas e perguntas que são feitas ao usuário.</p>'
    
};

document.getElementById("sobre_construcao").onclick = function () {

    document.getElementById("sobre_texto").innerHTML = '<p id="titulo_texto_sobre"><mark>Construa palavras</mark></p><br><p id="corpo_texto_sobre">O jogo Construa palavras apresenta um número de sílabas aleatórias para o usuário e o número de possíveis combinações válidas dessas sílabas. O desafio é combinar as sílabas e formar todas as palavras possíveis.</p>'
    
};


document.getElementById("rimador").onclick = function () {

    document.getElementById("sobre_texto").innerHTML = '<p id="titulo_texto_sobre"><mark>Rimador</mark></p><br><p id="corpo_texto_sobre">A ferramenta de rimas que apresentamos aqui ainda está em estágio inicial de seu desenvolvimento. Por enquanto, as rimas são encontradas com base na identidade de grafia, seja das letras ou das sílabas. Contudo, as rimas não são a identidade de grafias entre as palavras, mas sim a identidade de sons. Sendo assim, há rimas que não são encontradas pelo nosso buscador de rimas, porque são grafadas de forma diferente, apesar de terem o mesmo som.</p>'
    
};

//document.getElementById("bibliografia").onclick = function () {

//    document.getElementById("sobre_texto").innerHTML = '<p id="titulo_texto_sobre"><mark>Bibliografia</mark></p><br><p id="corpo_texto_sobre" style="text-align: left">BECHARA, E. <mark>Moderna gramática portuguesa</mark>. Rio de Janeiro: Nova Fronteira, 2009.<br>CUNHA, C. et CINTRA, L. <mark>Nova gramática do português contemporâneo</mark>. Rio de Janeiro: Lexicon, 2007 <br>STEFANOV, S. <mark>Padrões JavaScript</mark>. São Paulo: Novatec, 2011.</p>'
    
//};