/**
 * Neste exercício o intuito é utilizar NPM e importar uma biblioteca externa pela primeira vez.
 */

const dayjs = require("dayjs")

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()
  const ageInYears = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInYears + 1, 'year')
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("1998-03-21")
