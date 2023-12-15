import { useState } from 'react';
import { useRatesData } from "./useRatesData";

export const useResult = () => {

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState({});
    const [currencyRate, setCurrencyRate] = useState({});
    const [currencyFrom, setCurrencyFrom] = useState("EUR");
    const [currencyTo, setCurrencyTo] = useState("PLN");

    const ratesData = useRatesData();
    const rates = ratesData.currencyData;

    const getResult = (amount, currencyFrom, currencyTo) => {
        const currencyFromRate = Object.keys(rates).find((currency) => currency === currencyFrom);
        const currencyToRate = Object.keys(rates).find((currency) => currency === currencyTo);

        setResult({
            currencyFrom,
            currencyTo,
            inputAmount: +amount,
            resultAmount: (amount / rates[currencyFromRate].value * rates[currencyToRate].value).toFixed(2)
        });
    };

    const getCurrencyRate = (currencyFrom, currencyTo) => {
        const currencyFromRate = Object.keys(rates).find((currency) => currency === currencyFrom);
        const currencyToRate = Object.keys(rates).find((currency) => currency === currencyTo);

        setCurrencyRate({
            currencyFrom,
            currencyTo,
            currencyRateResult: (rates[currencyToRate].value / rates[currencyFromRate].value).toFixed(currencyFrom === currencyTo ? 0 : 4)
        });
    }

    const currencyInput = () => {
        getCurrencyRate(currencyFrom, currencyTo);
    };

    return {
        result,
        amount,
        currencyFrom,
        currencyTo,
        currencyRate,
        setAmount,
        setCurrencyFrom,
        setCurrencyTo,
        getCurrencyRate,
        getResult,
        currencyInput,
        setCurrencyRate,
        setResult,
    };
};