import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
 /* *{
  ::-webkit-scrollbar {
    width: 0.5rem;
    height:0.5rem;
   
  }
  ::-webkit-scrollbar-track {
    background: #ddd;
    
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primaryColor}; 
    border-radius: 0.3rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
  }
 } */
 *,
  *::after,
  *::before {
      margin:0;
      padding:0;
      box-sizing:inherit;
  }
  html{
      font-size:62.5%;
  }
body {
  font-family: 'Jost', sans-serif;
   font-style: normal;
    box-sizing:border-box;
    color:#000000;
    /* background-color:#F3EFE9; */
   
      @media(max-width: 568px) {
      overflow-x: hidden;
  }

  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}
input[type=number] {
  -moz-appearance: textfield;
}
a{
  color: ${({ color, theme }) => color || theme.colors.neutralColor};
      text-decoration: none;
      font-size:${({ Fs }) => Fs || "1.3rem"};
  
}
      
`;
