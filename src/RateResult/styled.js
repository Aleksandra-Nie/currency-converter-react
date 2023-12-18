import styled, { css } from "styled-components";

export const StyledRateResult = styled.p`
    margin-top: 40px;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 20px;
    }

    ${({ $exchangeRate }) => $exchangeRate && css`
        font-size: 16px;
        color: ${({ theme }) => theme.color.secondary};
        font-weight: bold;
        text-align: center;
    `}
`;