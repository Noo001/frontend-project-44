import * as index from '../src/index.js'

index.intro('What number is missing in the progression?')

const progr = () => {
  const length = Math.floor(Math.random() * 20) + 5
  const missingIndex = Math.floor(Math.random() * length)
  let value = Math.floor(Math.random() * 100)
  const step = Math.floor(Math.random() * 20)
  let progression = []
  for (let i = 0; i < length; i++) {
    progression.push(`${value}`)
    value += step
  }
  const correct = progression[missingIndex]
  progression[missingIndex] = '..'
  return { question: progression.join(' '), correct }
}

let questions = [], correctAnswers = []
for (let i = 0; i < index.MAX_ATTEMPTS; i++) {
  const { question, correct } = progr()
  questions[i] = question
  correctAnswers[i] = correct
}

index.app(questions, correctAnswers)
