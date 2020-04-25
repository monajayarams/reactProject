import apiConfigs from "./config.json";
class Api {
    fetchSymbols(){
        let queryParams = apiConfigs.symbols.join();
        const url = `${apiConfigs.apiURL}${queryParams}`
        return fetch(url, {
            method: 'GET',
            headers: {
              'X-CoinAPI-Key': apiConfigs.apiKey
            }
        })
        .then(response => response.json())
        .then(
            data => {return data},
        );
        // return fetch("https://raw.githubusercontent.com/angel-design/ubiquitous-funicular/master/sandbox/response.json")
        // .then(response => response.json())
        // .then(data => {return data});
    }
    fetchSymbolDetails(symbol){
        const url = `${apiConfigs.apiDetailsUrl}${symbol}${apiConfigs.apiDetailsQueryParam}`
        return fetch(url, {
            method: 'GET',
            headers: {
              'X-CoinAPI-Key': apiConfigs.apiKey
            }
        })
        .then(response => response.json())
        .then(
            data => {return data},
        );
    }
}
const api = new Api();
export default api;