// Pelo menos 1 argumento
// Retornar algo
// Nada que acontece lá dentro afeta o mundo externo
  // Dados imutáveis 
  // Não guardar estado
  
// recursirve
// Find the factorial of a number 
const factorial = x => {

  // if number is 0
  if ( x=== 0 ) {
    return 1
  }
  
  return x * factorial(x - 1)
}