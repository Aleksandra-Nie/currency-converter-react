const RateResult = ({ currencyRate }) => (
    <p className="form__paragraph form__paragraph--exchangeRate">
        {
            currencyRate.currencyRateResult
                ? `1 ${currencyRate.currencyFrom} 
                = ${currencyRate.currencyRateResult} ${currencyRate.currencyTo}`
                : ""
        }
    </p>
);

export default RateResult;

