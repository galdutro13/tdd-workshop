const processaFizzBuzz = require('./fizzBuzz')

describe('FizzBuzz', () => {
  it('Deve receber um número inteiro e retornar o mesmo número', () => {
    //seu código aqui
    expect(processaFizzBuzz(2)).toBe(2)
  }) 

  it('Deve receber um número inteiro múltiplo de 3 e retornar a string Fizz', () => {
    //seu código aqui
    expect(processaFizzBuzz(3)).toBe('Fizz')
  })

  it('Deve receber um número inteiro múltiplo de 5 e retornar a string Buzz', () => {
    //seu código aqui
    expect(processaFizzBuzz(5)).toBe('Buzz')
  })

  it('Deve receber um número inteiro múltiplo de 3 e 5 e retornar a string FizzBuzz', () => {
    //seu código aqui
    expect(processaFizzBuzz(30)).toBe('FizzBuzz')
  })
})