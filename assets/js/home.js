// Global var
    var formaAtual = [`Círculo`,`Cubo`,`Retangulo`,`Romboedro`,`Trapezoide`,`Poligono`,`Quadrado`,`Cuboide`];
    var nomeForma = document.querySelector('.NomeDaForma');

    var input = document.getElementById(`numero`);
    var input2 = document.getElementById(`numero2`);
    var input3 = document.getElementById(`numero3`);
    var formaFormula = document.getElementById(`formaFormula`);
    var formaResult = document.getElementById(`formaResult`);
//

// Display
    function visivel() {
        document.querySelector(`article`).style.display = "flex";
        document.getElementById(`backForma`).style.display = "flex"
        document.querySelector(`body`).style.overflow = "hidden";
        input.value = "";
        input2.value = "";
        input3.value = "";
        formaResult.innerText = "O resultado aparece aqui";
        maisInforma.innerHTML = "<h2>Saiba mais da figura</h2>";
        textoForma.classList = "textoForma";
    }

    function invisible() {
        document.querySelector(`article`).style.display = "none";
        document.getElementById(`backForma`).style.display = "none"
        document.querySelector(`body`).style.overflow = "scroll";
    }
//

// Fechar aba de cálculo
    document.getElementById(`closeForma`).onclick = function() {
        invisible();
    }

    window.onkeydown = function(event) {
        if (event.keyCode == 27 && document.querySelector(`article`).style.display == "flex") {
            invisible();
        }
    }

    window.onclick = function(event) {
        if (event.target == document.getElementById(`backForma`)) {
            invisible();
        }
    }
//

// Abrir aba de calculo
    document.getElementById(`circulo`).onclick = function() {
        nomeForma.innerText = formaAtual[0];
        visivel();
        input2.style.display = "none";
        input3.style.display = "none";
        formaFormula.innerText = "π × r²";
        textoForma.querySelector(`div`).innerText = descriForma[0];
    }

    document.getElementById(`cubo`).onclick = function() {
        nomeForma.innerText = formaAtual[1];
        visivel();
        input2.style.display = "none";
        input3.style.display = "none";
        formaFormula.innerText = "6 × l²";
        textoForma.querySelector(`div`).innerText = descriForma[1];
    }

    document.getElementById(`retangulo`).onclick = function() {
        nomeForma.innerText = formaAtual[2];
        visivel();
        input2.style.display = "block";
        input3.style.display = "none";
        formaFormula.innerText = "b × h";
        textoForma.querySelector(`div`).innerText = descriForma[2];
    }

    document.getElementById(`romboedro`).onclick = function() {
        nomeForma.innerText = formaAtual[3];
        visivel();
        input2.style.display = "block";
        input3.style.display = "block";
        formaFormula.innerText = "(2 × b × h) + (2 × b × w) + (2 × h × w)";
        textoForma.querySelector(`div`).innerText = descriForma[3];
    }

    document.getElementById(`trapezoide`).onclick = function() {
        nomeForma.innerText = formaAtual[4];
        visivel();
        input2.style.display = "block";
        input3.style.display = "block";
        formaFormula.innerText = "(B + b) × h /2";
        textoForma.querySelector(`div`).innerText = descriForma[4];
    }

    document.getElementById(`poligono`).onclick = function() {
        nomeForma.innerText = formaAtual[5];
        visivel();
        input2.style.display = "block";
        input3.style.display = "block";
        formaFormula.innerText = `(n × l /2) × α`;
        textoForma.querySelector(`div`).innerText = descriForma[5];
    }

    document.getElementById(`quadrado`).onclick = function() {
        nomeForma.innerText = formaAtual[6];
        visivel();
        input2.style.display = "none";
        input3.style.display = "none";
        formaFormula.innerText = "l × l ou l²";
        textoForma.querySelector(`div`).innerText = descriForma[6];
    }

    document.getElementById(`cuboide`).onclick = function() {
        nomeForma.innerText = formaAtual[7];
        visivel();
        input2.style.display = "block";
        input3.style.display = "block";
        formaFormula.innerText = "(2 × b × h) + (2 × b × w) + (2 × h × w)";
        textoForma.querySelector(`div`).innerText = descriForma[7];
    }
//

