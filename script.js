function flip(card) {
  card.classList.toggle('flipped')
}

// 雪花
const snowContainer = document.getElementById('snow-container')
const snowflakeCount = 40

for (let i = 0; i < snowflakeCount; i++) {
  const snowflake = document.createElement('div')
  snowflake.className = 'snowflake'
  snowflake.textContent = '❄'

  const size = Math.random() * 10 + 10
  const startX = Math.random() * window.innerWidth
  const fallDuration = Math.random() * 10 + 10
  const swayDuration = Math.random() * 4 + 3

  snowflake.style.left = `${startX}px`
  snowflake.style.fontSize = `${size}px`
  snowflake.style.opacity = (Math.random() * 0.7 + 0.3).toFixed(2)
  snowflake.style.animationDuration = `${fallDuration}s, ${swayDuration}s`
  snowflake.style.animationDelay = `${Math.random() * 10}s`

  snowContainer.appendChild(snowflake)
}
const modal = document.getElementById('letterModal')
const closeBtn = document.getElementById('letterClose')
const quillLeft = document.getElementById('quillLeft')
const quillRight = document.getElementById('quillRight')

const letterTextEl = document.getElementById('letterText')
const cursorEl = document.getElementById('letterCursor')

let timer = null

const letterA =
  'Dear you,\n\nMerry Christmas 🎄\nThanks for being part of this year.\n\nLove,\nMe'
const letterB =
  'Hi!\n\nClicking this quill opens another letter.\nWishing you warm days and soft snow ❄️'

function openLetter(content) {
  // reset
  if (timer) clearInterval(timer)
  letterTextEl.textContent = ''
  modal.classList.add('open')
  modal.setAttribute('aria-hidden', 'false')

  // typewriter
  let i = 0
  timer = setInterval(() => {
    if (i >= content.length) {
      clearInterval(timer)
      timer = null
      return
    }
    letterTextEl.textContent += content[i++]
  }, 40)
}

function closeLetter() {
  if (timer) clearInterval(timer)
  timer = null
  modal.classList.remove('open')
  modal.setAttribute('aria-hidden', 'true')
}

quillLeft.addEventListener('click', () => openLetter(letterA))
quillRight.addEventListener('click', () => openLetter(letterB))

closeBtn.addEventListener('click', closeLetter)
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeLetter() // 點黑底關閉
})

// Esc 關閉
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeLetter()
})
