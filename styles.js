// Importing the 'createGlobalStyle' function from the 'styled-components' module/library.
// This is used to define global CSS styles in styled-components.
import { createGlobalStyle } from "styled-components";

// Importing the 'Open_Sans' font from the 'next/font/google' module.
import { Open_Sans } from "next/font/google";

// Using the 'Open_Sans' function to get the 'Open Sans' font with the 'latin' subset.
// The result (likely an object) is stored in the 'openSans' constant.
const openSans = Open_Sans({ subsets: ["latin"] });

/*
- creating and exporting a global style.
- this is a special styled component that defines global styles 💅.
*/
export default createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #22babb; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 2rem;
    // Setting the font family to the 'Open Sans' font we imported earlier.
    // We're accessing the 'fontFamily' property from the 'openSans' object.
    font-family: ${openSans.style.fontFamily};
  }
`;
