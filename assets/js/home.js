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
        textoForma.classList = "textoForma";
    }

    function invisible() {
        document.querySelector(`article`).style.display = "none";
        document.getElementById(`backForma`).style.display = "none"
        document.querySelector(`body`).style.overflow = "scroll";
        document.getElementById(`textoForma`).style.display = "none";
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
    }

    document.getElementById(`cubo`).onclick = function() {
        nomeForma.innerText = formaAtual[1];
        visivel();
        input2.style.display = "none";
        input3.style.display = "none";
        formaFormula.innerText = "6 × l²";
    }

    document.getElementById(`retangulo`).onclick = function() {
        nomeForma.innerText = formaAtual[2];
        visivel();
        input2.style.display = "block";
        input3.style.display = "none";
        formaFormula.innerText = "b × h";
    }

    document.getElementById(`romboedro`).onclick = function() {
        nomeForma.innerText = formaAtual[3];
        visivel();
        input2.style.display = "block";
        input3.style.display = "block";
        formaFormula.innerText = "(2 × b × h) + (2 × b × d) + (2 × h × d)";
    }

    document.getElementById(`trapezoide`).onclick = function() {
        nomeForma.innerText = formaAtual[4];
        visivel();
        input2.style.display = "block";
        input3.style.display = "block";
        formaFormula.innerText = "(B + b) × h /2";
    }

    document.getElementById(`poligono`).onclick = function() {
        nomeForma.innerText = formaAtual[5];
        visivel();
        input2.style.display = "block";
        input3.style.display = "block";
        formaFormula.innerText = `(n × l /2) × α`;
    }

    document.getElementById(`quadrado`).onclick = function() {
        nomeForma.innerText = formaAtual[6];
        visivel();
        input2.style.display = "none";
        input3.style.display = "none";
        formaFormula.innerText = "l × l ou l²";
    }

    document.getElementById(`cuboide`).onclick = function() {
        nomeForma.innerText = formaAtual[7];
        visivel();
        input2.style.display = "block";
        input3.style.display = "block";
        formaFormula.innerText = "(2 × b × h) + (2 × b × d) + (2 × h × d)";
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

        if (valor > 0) {
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