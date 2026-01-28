import { welcome } from './cli.js'
import readlineSync from 'readline-sync'

export const MAX_ATTEMPTS = 3
const name = welcome()

export function intro(rules) {
  console.log(rules)
}

export function app(questions, correctAnswers) {
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    console.log(`Question: ${questions[i]}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer === correctAnswers[i]) {
      console.log('Correct!')
      if(i === MAX_ATTEMPTS - 1) {
        console.log(`Congratulations, ${name}!`)
      }
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswers[i]}.`)
      console.log(`Let's try again, ${name}!`)
      break
    }
  }
}
