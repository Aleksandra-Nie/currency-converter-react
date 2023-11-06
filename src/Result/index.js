import { StyledRateResult } from "../RateResult/styled"
import { LabelText } from "../Form/styled"

const Result = ({ result }) => (
    <StyledRateResult><LabelText>Kwota wynosi: </LabelText> <strong>
        {result.resultAmount
            ? `${result.inputAmount} ${result.currencyFrom} = ${result.resultAmount} ${result.currencyTo}`
            : ""
        }
    </strong>
    </StyledRateResult>
);


export default Result;