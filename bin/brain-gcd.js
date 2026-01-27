import * as index from '../src/index.js'

index.intro('Find the greatest common divisor of given numbers.')

const gcd = (num1, num2) => {
  let a = num1 > num2 ? num1 : num2
  let b = num1 > num2 ? num2 : num1
  while (b !== 0) {
    const ect = a % b
    a = b
    b = ect
  }
  return a.toString()
}

let questions = [], correctAnswers = []
for (let i = 0; i < index.MAX_ATTEMPTS; i++) {
  const num1 = Math.floor(Math.random() * 100) + 1, num2 = Math.floor(Math.random() * 100) + 1
  questions[i] = `${num1} ${num2}`
  correctAnswers[i] = gcd(num1, num2)
  console.log(questions[i], correctAnswers[i])
}

index.app(questions, correctAnswers)
