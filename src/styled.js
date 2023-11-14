import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  background-image: url("../images/background.jpg"), url("../images/background2.jpg");
  background-position: center;
  background-size: contain, cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: auto;
  resize: both;
}
`;