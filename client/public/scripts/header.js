console.log('Header script loading...')
const header = document.querySelector('header')
console.log('Header element:', header)

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const logo = document.createElement('img')
logo.src = '/logo.svg'
logo.alt = 'UnEarthed Logo'

const title = document.createElement('h1')
title.textContent = 'UnEarthed'

headerLeft.appendChild(logo)
headerLeft.appendChild(title)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'

headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)
