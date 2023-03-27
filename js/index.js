const p = document.createElement('p')
p.innerText = 'Hello World'
document.body.appendChild(p)

p.style.color = 'red'

const button = document.createElement('button')
button.innerText = 'Click me'
document.body.appendChild(button)

const fontSize = 16

button.addEventListener('click', () => {
  fontSize += 2
  p.style.fontSize = `${fontSize}px`
})
