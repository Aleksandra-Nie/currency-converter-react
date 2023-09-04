const Result = ({ result }) => (
    <p className="form__paragraph"><span class="form__amount">Kwota wynosi: </span> <strong>
        {result.resultAmount
            ? `${result.inputAmount} ${result.currencyFrom} = ${result.resultAmount} ${result.currencyTo}`
            : ""
        }
    </strong>
    </p>
);


export default Result;