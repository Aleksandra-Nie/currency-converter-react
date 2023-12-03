import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
    text-align: center;
    font-family: "Noto Sans Kannada", sans-serif;
    font-size: 12px;

    ${({ $hidden }) => $hidden && css`
        display: none;
    `};
`;