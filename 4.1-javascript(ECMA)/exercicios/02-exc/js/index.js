import caculate from "./calculate.js"

const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach( function(charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click', function () {
  input.value = ''
  input.focus()
})

input.addEventListener('keydown', function (ev) {
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if(ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if(ev.key === 'Enter') {
    caculate()
  }
})

document.getElementById('equal').addEventListener('click', caculate)

document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
  const button = ev.currentTarget;
  if (button.innerText === 'COPY') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})

document.getElementById('themeSwitcher').addEventListener('click', function () {
  const root = document.documentElement;
  const main = document.querySelector('main');

  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#e0f7fa');
    root.style.setProperty('--border-color', '#00c0ce');
    root.style.setProperty('--font-color', '#00afa4');
    root.style.setProperty('--primary-color', '#00afa4');
    root.style.setProperty('--glow', '0 0 2px var(--primary-color), 0 0 5px var(--primary-color)');
    main.dataset.theme = 'light';
  } else {
    root.style.setProperty('--bg-color', '#0a0f1e');
    root.style.setProperty('--border-color', '#00eaff');
    root.style.setProperty('--font-color', '#00eaff');
    root.style.setProperty('--primary-color', '#00fff2');
    root.style.setProperty('--glow', '0 0 2px var(--primary-color), 0 0 5px var(--primary-color)');
    main.dataset.theme = 'dark';
  }
});
