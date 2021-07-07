const createTripCard = (content) => {
  if ('content' in document.createElement('template')) {
    const cardsContainer = document.querySelector('.saved')

    // The trip card
    const tripCard = document.createElement('div')
    tripCard.setAttribute('class', 'card')

    const template = document.querySelector('#saved')
    const clone = template.content.cloneNode(true)

    clone.querySelector('img').src = content.imageUrl
    clone.querySelector('img').alt = content.imageDesc
    clone.querySelector('#place').innerHTML = content.place
    clone.querySelector('#date').innerHTML = content.date

    tripCard.appendChild(clone)
    cardsContainer.prepend(tripCard)
  } else {
    alert('Seems your browser does not support html templates')
  }
}

export { createTripCard }
