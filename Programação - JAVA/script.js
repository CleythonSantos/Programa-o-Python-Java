function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura) {
    resultado.textContent = "Por favor, preencha os campos corretamente.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 24.9) classificacao = "Peso ideal";
  else if (imc < 29.9) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}

function calcularTDEE() {
  const idade = parseInt(document.getElementById("idade").value);
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("pesoTdee").value);
  const altura = parseFloat(document.getElementById("alturaTdee").value);
  const atividade = parseFloat(document.getElementById("atividade").value);
  const resultadoTdee = document.getElementById("resultadoTdee");

  if (!idade || !sexo || !peso || !altura || !atividade) {
    resultadoTdee.textContent = "Preencha todos os campos corretamente.";
    return;
  }

  // Fórmula de Harris-Benedict
  let bmr;
  if (sexo === "masculino") {
    bmr = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
  } else {
    bmr = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
  }

  const tdee = bmr * atividade;

  // Macronutrientes base: Proteína 2g/kg, Gordura 1g/kg, restante em carboidrato
  const proteina = peso * 2;
  const gordura = peso * 1;
  const caloriasProteina = proteina * 4;
  const caloriasGordura = gordura * 9;
  const caloriasCarbo = tdee - caloriasProteina - caloriasGordura;
  const carboidrato = caloriasCarbo / 4;

  resultadoTdee.innerHTML = `
    <strong>Gasto Calórico Total:</strong> ${tdee.toFixed(0)} kcal<br/>
    <strong>Macronutrientes sugeridos:</strong><br/>
    Proteínas: ${proteina.toFixed(0)}g | Gorduras: ${gordura.toFixed(0)}g | Carboidratos: ${carboidrato.toFixed(0)}g
  `;
}