// Calcular forma
    input.oninput = function() {
        calcForma();
    }
    input2.oninput = function() {
        calcForma();
    }
    input3.oninput = function() {
        calcForma();
    }

    function calcForma() {
        var valor = Number(input.value);
        var valor2 = Number(input2.value);
        var valor3 = Number(input3.value);
        var resultado = 0;

        if (valor) {
            switch(nomeForma.innerHTML) {
                case formaAtual[0]:
                    resultado = `≈` + (Math.PI * (valor ** 2)).toFixed(2);
                    break;
                case formaAtual[1]:
                    resultado = 6 * (valor ** 2);
                    break;
                case formaAtual[2]:
                    resultado = valor * valor2;
                    break;
                case formaAtual[3], formaAtual[7]:
                    resultado = (2 * valor * valor2) + (2 * valor * valor3) + (2 * valor2 * valor3);
                    break;
                case formaAtual[4]:
                    resultado = (valor + valor2) * valor3 /2;
                    break;
                case formaAtual[5]:
                    resultado = (valor * valor2 /2) * valor3 + `\nNessa forma há ${valor} triângulos`;
                    break;
                case formaAtual[6]:
                    resultado = valor ** 2
                    break;
                default:
                    break;
            };

            formaResult.innerText = resultado;
        } else {
            formaResult.innerText = 'O resultado aparece aqui';
        }
    }
//

// Abre e fecha bloco de informações
    var textoForma = document.querySelector(`.textoForma`);
    var maisInforma = document.querySelector(`.maisInforma`);

    maisInforma.onclick = function (){
        textoForma.classList.toggle(`comTexto`);

        if(textoForma.classList == "textoForma"){
            maisInforma.innerHTML = "<h2>Saiba mais da figura</h2>";
        } else {
            maisInforma.innerHTML = "<h2>Voltar ao cálculo</h2>";
        }
    }
//

