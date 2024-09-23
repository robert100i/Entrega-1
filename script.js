// Função para capturar as entradas do usuário
function capturarEntradas() {
    const distancia = parseFloat(prompt("Digite a distância total da viagem (em km):"));
    const consumo = parseFloat(prompt("Digite o consumo médio do veículo (km por litro):"));
    const precoCombustivel = parseFloat(prompt("Digite o preço do combustível (por litro):"));
  
    // Verificar se as entradas são válidas
    if (isNaN(distancia) || isNaN(consumo) || isNaN(precoCombustivel)) {
      alert("Por favor, insira valores numéricos válidos.");
      return null; // Encerrar a execução caso algum valor seja inválido
    }
  
    // Retorna as entradas capturadas como um objeto
    return {
      distancia: distancia,
      consumo: consumo,
      precoCombustivel: precoCombustivel
    };
  }
  
  // Função para calcular o gasto total de combustível
  function calcularGastoTotal(entradas) {
    const litrosNecessarios = entradas.distancia / entradas.consumo;
    const gastoTotal = litrosNecessarios * entradas.precoCombustivel;
    
    return gastoTotal;
  }
  
  // Função principal para executar o simulador
  function simuladorViagem() {
    // Capturar as entradas do usuário
    const entradas = capturarEntradas();
  
    // Se as entradas forem válidas, realizar o cálculo
    if (entradas !== null) {
      const gastoTotal = calcularGastoTotal(entradas);
      
      // Exibir o resultado
      console.log("Distância da viagem: " + entradas.distancia + " km");
      console.log("Consumo do veículo: " + entradas.consumo + " km/l");
      console.log("Preço do combustível: R$ " + entradas.precoCombustivel + " por litro");
      console.log("Gasto total com combustível: R$ " + gastoTotal.toFixed(2));
      
      alert("O gasto total com combustível será de R$ " + gastoTotal.toFixed(2));
    }
  }
  
  simuladorViagem();
  