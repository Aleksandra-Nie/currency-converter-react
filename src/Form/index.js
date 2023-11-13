import { useState, useRef } from 'react';
import { currencies } from "../currencies.js";
import Result from "../Result";
import RateResult from "../RateResult";
import Clock from "../Clock";
import { StyledFieldset, StyledLegend, StyledLabelText, StyledInput, StyledSelect, StyledButton } from "./styled";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("PLN - Złotówka polska");
    const [currencyTo, setCurrencyTo] = useState("USD - Dolar amerykański");
    const [result, setResult] = useState({});
    const [currencyRate, setCurrencyRate] = useState({});
    const inputRef = useRef(null);

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

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <Clock />
            <StyledFieldset>
                <StyledLegend>Kalkulator walutowy</StyledLegend>
                <p>
                    Pola wymagane oznaczone są *.
                </p>
                <p>
                    <label>
                        <StyledLabelText>Kwota*: </StyledLabelText>
                        <StyledInput
                            ref={inputRef}
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
                        <StyledLabelText>Przelicz z: </StyledLabelText>
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
                        <StyledLabelText>Przelicz na: </StyledLabelText>
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
                    <StyledButton
                        onClick={focusInput}
                    >
                        Przelicz</StyledButton>
                </p>
                <p>
                    <StyledButton
                        $reset
                        onClick={resetForm}
                        type="reset">Resetuj</StyledButton>
                </p>
            </StyledFieldset>
        </form >
    );
};

export default Form;