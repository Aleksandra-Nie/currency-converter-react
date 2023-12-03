import { useState, useRef } from 'react';
import Result from "../Result";
import RateResult from "../RateResult";
import Clock from "../Clock";
import { StyledFieldset, StyledLegend, StyledLabelText, StyledInput, StyledButton } from "./styled";
import { useRatesData } from '../useRatesData.js';

const Form = () => {

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState({});
    const [currencyRate, setCurrencyRate] = useState({});
    const inputRef = useRef(null);
    const ratesData = useRatesData();
    const rates = ratesData.currencyData;
    const [currencyFrom, setCurrencyFrom] = useState(rates[0].code);
    const [currencyTo, setCurrencyTo] = useState(rates[1].code);

    const getResult = (amount, currencyFrom, currencyTo) => {
        const currencyFromRate = rates.find((currency) => currency.code === currencyFrom).value;
        const currencyToRate = rates.find((currency) => currency.code === currencyTo).value;

        setResult({
            currencyFrom: (currencyFrom).slice(0, 3),
            currencyTo: (currencyTo).slice(0, 3),
            inputAmount: (+amount).toFixed(2),
            resultAmount: (amount * currencyFromRate / currencyToRate).toFixed(2)
        });
    };

    const getCurrencyRate = (currencyFrom, currencyTo) => {
        const currencyFromRate = rates.find((currency) => currency.code === currencyFrom).value;
        const currencyToRate = rates.find((currency) => currency.code === currencyTo).value;


        setCurrencyRate({
            currencyFrom: (currencyFrom).slice(0, 3),
            currencyTo: (currencyTo).slice(0, 3),
            currencyRateResult: (currencyFromRate / currencyToRate).toFixed(currencyFrom === currencyTo ? 0 : 4)
        });
    };

    const currencyInput = () => {
        getCurrencyRate(currencyFrom, currencyTo);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        getResult(amount, currencyFrom, currencyTo);
        setAmount("");
        inputRef.current.focus();
        getCurrencyRate(currencyFrom, currencyTo);
    };

    const resetForm = (event) => {
        event.preventDefault();
        setCurrencyFrom(rates[0].code);
        setCurrencyTo(rates[1].code);
        setResult("");
        setCurrencyRate("");
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
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <StyledLabelText>Przelicz z: </StyledLabelText>
                        <StyledInput
                            as="select"
                            onClick={currencyInput}
                            name="currencyFrom"
                            value={currencyFrom}
                            onChange={({ target }) => setCurrencyFrom(target.value)}
                        >
                            {Object.keys(rates).map((currency) => (
                                <option key={currency.code}>
                                    {currency.code}
                                </option>
                            ))}
                        </StyledInput>
                    </label>
                </p>
                <p>
                    <label>
                        <StyledLabelText>Przelicz na: </StyledLabelText>
                        <StyledInput
                            as="select"
                            onClick={currencyInput}
                            name="currencyTo"
                            value={currencyTo}
                            onChange={({ target }) => setCurrencyTo(target.value)}
                        >
                            {Object.keys(rates).map((currency) => (
                                <option key={currency.code}>
                                    {currency.code}
                                </option>
                            ))}
                        </StyledInput>
                    </label>
                </p>

                <RateResult
                    currencyRate={currencyRate}
                />
                <Result
                    result={result}
                />
                <p>
                    <StyledButton>
                        Przelicz
                    </StyledButton>
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