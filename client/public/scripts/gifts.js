const renderGifts = async () => {
  console.log('renderGifts function called')
  const response = await fetch('/gifts')
  const data = await response.json()
  console.log('Data received:', data)
  
  const mainContent = document.getElementById('main-content')
  console.log('Main content element:', mainContent)
  
  if (data) {
    data.map(gift => {
      const card = document.createElement('div')
      card.className = 'card'
      
      const topContainer = document.createElement('div')
      topContainer.className = 'top-container'
      topContainer.style.backgroundImage = `url(${gift.image})`
      
      const bottomContainer = document.createElement('div')
      bottomContainer.className = 'bottom-container'
      
      const name = document.createElement('h3')
      name.textContent = gift.name
      bottomContainer.appendChild(name)
      
      const price = document.createElement('p')
      price.textContent = gift.pricePoint
      bottomContainer.appendChild(price)
      
      const audience = document.createElement('p')
      audience.textContent = gift.audience
      bottomContainer.appendChild(audience)
      
      const readMore = document.createElement('a')
      readMore.textContent = 'Read More >'
      readMore.href = `/gifts/${gift.id}`
      readMore.role = 'button'
      bottomContainer.appendChild(readMore)
      
      card.appendChild(topContainer)
      card.appendChild(bottomContainer)
      
      mainContent.appendChild(card)
    })
  } else {
    const noGifts = document.createElement('h2')
    noGifts.textContent = 'No Gifts Available 😞'
    mainContent.appendChild(noGifts)
  }
}

// Only run this on the home page
console.log('Current pathname:', window.location.pathname)
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  console.log('Running renderGifts on home page')
  renderGifts()
} else {
  console.log('Not on home page, skipping renderGifts')
}
