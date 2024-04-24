var elements = {
    formas: document.querySelectorAll('.formaBox'),
    nomeForma: document.querySelector('.NomeDaForma'),
    numero: [document.getElementById('numero'), document.getElementById('numero2'), document.getElementById('numero3')],
    formaFormula: document.getElementById('formaFormula'),
    formaResult: document.getElementById('formaResult'),
    textoForma: document.querySelector('.textoForma'),
    maisInforma: document.querySelector('.maisInforma'),
    article: document.querySelector('article'),
    backForma: document.getElementById('backForma')
};

// Display
function toggleDisplay(visível) {
    elements.article.style.display = visível ? "flex" : "none";
    elements.backForma.style.display = visível ? "flex" : "none";
    document.querySelector('body').style.overflow = visível ? "hidden" : "scroll";

    if (visível) {
        elements.numero.forEach(num => num.value = "");
        elements.formaResult.innerText = "O resultado aparece aqui";
        elements.maisInforma.innerHTML = "<h2>Saiba mais da figura</h2>";
        elements.textoForma.classList = "textoForma";
    }
}

// Fechar aba de cálculo
document.getElementById('closeForma').onclick = () => toggleDisplay(false);

window.onkeydown = (clique) => {
    if (clique.keyCode == 27 && elements.article.style.display == "flex") {
        toggleDisplay(false);
    }
}

window.onclick = (clique) => {
    if (clique.target == elements.backForma) {
        toggleDisplay(false);
    }
}

// Abrir aba de cálculo
elements.formas.forEach((aoClicar) =>
    aoClicar.onclick = () => abreForma(aoClicar.id)
);

function abreForma(idForma) {
    var objetos = formaGeral.find((item) => item.nome == idForma);
    
    elements.nomeForma.innerText = objetos.nome;
    toggleDisplay(true);
    elements.numero[1].style.display = objetos.nume == 1 || objetos.nume == 2 ? 'block' : 'none';
    elements.numero[2].style.display = objetos.nume == 2 ? 'block' : 'none';
    elements.formaFormula.innerText = objetos.formula;
    elements.textoForma.querySelector('div').innerText = objetos.texto;
    document.querySelectorAll('input').forEach((e) =>
        e.oninput = calcForma()
    );
}

function calcForma() {
    var valores = elements.numero.map(num => Number(num.value));
    var puxada = formaGeral.find((objeto) => objeto.nome == elements.nomeForma.innerText);
    var resultado = puxada.area(valores);

    if (valores[0] > 0 && puxada.nume == 0) {
        elements.formaResult.innerText = resultado;
    } else if (valores[0] > 0 && valores[1] > 0 && puxada.nume == 1) {
        elements.formaResult.innerText = resultado;
    } else if (valores[0] > 0 && valores[1] > 0 && valores[2] > 0 && puxada.nume == 2) {
        elements.formaResult.innerText = resultado;
    } else {
        elements.formaResult.innerText = 'O resultado aparece aqui';
    }
}

// Abre e fecha bloco de informações
maisInforma.onclick = function (){
    textoForma.classList.toggle(`comTexto`);
    maisInforma.innerHTML = textoForma.classList == "textoForma" ? "<h2>Saiba mais da figura</h2>" : "<h2>Voltar ao cálculo</h2>"
}

// Arrays
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

var formaGeral = [
    {
        nome: 'circulo',
        nume: 0,
        formula: "π × r²",
        texto: descriForma[0],
        area: function(valor) { return `≈` + ((Math.PI * (valor ** 2))).toFixed(2)}
    },
    {
        nome: 'cubo',
        nume: 0,
        formula: "6 × l²",
        texto: descriForma[1],
        area: function(valor) { return 6 * (valor ** 2)}
    },
    {
        nome: 'retangulo',
        nume: 1,
        formula: "b × h",
        texto: descriForma[2],
        area: function(valor, valor2) { return valor * valor2}
    },
    {
        nome: 'romboedro',
        nume: 2,
        formula: "(2 × b × h) + (2 × b × w) + (2 × h × w)",
        texto: descriForma[3],
        area: function(valor, valor2, valor3) { return (2 * valor * valor2) + (2 * valor * valor3) + (2 * valor2 * valor3)}
    },
    {
        nome: 'trapezoide',
        nume: 2,
        formula: "(B + b) × h /2",
        texto: descriForma[4],
        area: function(valor, valor2, valor3) { return (valor + valor2) * valor3 /2}
    },
    {
        nome: 'poligono',
        nume: 2,
        formula: "(n × l /2) × α",
        texto: descriForma[5],
        area: function(valor, valor2, valor3) { return (valor * valor2 /2) * valor3}
    },
    {
        nome: 'quadrado',
        nume: 0,
        formula: "l × l ou l²",
        texto: descriForma[6],
        area: function(valor) { return valor ** 2}
    },
    {
        nome: 'cuboide',
        nume: 2,
        formula: "(2 × b × h) + (2 × b × w) + (2 × h × w)",
        texto: descriForma[7],
        area: function(valor, valor2, valor3) { return (2 * valor * valor2) + (2 * valor * valor3) + (2 * valor2 * valor3)}
    }
]
//