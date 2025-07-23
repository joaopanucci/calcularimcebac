function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (!peso || !altura || altura === 0) {
    alert('Por favor, preencha peso e altura corretamente!');
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3 (mórbida)";
  }

  document.getElementById('resultadoIMC').textContent = `Seu IMC: ${imc.toFixed(2)}`;
  document.getElementById('classificacaoIMC').textContent = `Classificação: ${classificacao}`;
}
