const FIZZ = 'Fizz'
const BUZZ = 'Buzz'
const FIZZBUZZ = 'FizzBuzz'

function processaFizzBuzz(numero) {
  // Implementar aqui

  if (numero % 5 == 0 && numero % 3 == 0) {
    return FIZZBUZZ
  }else if(numero % 3 == 0) {
    return FIZZ
  } else if(numero % 5 == 0) {
    return BUZZ
  }

  return numero

}

module.exports = processaFizzBuzz