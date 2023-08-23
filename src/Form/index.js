import "./style.css";

const Form = () => (
    <form>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walutowy</legend>
            <p>
                Pola wymagane oznaczone są *.
            </p>
            <p>
                <label>
                    <span className="form__labelText">Kwota*: </span>
                    <input className="form__amountField" type="number" name="amount" step="0.01" min="0"
                        placeholder="Tutaj wpisz kwotę" required autoFocus />
                </label>
            </p>

            <p>
                <label>
                    <span className="form__labelText">Przelicz z: </span>
                    <select className="form__amountField" name="currencyFrom">
                        <option value="EUR">EUR - Euro</option>
                        <option value="CHF">CHF - Frank szwajcarski</option>
                        <option value="USD">USD - Dolar amerykański</option>
                        <option value="GBP">GBP - Funt szterling</option>
                        <option value="AUD">AUD - Dolar australijski</option>
                        <option value="PLN">PLN - Złotówka polska</option>
                    </select>
                </label>
                <p>
                    <label>
                        <span className="form__labelText">Przelicz na: </span>
                        <select className="form__amountField" name="currencyTo">
                            <option value="EUR">EUR - Euro</option>
                            <option value="CHF">CHF - Frank szwajcarski</option>
                            <option value="USD">USD - Dolar amerykański</option>
                            <option value="GBP">GBP - Funt szterling</option>
                            <option value="AUD">AUD - Dolar australijski</option>
                            <option value="PLN">PLN - Złotówka polska</option>
                        </select>
                    </label>
                </p>
            </p>
            <p className="form__paragraph form__paragraph--exchangeRate"><span className="js-exchangeRate"></span></p>
            <p className="form__paragraph"> <span className="form__amount">Kwota wynosi: </span>
                <span className="js-result"></span>
            </p>
            <p>
                <button className="button">Przelicz</button>
            </p>
            <p>
                <button type="reset" className="button button--reset">Resetuj</button>
            </p>

        </fieldset>
    </form>
)

export default Form;