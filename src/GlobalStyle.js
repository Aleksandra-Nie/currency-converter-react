import { createGlobalStyle } from 'styled-components';
import background from "./images/background.jpg";
import backgroundSecond from "./images/background2.jpg";

export const GlobalStyle = createGlobalStyle` 
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  background-image: url("${background}"), url("${backgroundSecond}");
  background-position: center;
  background-size: contain, cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: auto;
  resize: both;
}
`;