var imcResultado = document.querySelector("#imc-resultado");
var classificadorResultado = document.querySelector("#classificador-resultado");
var altura = document.querySelector("#input-altura");
var peso = document.querySelector("#input-peso");

window.onload = function () {
  restartGif();

  formatarCampoAltura();

  formatarCampoPeso();
}

function mostrarResultado() {
  const imc = calcularImc();

  if (altura.value === '' || peso.value === '') {
    imcResultado.innerHTML = 'Por favor, digite um valor válido.';
  } else if (imc < 18.5) {
    imcResultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.`;
    classificadorResultado.innerHTML = 'Você está com MAGREZA.';
  } else if (imc > 18.5 && 24.9 >= imc) {
    imcResultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.`;
    classificadorResultado.innerHTML = 'Você está com o peso NORMAL.';
  } else if (25 < imc && 29.9 >= imc) {
    imcResultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.`;
    classificadorResultado.innerHTML = 'Você está com SOBREPESO.';
  } else {
    imcResultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.`;
    classificadorResultado.innerHTML = 'Você está com OBESIDADE.';
  }
}

function calcularImc() {
  return peso.value / (altura.value * altura.value);
}

function restartGif() {
  var gif = document.getElementById('gym')

  setInterval(function () {
    gif.src = gif.src.replace(/\?.*/,
      function () {
        return '?' + new Date()
      })
  }, 7300)
}

function formatarCampoAltura() {
  var altura = document.getElementById("input-altura");

  var flag = false;

  altura.addEventListener("input", function (event) {
    pattern = /^\d+[.]?\d{0,2}$/;
    if (pattern.test(this.value)) {
      flag = true;
      l = this.value;
      if (flag && this.value.length > 1) return this.value;
      else flag = false;
    } else if (!pattern.test(this.value) && flag == true) {
      return (this.value = l);
    } else if (!pattern.test(this.value) && flag == false) {
      return (this.value = "");
    }
  });
}

function formatarCampoPeso() {
  var peso = document.getElementById("input-peso");

  var flag = false;

  peso.addEventListener("input", function (event) {
    pattern = /^\d+[.]?\d{0,2}$/;
    if (pattern.test(this.value)) {
      flag = true;
      l = this.value;
      if (flag && this.value.length > 1) return this.value;
      else flag = false;
    } else if (!pattern.test(this.value) && flag == true) {
      return (this.value = l);
    } else if (!pattern.test(this.value) && flag == false) {
      return (this.value = "");
    }
  });
}

function limparCampos() {
  altura.value = "";
  peso.value = "";
  imcResultado.innerHTML = "";
  classificadorResultado.innerHTML = "";
}