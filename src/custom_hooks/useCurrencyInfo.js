import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    let url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=8cb72dc5933b4fb7a56b18bce0413f12`;

    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((resp) => setData(resp.rates)).catch(err => []);
    }, [currency]);
    return data;
}

export default useCurrencyInfo;