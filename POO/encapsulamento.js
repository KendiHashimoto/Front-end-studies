// Colocar numa cápsula
// Agrupamento de funções e variáveis
// Esconder detalhes de implementação
// Camada de segurança para os atributos e métodos

class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  // # -> Significa que #calculateArea não será visível fora da classe
  get area() {
    return this.#calculateArea()
  }

  #calculateArea() {
    return this.height * this.width
  }
}

let polygon = new Polygon(50, 60)
console.log(polygon)