// Informação em texto sobre as formas
var descriForma = [
    `O círculo é uma das formas geométricas mais básicas e comuns na matemática e no mundo ao nosso redor. É a forma perfeita, sem início nem fim, e é frequentemente associado à harmonia e à unidade.\n\nUm círculo é definido como o conjunto de todos os pontos em um plano que estão a uma distância constante, conhecida como raio, de um ponto fixo chamado centro. A linha que conecta todos esses pontos é chamada de circunferência.\n\nA circunferência de um círculo é a medida do contorno do círculo. A fórmula para calcular a circunferência é C=2πr, onde "r" é o raio do círculo e π (Pi) é uma constante cujo valor é aproximadamente 3.14159.\n\nO círculo também tem várias propriedades interessantes. Por exemplo, de todas as formas com uma dada circunferência, o círculo tem a maior área. Além disso, de todas as formas com uma determinada área, o círculo tem a menor circunferência.\n\nEm resumo, o círculo é uma forma geométrica fascinante e fundamental com uma riqueza de propriedades e aplicações em diversas áreas, desde a matemática pura até a física, a engenharia e além.`,

    `O cubo é uma das formas geométricas mais conhecidas e comuns, especialmente no campo da geometria tridimensional. É um exemplo de um poliedro regular, que é um sólido com todas as faces congruentes e todos os ângulos iguais.\n\nUm cubo é definido como um prisma de base quadrada ou, de forma equivalente, um hexaedro regular com seis faces quadradas iguais. Cada face é um quadrado perfeito e se encontra em ângulo reto com suas faces adjacentes.\n\nO cubo tem 12 arestas iguais, 8 vértices e 6 faces. Cada vértice é o ponto onde três arestas se encontram e cada face é delimitada por quatro arestas.\n\nO volume de um cubo, que é a quantidade de espaço tridimensional que o cubo ocupa, é dado pela fórmula V=a³. Isso ocorre porque o volume é a área da base (um quadrado) multiplicada pela altura (que é igual ao comprimento da aresta em um cubo).\n\nEm resumo, o cubo é uma forma geométrica tridimensional fundamental com uma riqueza de propriedades e aplicações em diversas áreas, desde a matemática pura até a física, a engenharia e além.`,

    `O retângulo é uma das formas geométricas mais comuns e amplamente reconhecidas. É um polígono de quatro lados, também conhecido como quadrilátero, com características específicas.\n\nUm retângulo é definido como um quadrilátero com todos os quatro ângulos internos iguais a 90 graus. Isso significa que cada par de lados opostos no retângulo é paralelo. Além disso, os lados opostos de um retângulo são sempre de comprimentos iguais.\n\nO retângulo tem quatro lados, quatro ângulos e quatro vértices. Os vértices são os pontos onde dois lados se encontram.\n\nO perímetro de um retângulo, que é a medida do contorno do retângulo, é dado pela fórmula P=2(l+w).\n\nEm resumo, o retângulo é uma forma geométrica bidimensional fundamental com uma riqueza de propriedades e aplicações em diversas áreas, desde a matemática pura até a física, a engenharia e além.`,

    `O romboedro é uma forma geométrica tridimensional que pertence à família dos poliedros. É um tipo especial de paralelepípedo e tem características únicas.\n\nUm romboedro é definido como um sólido de seis faces, onde todas as faces são rombos congruentes. Isso significa que todas as faces têm a mesma forma e tamanho. Além disso, os ângulos diédricos (os ângulos entre as faces) em um romboedro são iguais.\n\nO romboedro tem seis faces, doze arestas e oito vértices. Cada vértice é o ponto onde três arestas se encontram.\n\nO volume de um romboedro é dado pela fórmula V=a×b×c×cos(θ), onde "a", "b" e "c" são as arestas do romboedro e θ é o ângulo entre as arestas.\n\nEm resumo, o romboedro é uma forma geométrica tridimensional fascinante com uma riqueza de propriedades e aplicações em diversas áreas, desde a matemática pura até a física, a engenharia e além.`,

    `O trapezoide é uma forma geométrica bidimensional que pertence à família dos polígonos. É um tipo especial de quadrilátero que tem características únicas.\n\nUm trapezoide é definido como um quadrilátero com exatamente um par de lados paralelos. Esses lados são conhecidos como a base maior e a base menor do trapezoide. Os lados que não são paralelos são chamados de lados não paralelos ou lados oblíquos.\n\nO trapezoide tem quatro lados, quatro ângulos e quatro vértices. Cada vértice é o ponto onde dois lados se encontram.\n\nO perímetro de um trapezoide, que é a medida do contorno do trapezoide, é dado pela soma dos comprimentos de todos os seus lados.\n\nEm resumo, o trapezoide é uma forma geométrica bidimensional interessante com uma riqueza de propriedades e aplicações em diversas áreas, desde a matemática pura até a física, a engenharia e além.`,

    `Um polígono é uma das formas geométricas mais comuns e amplamente reconhecidas. É uma figura plana fechada com três ou mais lados, também conhecida como uma figura poligonal.\n\nUm polígono é definido como uma figura plana com um número finito de lados retos fechados. Isso significa que cada par de lados consecutivos no polígono se encontra em um ponto chamado vértice. Além disso, os lados de um polígono são segmentos de linha.\n\nO polígono tem um número variável de lados, ângulos e vértices, dependendo do número de lados. Os vértices são os pontos onde dois lados se encontram.\n\nO perímetro de um polígono, que é a medida do contorno do polígono, é dado pela soma dos comprimentos de seus lados.\n\nEm resumo, o polígono é uma forma geométrica bidimensional fundamental com uma riqueza de propriedades e aplicações em diversas áreas, desde a matemática pura até a física, a engenharia e além. É uma forma simples, mas poderosa, que é a base para muitas estruturas e objetos no mundo real.`,

    `O quadrado é uma das formas geométricas mais comuns e amplamente reconhecidas. É um polígono de quatro lados, também conhecido como quadrilátero, com características específicas.\n\nUm quadrado é definido como um quadrilátero com todos os quatro ângulos internos iguais a 90 graus. Isso significa que cada par de lados opostos no quadrado é paralelo. Além disso, todos os lados de um quadrado são sempre de comprimentos iguais.\n\nO quadrado tem quatro lados, quatro ângulos e quatro vértices. Os vértices são os pontos onde dois lados se encontram.\n\nO perímetro de um quadrado, que é a medida do contorno do quadrado, é dado pela fórmula P=4l.\n\nEm resumo, o quadrado é uma forma geométrica bidimensional fundamental com uma riqueza de propriedades e aplicações em diversas áreas, desde a matemática pura até a física, a engenharia e além.`,

    `Um cuboide é uma das formas geométricas tridimensionais mais comuns e amplamente reconhecidas. É um sólido com seis faces, também conhecido como paralelepípedo retângulo, com características específicas.\n\nUm cuboide é definido como um sólido com seis faces retangulares, onde todas as faces se encontram em ângulos retos. Isso significa que cada par de faces opostas no cuboide é idêntico e paralelo. Além disso, todas as arestas (onde duas faces se encontram) de um cuboide são retas.\n\nO cuboide tem seis faces, doze arestas e oito vértices. Os vértices são os pontos onde três arestas se encontram.\n\nO volume de um cuboide é dado pela fórmula V=lwh, onde "l" é o comprimento, "w" é a largura e "h" é a altura do cuboide. Isso ocorre porque o volume é a quantidade de espaço tridimensional que o cuboide ocupa, que é o produto do comprimento, largura e altura.\n\nEm resumo, o cuboide é uma forma geométrica tridimensional fundamental com uma riqueza de propriedades e aplicações em diversas áreas, desde a matemática pura até a física, a engenharia e além. É uma forma simples, mas poderosa, que é a base para muitas estruturas e objetos no mundo real.`
]

//