var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinranking78b8096c50702113cf7e023583a3fa8faaf4429b41b7ad01";

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);
console.log("If you get 403 error go to"+
"https://cors-anywhere.herokuapp.com/corsdemo nd request for temporary access")

fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-My-Custom-Header': `${apiKey}`,
            'Access-Control-Allow-Origin': "*"
        }
    })
    .then((response) => {
        if (response.ok) {
            response.json().then((json) => {
                console.log(json.data);
                let coinsData = json.data.coins;

                if (coinsData.length > 0) {
                    var cryptoCoin = "";
                }
                //For Loop Starts
                coinsData.forEach((coin) => {
                    cryptoCoin += "<tr>";
                    cryptoCoin += `<td style="color: ${coin.color};"> ${coin.name}</td>`;
                    cryptoCoin += `<td style="color: ${coin.color};"> ${coin.symbol}</td>`;
                    cryptoCoin += `<td style="color: ${coin.color};"> ${coin.change} %</td>`;
                    cryptoCoin += `<td style="color: ${coin.color};"> $${Math.round(coin.price)}</td>`;
                    cryptoCoin += `<td style="color: ${coin.color};"><img src ="${coin.iconUrl}" height=25 width=30 alt="coin" </td>`;
                    cryptoCoin += `<td style="color: ${coin.color};"> ${coin.lowVolume}</td>`;
                    cryptoCoin += `<td style="color: ${coin.color};"> ${((coin.marketCap)/1000000000).toFixed(3)} Billion</td>`;

                    
                    "<tr>";
                });
                //For Loop Ends
                document.getElementById("data").innerHTML = cryptoCoin;
            });
        }
    })
    .catch((error) => {
        console.log(error);
    });