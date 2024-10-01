// Função para capturar as entradas do usuário
function capturarEntradas() {
  const distancia = parseFloat(prompt("Digite a distância total da viagem (em km):"));
  const consumo = parseFloat(prompt("Digite o consumo médio do veículo (km por litro):"));
  const precoCombustivel = parseFloat(prompt("Digite o preço do combustível (por litro):"));

  // Verificar se as entradas são válidas usando operador OR e ternário
  return (isNaN(distancia) || isNaN(consumo) || isNaN(precoCombustivel)) 
    ? (alert("Por favor, insira valores numéricos válidos."), null)
    : { distancia, consumo, precoCombustivel }; // Usando desestruturação direta para retornar o objeto
}

// Função para calcular o gasto total de combustível
function calcularGastoTotal({ distancia, consumo, precoCombustivel }) {
  const litrosNecessarios = distancia / consumo;
  return litrosNecessarios * precoCombustivel;
}

// Função principal para executar o simulador
function simuladorViagem() {
  // Capturar as entradas do usuário
  const entradas = capturarEntradas();

  // Se as entradas forem válidas, realizar o cálculo
  entradas && (() => { // Usando operador AND para validar e continuar a execução
    const gastoTotal = calcularGastoTotal(entradas);
    
    // Exibir o resultado com desestruturação e spread no console.log
    console.log(...[
      `Distância da viagem: ${entradas.distancia} km`,
      `Consumo do veículo: ${entradas.consumo} km/l`,
      `Preço do combustível: R$ ${entradas.precoCombustivel} por litro`,
      `Gasto total com combustível: R$ ${gastoTotal.toFixed(2)}`
    ]);
    
    alert(`O gasto total com combustível será de R$ ${gastoTotal.toFixed(2)}`);
  })();
}

simuladorViagem();
    