const renderGift = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())
  
  const response = await fetch('/gifts')
  const data = await response.json()
  
  const giftContent = document.getElementById('gift-content')
  
  let gift
  
  if (data) {
    gift = data.find(gift => gift.id === requestedID)
  }
  
  if (gift) {
    document.getElementById('image').src = gift.image
    document.getElementById('name').textContent = gift.name
    document.getElementById('submittedBy').textContent = `Submitted by: ${gift.submittedBy}`
    document.getElementById('submittedOn').textContent = `Submitted on: ${gift.submittedOn}`
    document.getElementById('pricePoint').textContent = `Price Point: ${gift.pricePoint}`
    document.getElementById('audience').textContent = `Target Audience: ${gift.audience}`
    document.getElementById('description').textContent = gift.description
    
    document.title = gift.name + ' - UnEarthed'
  } else {
    const noGift = document.createElement('h2')
    noGift.textContent = 'No Gifts Available 😞'
    giftContent.appendChild(noGift)
  }
}

renderGift()
