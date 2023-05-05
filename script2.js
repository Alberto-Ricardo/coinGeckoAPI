async function searchCoin (){
  let t = document.getElementById('targetCoin')
  let targetCoin = t.value;
  
  let response = await fetch (`https://api.coingecko.com/api/v3/search?query=${targetCoin}`)
  //let response = await fetch("/equalCoins.json")
  let result = await response.json()
  let coins = result.coins
  //console.log(coins)

  let searchContainer = document.querySelector('.search-container')

  searchContainer.innerHTML = ''

  coins.forEach(coin => {
    let coinDiv = document.createElement('div')
    coinDiv.classList.add('coin')

    let rank = document.createElement('p')
    rank.classList.add('rank')
    rank.textContent = `⭐ Rank: ${coin.market_cap_rank}`
    coinDiv.appendChild(rank)

    let name = document.createElement('p')
    name.classList.add('name')
    name.textContent = `Name: ${coin.name}`
    coinDiv.appendChild(name)

    let exchange =document.createElement('a')
    exchange.href ="https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=11345710&invite_code=4ecr7223"
    exchange.classList.add('exchange')
    exchange.textContent = `Buy`
    coinDiv.appendChild(exchange)

    let symbol = document.createElement('p')
    symbol.classList.add('symbol')
    symbol.textContent = `Symbol: ${coin.symbol}`
    coinDiv.appendChild(symbol)

    let image = document.createElement('img')
    image.classList.add('picture')
    image.src = coin.large
    coinDiv.appendChild(image)

    searchContainer.appendChild(coinDiv)
  })

};


async function getCryptoData () {
    let response = await fetch ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=18&page=1&sparkline=false&locale=es")
    //let response = await fetch("/response.json")
    let data = await response.json()
  
    let coinsContainer = document.querySelector('.coins-container')
  
    data.forEach(coin => {
      let coinDiv = document.createElement('div')
      coinDiv.classList.add('coin')

      let rank = document.createElement('p')
      rank.classList.add('rank')
      rank.textContent = `⭐ Rank: ${coin.market_cap_rank}`
      coinDiv.appendChild(rank)
  
      let name = document.createElement('p')
      name.classList.add('name')
      name.textContent = `Name: ${coin.name}`
      coinDiv.appendChild(name)

      let exchange =document.createElement('a')
      exchange.href ="https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=11345710&invite_code=4ecr7223"
      exchange.classList.add('exchange')
      exchange.textContent = `Buy`
      coinDiv.appendChild(exchange)

      let symbol = document.createElement('p')
      symbol.classList.add('symbol')
      symbol.textContent = `Symbol: ${coin.symbol}`
      coinDiv.appendChild(symbol)
  
      let price = document.createElement('p')
      price.classList.add('price')
      price.textContent = `Price: $${coin.current_price}`
      coinDiv.appendChild(price)
  
      let change = document.createElement('p')
      change.classList.add('change')
      change.textContent = `Last 24hrs change: ${coin.price_change_percentage_24h}%`


      if (parseFloat(coin.price_change_percentage_24h) < 0) {
        change.classList.add("negative");
      } else if (parseFloat(coin.price_change_percentage_24h) > 0) {
        change.classList.add("positive");
      }

      coinDiv.appendChild(change)

      let image = document.createElement('img')
      image.classList.add('picture')
      image.src = coin.image
      coinDiv.appendChild(image)
  
      coinsContainer.appendChild(coinDiv)
    })
  };

getCryptoData();
