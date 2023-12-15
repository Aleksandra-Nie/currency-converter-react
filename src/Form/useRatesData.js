import axios from "axios";
import { useState, useEffect } from "react";

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        status: "loading",
    });


    const fetchRates = () => {
        (async () => {
            try {
                const response = await axios.get("currency-converter-react/currencies.json");

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

