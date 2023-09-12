async function fetchCountryData() {
  const apiUrl = 'https://restcountries.com/v3/all'

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    const randomIndex = Math.floor(Math.random() * data.length)
    const randomCountry = data[randomIndex]

    const countryInfo = document.querySelector('.country-info')
    countryInfo.innerHTML = `
            <h2>${randomCountry.name.common}</h2>
            <p>Capital: ${randomCountry.capital}</p>
            <p>Population: ${randomCountry.population}</p>
            <p>Region: ${randomCountry.region}</p>
            <p>Subregion: ${randomCountry.subregion}</p>
            <p>Languages: ${Object.values(randomCountry.languages).join(
              ', '
            )}</p>
            <img src="${randomCountry.flags.svg}" alt="Flag of ${
      randomCountry.name.common
    }">
        `
  } catch (error) {
    console.error('Error:', error)
    const countryInfo = document.querySelector('.country-info')
    countryInfo.innerHTML = 'Error fetching country data.'
  }
}

const countryButton = document.createElement('button')
countryButton.textContent = 'Get Country Info'
countryButton.className = 'button1'
countryButton.addEventListener('click', fetchCountryData)

document.body.appendChild(countryButton)

fetchCountryData()
