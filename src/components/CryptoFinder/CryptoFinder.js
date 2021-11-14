import React, {useState, useEffect} from 'react';
import './CryptoFinder.css';
import axios from "axios";

function CryptoFinder() {
    const [query, setQuery] = useState(''); // inputveld
    const [coin, setCoin] = useState(null);  //coin informatie
    const [find, setFind] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.coingecko.com/api/v3/coins/` + query);
                setCoin(result.data);
                console.log(coin);
                setFind(false);
            } catch (e) {
                console.error(e);
            }
        }

        if (coin && query && find) {
            fetchData();
        }

    }, [coin]);

    function handleClick() {
        setCoin(query);
        setFind(true)
    }

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            setCoin(query);
            setFind(true)
        }
    }

    return (

        <div className="crypto-info-container">
      <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          onKeyUp={keyPressCheck}
          placeholder="Coin name"
          className="crypto-searchbar"
      />

      <button
          type="button"
          onClick={handleClick}
          className="crypto-button"
      >
        Search
      </button>


    {coin && !find &&
    <>

        <h3 className="crypto-info-price">€{coin.market_data.current_price.eur}</h3>
        <h3 className="crypto-info-mc">€{coin.market_data.market_cap.eur}</h3>
        <h3 className="crypto-info-vol">€{coin.market_data.price_change_24h_in_currency.eur}</h3>
        <h3 className="crypto-info-sup">{coin.market_data.circulating_supply}</h3>

    </>}
        </div>

);
}

export default CryptoFinder;