// O primeiro a entrar na fila é o primeiro a sair

class Queue {
  constructor() {
    this.data = []
  }

  // enqueue -> Adicionar um elemento ao final da fila
  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila!`)
  } 

  

  // dequeue -> remover o primeiro elemento a entrar na fila
  // shift -> aplicado ao array para retirar o primeiro a entrar na fila
  dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila!`)
  }
}

const fila = new Queue()

fila.enqueue("Mariana")
fila.enqueue("Joao")
fila.enqueue("Josepe")
fila.dequeue()
fila.dequeue()
fila.dequeue()