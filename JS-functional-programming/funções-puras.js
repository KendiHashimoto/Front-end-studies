// Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
// Não deverá sofrer nenhuma interferência do mundo externo a ela
// Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
// Não terá nenhum efeito colateral no seu código 
  // Não irá modificar nenhum dado 
  // Não irá guardar nenhum estado

const calculateCircumference = (pi, radius) => {
  return pi * (radius + radius)
}

// Exemplo 2 
const changePersonName = (person, name) => {
  ({...person, name})
}