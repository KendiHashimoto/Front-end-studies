// Template ou identidade de uma classe que será construída no futuro

// A implementação dos métodos e atributos, só podera ser feita
// na classe que irá herdar essa abstração

class Parafuso {
  // -> Superclasse - Abstrata
  constructor() {
    if (this.constructor === Parafuso)
      throw new Error("Classe abstrata não pode ser instânciada")
  }
  get tipo() {
    throw new Error('Método "get tipo()" precisa ser implementado')
  }
}

class Fenda extends Parafuso {
  constructor() {
    super()
  }

  get tipo() {
    return "fenda"
  }
}

class Philips extends Parafuso {
  constructor() {
    super()
  }

  get tipo() {
    return "philips"
  }
}

class Allen extends Parafuso {}

// Criar e usar
new Parafuso() // -> 'Classe abstrada não pode ser instânciada'
let fenda = new Fenda()
let philips = new philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo) // -> 'Método "get tipo()" precisa ser implementado'

// Nesse exemplo, só existe parafuso se ele for de algum tipo específico
// como: Fenda, Philips ou Allen