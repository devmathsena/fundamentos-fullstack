export default function caculate() {
    const resultInput = document.getElementById('result')
    resultInput.value = "ERROR"
    resultInput.classList.add('error')
    if(input.value) {
      const result = eval(input.value)
      resultInput.value = result
      resultInput.classList.remove('error')
    }
  }