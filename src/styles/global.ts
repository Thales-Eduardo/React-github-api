import { createGlobalStyle } from 'styled-components';
import backgrosundImage from '../assets/ff.gif';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background: url(${backgrosundImage}) fixed;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
 font: 16px roboto, sans-serif;
}
#root {
  max-width: 960px;
  margin: auto;
  padding: 40px 20px;
}
button {
  cursor: pointer;
}
`;
