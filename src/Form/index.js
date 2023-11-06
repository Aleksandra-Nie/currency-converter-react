import { useState } from 'react';
import { currencies } from "../currencies.js";
import Result from "../Result";
import RateResult from "../RateResult";
import Clock from "../Clock";
import { Fieldset, Legend, LabelText, AmountField, StyledSelect, Button } from "./styled";


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
            currencyRateResult: (currencyFromRate / currencyToRate).toFixed(currencyFrom === currencyTo ? 0 : 4)
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
            <Fieldset>
                <Legend>Kalkulator walutowy</Legend>
                <p>
                    Pola wymagane oznaczone są *.
                </p>
                <p>
                    <label>
                        <LabelText>Kwota*: </LabelText>
                        <AmountField
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
                        <LabelText>Przelicz z: </LabelText>
                        <StyledSelect
                            onClick={currencyInput}
                            name="currencyFrom"
                            value={currencyFrom}
                            onChange={({ target }) => setCurrencyFrom(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.name}>
                                    {currency.name}
                                </option>
                            ))}
                        </StyledSelect>
                    </label>
                </p>
                <p>
                    <label>
                        <LabelText>Przelicz na: </LabelText>
                        <StyledSelect
                            onClick={currencyInput}
                            name="currencyTo"
                            value={currencyTo}
                            onChange={({ target }) => setCurrencyTo(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.name}>
                                    {currency.name}
                                </option>
                            ))}
                        </StyledSelect>
                    </label>
                </p>

                <RateResult
                    currencyRate={currencyRate}
                />
                <Result
                    result={result}
                />
                <p>
                    <Button>Przelicz</Button>
                </p>
                <p>
                    <Button reset
                        onClick={resetForm}
                        type="reset">Resetuj</Button>
                </p>
            </Fieldset>
        </form >
    );
};

export default Form;