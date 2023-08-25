class Calculadora {
  
  #testnumber(num1, num2) {
    if(typeof num1 != "number" || typeof num2 != "number") {
      throw Error('Precisamos de números, não outros tipos.')
    }
  }
  soma(num1, num2) {
    this.#testnumber(num1, num2)
    return num1 + num2
  }

  subtracao(num1, num2) {
    this.#testnumber(num1, num2)
    return num1 - num2
  }

  multipicacao(num1, num2) {
    subtracao(num1, num2) {
      this.#testnumber(num1, num2)
      return num1 * num2
    }
  }

} 



module.exports = Calculadora