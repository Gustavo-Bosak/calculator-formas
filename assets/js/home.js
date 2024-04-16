// Global var
    var formaAtual = [`Círculo`,`Cubo`,`Retangulo`,`Romboedro`,`Trapezoide`,`Poligono`,`Quadrado`,`Cuboide`];
    var nomeForma = document.querySelector('.NomeDaForma');

    var numero = document.getElementById(`numero`);
    var numero2 = document.getElementById(`numero2`);
    var numero3 = document.getElementById(`numero3`);
    var formaFormula = document.getElementById(`formaFormula`);
    var formaResult = document.getElementById(`formaResult`);
//

// Display
    function visivel() {
        document.querySelector(`article`).style.display = "flex";
        document.getElementById(`backForma`).style.display = "flex"
        document.querySelector(`body`).style.overflow = "hidden";
    }

    function invisible() {
        document.querySelector(`article`).style.display = "none";
        document.getElementById(`backForma`).style.display = "none"
        document.querySelector(`body`).style.overflow = "scroll";
        numero.value = "";
        numero2.value = "";
        numero3.value = "";
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
        numero2.style.display = "none";
        numero3.style.display = "none";
        formaFormula.innerText = "π × r²";
    }

    document.getElementById(`cubo`).onclick = function() {
        nomeForma.innerText = formaAtual[1];
        visivel();
        numero2.style.display = "none";
        numero3.style.display = "none";
        formaFormula.innerText = "6 × l²";
    }

    document.getElementById(`retangulo`).onclick = function() {
        nomeForma.innerText = formaAtual[2];
        visivel();
        numero2.style.display = "block";
        numero3.style.display = "none";
        formaFormula.innerText = "b × h";
    }

    document.getElementById(`romboedro`).onclick = function() {
        nomeForma.innerText = formaAtual[3];
        visivel();
        numero2.style.display = "block";
        numero3.style.display = "block";
        formaFormula.innerText = "(2 × b × h) + (2 × b × d) + (2 × h × d)";
    }

    document.getElementById(`trapezoide`).onclick = function() {
        nomeForma.innerText = formaAtual[4];
        visivel();
        numero2.style.display = "block";
        numero3.style.display = "block";
        formaFormula.innerText = "(B + b)/2 × h";
    }

    document.getElementById(`poligono`).onclick = function() {
        nomeForma.innerText = formaAtual[5];
        visivel();
        numero2.style.display = "block";
        numero3.style.display = "block";
        formaFormula.innerText = `(n × l /2) × α`;
    }

    document.getElementById(`quadrado`).onclick = function() {
        nomeForma.innerText = formaAtual[6];
        visivel();
        numero2.style.display = "none";
        numero3.style.display = "none";
        formaFormula.innerText = "l × l ou l²";
    }

    document.getElementById(`cuboide`).onclick = function() {
        nomeForma.innerText = formaAtual[7];
        visivel();
        numero2.style.display = "block";
        numero3.style.display = "block";
        formaFormula.innerText = "(2 × a × b) + (2 × a × c) + (2 × b × c)";
    }
//

// Calcular forma
    document.getElementById(`numero`).oninput = function() {
        calcForma();
    }
    document.getElementById(`numero2`).oninput = function() {
        calcForma();
    }
    document.getElementById(`numero3`).oninput = function() {
        calcForma();
    }

    function calcForma() {
        var valor = Number(numero.value);
        var valor2 = Number(numero2.value);
        var valor3 = Number(numero3.value);
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
                    resultado = (valor + valor2)/2 * valor3;
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

            formaResult.innerText = resultado
        } else if (valor == ``) {
            formaResult.innerText = 'O resultado aparece aqui';
        } else {
            formaResult.innerText = 'Informe apenas números acima de 0';
        }
    }
//