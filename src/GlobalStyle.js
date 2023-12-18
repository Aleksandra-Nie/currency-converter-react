import { createGlobalStyle } from 'styled-components';
import background from "./images/background3.png";

export const GlobalStyle = createGlobalStyle` 
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: auto;
  resize: both;
}
`;