import { StyledRateResult } from "./styled";

const RateResult = ({ currencyRate }) => (
    <StyledRateResult exchangerate>
        {
            currencyRate.currencyRateResult
                ? `1 ${currencyRate.currencyFrom} 
                = ${currencyRate.currencyRateResult} ${currencyRate.currencyTo}`
                : ""
        }
    </StyledRateResult>
);

export default RateResult;

