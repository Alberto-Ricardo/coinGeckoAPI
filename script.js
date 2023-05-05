//Real URL
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=17&page=1&sparkline=false&price_change_percentage=1h&locale=es

async function getCryptoData () {
    let response =  await fetch("/response.json")
    let data = await response.json()
    //let coin = data[0]
    //console.log(coin.name)

    let coins = ""

    data.forEach(coin => {
        console.log(coin.name)
        coins+= `
        <div class="coins">
        <p class="name">Name: ${coin.name}</p>
        <p class="name">Symbol: ${coin.symbol}</p>
        <p class="name">Price: ${coin.current_price}</p>
        <p class="name">Last 24hrs change: ${coin.price_change_percentage_24h}%</p>
        <br>
        <img class="picture" src="${coin.image}">
        </div>
        `;        
    });

    document.getElementById('coins').innerHTML =coins;


};


getCryptoData();
