export default function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === 'COPY') {
      button.innerText = 'Copied!'
      button.classList.add('success')
      navigator.clipboard.writeText(document.getElementById('result').value)
    } else {
      button.innerText = 'Copy'
      button.classList.remove('success')
    }
  }