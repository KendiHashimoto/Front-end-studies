// Funções que recebem funções como argumentos
// Funções que poderão retornar outras funções.

const numbers = [2, 4, 8, 16]

const square = (n) => n * n

const squaredNumber = numbers.map(square)

// Exemplo de retorno de função currying ou aplicação parcial de função
const pause = (wait) => (fn) => setTimeout(fn, wait)

pause(600)(() => console.log("waiting 600ms"))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait(200)(() => console.log("waiting 200ms"))
wait(() => console.log("waiting 1s"))