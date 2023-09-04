const RateResult = ({ currencyRate }) => (
    <p className="form__paragraph form__paragraph--exchangeRate">
        {
            currencyRate.currencyRateResult
                ? `1 ${currencyRate.currencyFrom} 
                = ${currencyRate.currencyRateResult.toFixed(currencyRate.currencyFrom === currencyRate.currencyTo ? 0 : 4)} ${currencyRate.currencyTo}`
                : ""
        }
    </p>
);

export default RateResult;

