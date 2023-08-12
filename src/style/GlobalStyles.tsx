import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Crafty+Girls&family=Permanent+Marker&family=Signika&family=Walter+Turncoat&display=swap');
@font-face {
    font-family: 'Crafty Girls';
    font-style: normal;
    font-weight: normal;
    src: url('https://fonts.googleapis.com/css2?family=Crafty+Girls&display=swap') format('truetype');
  }
  
  @font-face {
    font-family: 'Permanent Marker';
    font-style: normal;
    font-weight: normal;
    src: url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap') format('truetype');
  }

  @font-face {
    font-family: 'Signika';
    font-style: normal;
    font-weight: normal;
    src: url('https://fonts.googleapis.com/css2?family=Signika&display=swap') format('truetype');
  }

  @font-face {
    font-family: 'Walter Turncoat';
    font-style: normal;
    font-weight: normal;
    src: url('https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap') format('truetype');
  }
  
  ${reset} 

  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;

  }


  ol,
  ul,
  li {
    list-style: none;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
    
`;

export default GlobalStyles;
