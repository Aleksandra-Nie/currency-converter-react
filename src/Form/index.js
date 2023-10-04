import "./style.css";
import { useState } from 'react';
import { currencies } from "../currencies.js";
import Result from "../Result";
import RateResult from "../RateResult";
import Clock from "../Clock";



const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("PLN - Złotówka polska");
    const [currencyTo, setCurrencyTo] = useState("USD - Dolar amerykański");
    const [result, setResult] = useState({});
    const [currencyRate, setCurrencyRate] = useState({});

    const getResult = (amount, currencies, currencyFrom, currencyTo) => {
        const currencyFromRate = currencies.find((currency) => currency.name === currencyFrom).value;
        const currencyToRate = currencies.find((currency) => currency.name === currencyTo).value;

        setResult({
            currencyFrom: (currencyFrom).slice(0, 3),
            currencyTo: (currencyTo).slice(0, 3),
            inputAmount: (+amount).toFixed(2),
            resultAmount: (amount * currencyFromRate / currencyToRate).toFixed(2)
        });
    };

    const getCurrencyRate = (currencies, currencyFrom, currencyTo) => {
        const currencyFromRate = currencies.find((currency) => currency.name === currencyFrom).value;
        const currencyToRate = currencies.find((currency) => currency.name === currencyTo).value;


        setCurrencyRate({
            currencyFrom: (currencyFrom).slice(0, 3),
            currencyTo: (currencyTo).slice(0, 3),
            currencyRateResult: currencyFromRate / currencyToRate
        });
    };

    const currencyInput = () => {
        getCurrencyRate(currencies, currencyFrom, currencyTo);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        getResult(amount, currencies, currencyFrom, currencyTo);
        setAmount("");
        getCurrencyRate(currencies, currencyFrom, currencyTo);
    };

    const resetForm = (event) => {
        event.preventDefault();
        setCurrencyFrom("PLN - Złotówka polska");
        setCurrencyTo("USD - Dolar amerykański");
        setResult("");
        setCurrencyRate("");
    };

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <Clock />
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walutowy</legend>
                <p>
                    Pola wymagane oznaczone są *.
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Kwota*: </span>
                        <input
                            className="form__amountField"
                            value={amount}
                            type="number"
                            name="amount"
                            step="0.01"
                            min="0"
                            placeholder="Tutaj wpisz kwotę"
                            required
                            autoFocus
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Przelicz z: </span>
                        <select
                            onClick={currencyInput}
                            className="form__amountField"
                            name="currencyFrom"
                            value={currencyFrom}
                            onChange={({ target }) => setCurrencyFrom(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.name}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Przelicz na: </span>
                        <select
                            onClick={currencyInput}
                            className="form__amountField"
                            name="currencyTo"
                            value={currencyTo}
                            onChange={({ target }) => setCurrencyTo(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.name}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>

                <RateResult
                    currencyRate={currencyRate}
                />
                <Result
                    result={result}
                />
                <p>
                    <button className="button">Przelicz</button>
                </p>
                <p>
                    <button
                        onClick={resetForm}
                        type="reset" className="button button--reset">Resetuj</button>
                </p>
            </fieldset>
        </form >
    );
};

export default Form;