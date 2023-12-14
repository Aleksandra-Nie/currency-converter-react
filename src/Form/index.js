import { useRef } from 'react';
import Result from "../Result";
import RateResult from "../RateResult";
import Clock from "../Clock";
import { StyledFieldset, StyledLegend, StyledLabelText, StyledInput, StyledButton, Message } from "./styled";
import Footer from "../Footer";
import { useResult } from "./useResult";
import { useRatesData } from "./useRatesData";

const Form = () => {

    const {
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
        setResult,
        setCurrencyRate,
    } = useResult();

    const ratesData = useRatesData();
    const rates = ratesData.currencyData;

    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        getResult(amount, currencyFrom, currencyTo);
        setAmount("");
        inputRef.current.focus();
        getCurrencyRate(currencyFrom, currencyTo);
    };

    const resetForm = (event) => {
        event.preventDefault();
        setCurrencyFrom("EUR");
        setCurrencyTo("PLN");
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
                    <Message $loading>
                        Trwa pobieranie kursu walut...⏱<br />
                        Proszę o chwilę cierpliwości 🙂
                    </Message>
                ) : ratesData.status === "error" ? (
                    <Message $failure>
                        Przepraszamy, wystapił błąd. <br />
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
                                    {Object.keys(rates).map((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
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
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
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
                        <Footer
                            ratesData={ratesData}
                        />
                    </>
                )}
            </StyledFieldset>
        </form >
    );
};

export default Form;