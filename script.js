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
const letterATopic = 'A Letter from Jessie'
const letterBTopic = 'A Letter from Kai'
const letterA =
  'Thanks for being a part of my life. I’m really grateful to know you and to have shared so many fun moments together.I hope everything is going well for you, that many wonderful things keep happening in your life.In the future, I hope we’ll have the chance to explore the world together and experience many beautiful moments 😸😸😸. Maybe u can teach me how to play guitar or ride a horse😎Since today is Christmas , take good care of yourself and stay healthy.If you ever come to Taiwan, don’t forget to let me know~~'

const letterB =
  'I’m really happy that I got to know you. I wish you all the best in everything, whether it’s finding an internship, relationships, or traveling. I hope you stay healthy and happy. Since today is Christmas, hope you have a wonderful time with your friends, and I really hope that when we have the chance to visit France in the future, we better meet up and you’re definitely our tour guide 🤣, and don’t forget to take us horse riding at your mom’s stable too! Also, keep the Pingu we gave you hanging on your bag during your travels it’ll be our little companion with you~~, if you ever come back to Taiwan, don’t forget about us. We should definitely travel together in Taiwan again, and eat even more local food and street snacks next time!'
function openLetter(title, content) {
  if (timer) clearInterval(timer)

  letterTitle.textContent = title // ✅ 新增：設定標題
  letterText.textContent = ''

  modal.classList.add('open')
  modal.setAttribute('aria-hidden', 'false')

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

quillLeft.addEventListener('click', () => openLetter(letterATopic, letterA))
quillRight.addEventListener('click', () => openLetter(letterBTopic, letterB))

closeBtn.addEventListener('click', closeLetter)
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeLetter() // 點黑底關閉
})

// Esc 關閉
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeLetter()
})
