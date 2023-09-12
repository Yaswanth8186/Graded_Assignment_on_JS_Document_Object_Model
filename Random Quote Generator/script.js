async function fetchRandomQuote() {
  const apiUrl = 'https://type.fit/api/quotes'

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    const randomIndex = Math.floor(Math.random() * data.length)
    const randomQuote = data[randomIndex]

    const quoteContainer = document.querySelector('.quote')
    quoteContainer.innerHTML = `
            <p>${randomQuote.text}</p>
            <p class="author">- ${randomQuote.author || 'Unknown'}</p>
        `
  } catch (error) {
    console.error('Error:', error)
    const quoteContainer = document.querySelector('.quote')
    quoteContainer.innerHTML = 'Error fetching a quote.'
  }
}

const newQuoteBtn = document.getElementById('new-quote-btn')
newQuoteBtn.addEventListener('click', fetchRandomQuote)

fetchRandomQuote()
