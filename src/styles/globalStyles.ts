import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 /* Box-sizing */
*,
::before,
::after {
  box-sizing: border-box;
}

/* Remove default margin */
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
dl,
figure,
blockquote,
fieldset,
legend {
  margin: 0;
  padding: 0;
}

/* Remove list styles */
ul,
ol {
  list-style: none;
}

/* Typography */
html {
  font-size: 16px;
}

body {
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}

/* Remove text decoration from links */
a {
  text-decoration: none;
}

/* Remove borders and outlines */
img,
iframe,
textarea,
input,
button {
  border: none;
  outline: none;
}

/* Remove horizontal scrollbar */
html {
  overflow-x: hidden;
}

/* Ensure full-width of table beyond table width */
table {
  border-collapse: collapse;
  width: 100%;
}

.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}

`;
