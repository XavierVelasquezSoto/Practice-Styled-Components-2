import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    body{
        background-color:#ECF2F8;
        font-family: "Barlow Condensed", sans-serif;
        /* color: #fff; */
    }
    :root{
        --body-color-purple:#733FC8;
        --body-color-grey:#48556A;
        --body-color-darkgrey:#19202D;
        --body-color-white:#fff;
        --font-size-xl: 20px;
        --font-size-l: 13px;
        --font-size-m: 11px;
        --line-height-auto: auto;
        --line-height-xl: 18px;
        --line-height-l: 13px;
        --line-height-m: 11px;
        --font-weight-semibold: 700;
        --font-weight-medium: 500;
    }
`;
