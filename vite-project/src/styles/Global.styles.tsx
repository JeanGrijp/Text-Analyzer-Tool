import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;

    background-color: #dfb9ff;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
