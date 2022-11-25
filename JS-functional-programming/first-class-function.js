// Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
// A função poderá ser entendida como uma variável

const sayMyName = () => console.log("Mayk")
const runFunction = (fn) => fn()

runFunction(sayMyName)

// Função sendo passada como argumento de outra função.
runFunction(() => console.log("discover"))

console.log(runFunction(Math.random))
