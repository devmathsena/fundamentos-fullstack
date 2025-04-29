const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

function nextBirthday(birthdate) {
    const birthdateFormated = dayjs(birthdate, 'DD/MM/YYYY')
    const day = birthdateFormated.get('date')
    const month = birthdateFormated.get('month')
    const nextYear = dayjs().add(1, 'year').get('year')
    const currentDate = dayjs()

    const nextBirthday = `${day}/${month+1}/${nextYear}`
    const nextBirthdayzz = dayjs(nextBirthday, 'DD/M/YYYY')
    const difference = currentDate.diff(nextBirthdayzz, 'day')
    
    console.log(`Sua próxima data de aniversário: ${nextBirthday}`);
    console.log(`Falta ${difference} para seu aniversário.`);
}

nextBirthday("21/03/1998")