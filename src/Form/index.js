import { useState, useRef } from 'react';
import Result from "../Result";
import RateResult from "../RateResult";
import Clock from "../Clock";
<<<<<<< HEAD
import { StyledFieldset, StyledLegend, StyledLabelText, StyledInput, StyledButton, Message } from "./styled";
import { useRatesData } from './useRatesData.js';
=======
import { StyledFieldset, StyledLegend, StyledLabelText, StyledInput, StyledButton } from "./styled";
import { useRatesData } from '../useRatesData.js';
>>>>>>> 36099242aa52862f11f1db37b7b0dae220cfdfa4

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("PLN");
    const [currencyTo, setCurrencyTo] = useState("USD");
    const [result, setResult] = useState({});
    const [currencyRate, setCurrencyRate] = useState({});
    const inputRef = useRef(null);
    const ratesData = useRatesData();
<<<<<<< HEAD

    const currencies = ratesData.data;
=======
>>>>>>> 36099242aa52862f11f1db37b7b0dae220cfdfa4

    const getResult = (amount, currencies, currencyFrom, currencyTo) => {
        const currencyFromRate = currencies.find((currency) => currency.code === currencyFrom).value;
        const currencyToRate = currencies.find((currency) => currency.code === currencyTo).value;

        setResult({
            currencyFrom,
            currencyTo,
            inputAmount: (+amount).toFixed(2),
            resultAmount: (amount / currencyFromRate * currencyToRate).toFixed(2)
        });
    };

    const getCurrencyRate = (currencies, currencyFrom, currencyTo) => {
        const currencyFromRate = currencies.find((currency) => currency.code === currencyFrom).value;
        const currencyToRate = currencies.find((currency) => currency.code === currencyTo).value;


        setCurrencyRate({
            currencyFrom,
            currencyTo,
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
        inputRef.current.focus();
        getCurrencyRate(currencies, currencyFrom, currencyTo);
    };

    const resetForm = (event) => {
        event.preventDefault();
        setCurrencyFrom("PLN");
        setCurrencyTo("USD");
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
                {ratesData.status === "loading" ? (
                    <Message $loading>Trwa pobieranie kursu walut...⏱<br />
                        Proszę o chwilę cierpliwości 🙂
                    </Message>
                ) : ratesData.status === "error" ? (
                    <Message $failure>Przepraszamy, wystapił błąd. <br />
                        Proszę spróbować poźniej.
                    </Message>
                ) : (
                    <>
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
                                    {Object.keys(ratesData.data).map((currency) => (
                                        <option
                                            key={currency.code}
                                            value={currency.code}
                                        >
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
                                    {Object.keys(ratesData.data).map((currency) => (
                                        <option
                                            key={currency.code}
                                            value={currency.code}
                                        >
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
                    </>
                )
                }
            </StyledFieldset>
        </form >
    );
};

export default Form;