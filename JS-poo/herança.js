// Objetos podem herdar, ou estender, características bases 
// Uma cópia de atributos e métodos de uma outra classe

class Veiculo {
  rodas = 4

  mover(direcao){}
  virar(direcao){}
}

class Moto extends Veiculo {
  constructor() {
    super() // -> Puxar atributos e métodos do pai
    this.rodas = 2
  }
}