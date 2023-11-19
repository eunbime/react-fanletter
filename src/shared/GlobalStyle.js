import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --mainWhite: #fff;
        --mainBlack: #222;
        --aespaMain: #AE7EF2;
        --aespa2: #AC99F2;
        --aespa3: #C1B3F2;
        --aespa4: #3A29A6;
        --aespa5: #A0EAF2;
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: black;
    }

    body {
        background: linear-gradient(90deg, var(--aespaMain), var(--aespa5));
        background-repeat: no-repeat;
        color: var(--mainBlack);
    }
    
    .material-icons {
        font-size: 30px;
    }

`;

export default GlobalStyle;
