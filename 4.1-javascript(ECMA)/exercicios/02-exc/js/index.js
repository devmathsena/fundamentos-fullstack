/**
 * Neste exercício o intuito é modularizar o exercício anterior utilizando ES Modules.
 */

import caculate from "./calculate.js"
import copyToClipBoard from "./copyToClipBoard.js"
import themeSwitcher from "./themeSwitcher.js"
import { handleButtonPress, handlerClearButton, handleTyping } from "./keyHandlers.js"

document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
  charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handlerClearButton)

document.getElementById('input').addEventListener('keydown', handleTyping)

document.getElementById('equal').addEventListener('click', caculate)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher);
