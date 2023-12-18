import styled, { css } from "styled-components";

export const StyledFieldset = styled.fieldset`
    border-radius: 25px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.color.whiteLilac};
    box-shadow: 20px 20px 30px ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.black};

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        margin: 20px;
    }
`;

export const StyledLegend = styled.legend`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.color.blueLight};
    border-radius: 5px;
`;

export const StyledLabelText = styled.span`
    margin-right: 5px;
    max-width: 150px;
    width: 100%;
    display: inline-block;
    font-size: 20px;
`;

export const StyledInput = styled.input`
    padding: 10px;
    max-width: 300px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    line-height: 1px;
    margin-top: 20px;

    &:invalid {
        border: 2px solid ${({ theme }) => theme.color.red};
    }
`;

export const StyledButton = styled.button`
    display: block;
    padding: 15px;
    max-width: 300px;
    width: 100%;
    margin: 50px auto 0;
    border: 2px solid ${({ theme }) => theme.color.primary};
    font-size: 20px;
    font-weight: bold;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.primary};

    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 5px;
    }

    ${({ $reset }) => $reset && css`
        margin-top: 5px;
    `}

    &:hover {
        background-color: ${({ theme }) => theme.color.secondary};
        border-color: ${({ theme }) => theme.color.secondary};
        cursor: pointer;
    }
`;

export const Message = styled.p`
  text-align: center;
  padding: 20px;
  font-size: 20px;
  line-height: 1.5;
  
    ${({ $loading }) => $loading && css`
        color: ${({ theme }) => theme.color.pastelGreen};
    `};
    ${({ $failure }) => $failure && css`
        color: ${({ theme }) => theme.color.burntSienna};
    `};
    `;

