import * as index from '../src/index.js'

index.intro('Answer "yes" if given number is prime. Otherwise answer "no".')

const isPrime = (num) => {
  if (num < 3) return 'yes'
  if (num % 2 === 0) return 'no'
  for (let i = 3; i < Math.sqrt(num); i++) {
    if (num % i === 0) return 'no'
  }
  return 'yes'
}

let questions = [], correctAnswers = []
for (let i = 0; i < index.MAX_ATTEMPTS; i++) {
  questions[i] = Math.floor(Math.random() * 1000 + 1)
  correctAnswers[i] = isPrime(questions[i])
}

index.app(questions, correctAnswers)
