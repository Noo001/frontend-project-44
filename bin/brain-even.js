import * as index from '../src/index.js'

index.intro('Answer "yes" if the number is even, otherwise answer "no".')

let questions = [], correctAnswers = []
for (let i = 0; i < index.MAX_ATTEMPTS; i++) {
  questions[i] = Math.floor(Math.random() * 100)
  correctAnswers[i] = questions[i] % 2 === 0 ? 'yes' : 'no'
}

index.app(questions, correctAnswers)
