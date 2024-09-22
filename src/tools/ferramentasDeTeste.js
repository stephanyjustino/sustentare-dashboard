function gerarNumerosAleatorios(quantidade, minimo, maximo) {
  const numeros = [];
  for (let i = 0; i < quantidade; i++) {
    const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    numeros.push(numeroAleatorio);
  }
  return numeros;
}

export {gerarNumerosAleatorios}