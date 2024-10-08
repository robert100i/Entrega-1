// Função para capturar as entradas do usuário
function capturarEntradas() {
  const distancia = parseFloat(prompt("Digite a distância total da viagem (em km):"));
  const consumo = parseFloat(prompt("Digite o consumo médio do veículo (km por litro):"));
  const precoCombustivel = parseFloat(prompt("Digite o preço do combustível (por litro):"));

  return (isNaN(distancia) || isNaN(consumo) || isNaN(precoCombustivel)) 
    ? (alert("Por favor, insira valores numéricos válidos."), null)
    : { distancia, consumo, precoCombustivel };
}

// Função para calcular o gasto total de combustível
function calcularGastoTotal({ distancia, consumo, precoCombustivel }) {
  const litrosNecessarios = distancia / consumo;
  return litrosNecessarios * precoCombustivel;
}

// Função principal para executar o simulador
function simuladorViagem() {
  const entradas = capturarEntradas();

  entradas && (() => {
    const gastoTotal = calcularGastoTotal(entradas);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <p>Distância da viagem: ${entradas.distancia} km</p>
      <p>Consumo do veículo: ${entradas.consumo} km/l</p>
      <p>Preço do combustível: R$ ${entradas.precoCombustivel} por litro</p>
      <p><strong>Gasto total com combustível: R$ ${gastoTotal.toFixed(2)}</strong></p>
    `;
  })();
}

// Adicionando evento ao botão
document.getElementById('iniciarSimulador').addEventListener('click', simuladorViagem);
