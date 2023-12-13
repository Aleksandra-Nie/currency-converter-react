import { useState, useEffect } from "react";

const formatDate = {
    day: "numeric",
    month: "numeric",
    year: "numeric"
};

export const useRatesDay = (ratesData) => {
    const [ratesDay, setRatesDay] = useState(new Date());

    useEffect(() => {
        if (ratesData.status === "success") {
            setRatesDay(new Date(ratesData.date));
        }
    }, [ratesData]);

    const formattedRatesDay = ratesDay.toLocaleDateString(undefined, formatDate);

    return formattedRatesDay;
};