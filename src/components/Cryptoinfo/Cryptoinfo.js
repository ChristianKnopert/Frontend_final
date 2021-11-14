import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cryptoinfo.css"

function Cryptoinfo() {
    const [data, setData] = useState([]);
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=20`;

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(url);
                setData(result.data);
                console.log(data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);
    const cryptos = data.map((cryp) => {
        return (
            <div className="crypto-info-container-info">
                <img src={cryp.image} className="logo"></img>
                <h3 className="crypto-info">{cryp.name}</h3>
                <h3 className="crypto-info-price">€{cryp.current_price}</h3>
                <h3 className="crypto-info-mc">€{cryp.market_cap}</h3>
                <h3 className="crypto-info-vol">€{cryp.price_change_24h}</h3>
                <h3 className="crypto-info-sup">{cryp.total_supply}</h3>
            </div>
        );
    });
    return <>{data && cryptos}</>;
}

export default Cryptoinfo;
