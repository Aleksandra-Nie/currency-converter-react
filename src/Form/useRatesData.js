import { useState, useEffect } from "react";

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        status: "loading",
    });


    const fetchRates = () => {
        (async () => {
            try {
                const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_x3gX5H8Zq1f9mQN5zsjAB7yMY3VZ567nubgDSugG");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();

                setRatesData({
                    status: "success",
                    date: data.meta.last_updated_at,
                    currencyData: data.data,
                });
                console.log(data);

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

