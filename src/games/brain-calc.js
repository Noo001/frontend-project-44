import * as index from '../index.js'

export function calc() {
  index.intro('What is the result of the expression?')

  const operator = () => {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return '+'
      case 1:
        return '-'
      case 2:
        return '*'
    }
  }

  let questions = [], correctAnswers = []
  for (let i = 0; i < index.MAX_ATTEMPTS; i++) {
    questions[i] = `${Math.floor(Math.random() * 100)} ${operator()} ${Math.floor(Math.random() * 100)}`
    correctAnswers[i] = eval(questions[i]).toString()
  }

  index.app(questions, correctAnswers)
}
