import { StyledRateResult } from "../RateResult/styled"
import { StyledLabelText } from "../Form/styled"

const Result = ({ result }) => (
    <StyledRateResult>
        <StyledLabelText>
            Kwota wynosi:
        </StyledLabelText>
        <strong>
            {result.resultAmount
                ? `${result.inputAmount} ${result.currencyFrom} 
                = ${result.resultAmount} ${result.currencyTo}`
                : ""
            }
        </strong>
    </StyledRateResult>
);


export default Result;