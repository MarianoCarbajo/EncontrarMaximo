let valor: number;

valor = Number(prompt("Ingrese un valor"));
let maximo: number = valor;

while (valor != 0) {
  if (valor > maximo) {
    maximo = valor;
  }
  valor = Number(prompt("Ingrese otro valor"));
}
console.log("El máximo es: " + maximo);
