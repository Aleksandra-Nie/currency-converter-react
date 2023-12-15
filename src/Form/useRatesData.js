import axios from "axios";
import { useState, useEffect } from "react";

// const API_JSON = "currency-converter-react/currencies.json";
const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_x3gX5H8Zq1f9mQN5zsjAB7yMY3VZ567nubgDSugG";

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        status: "loading",
    });


    const fetchRates = () => {
        (async () => {
            try {
                const response = await axios.get(API_URL);

                setRatesData({
                    status: "success",
                    date: response.data.meta.last_updated_at,
                    currencyData: response.data.data,
                });
                console.log(response.data);

            } catch (error) {
                setRatesData({
                    status: "error",
                    data: null,
                });
                console.log(error)
            }
        })();
    };

    useEffect(() => {
        setTimeout(() => {
            fetchRates();
        }, 2000);
    }, []);

    return ratesData;
};

