import styled, { css } from "styled-components";

export const StyledRateResult = styled.p`
    margin-top: 40px;
    font-size: 20px;

    ${({ $exchangeRate }) => $exchangeRate && css`
    font-size: 16px;
    color: rgb(161, 198, 247);
    font-weight: bold;
    text-align: center;
`}
`;