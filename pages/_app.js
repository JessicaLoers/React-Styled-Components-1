/*
- importing 'GlobalStyle' from the '../styles' directory. 
- this likely refers to the global styling created using 'createGlobalStyle' from 'styled-components'.
*/
import GlobalStyle from "../styles";

/*
- in Next.js, the App component is a top-level component that wraps all other pages 🫂. 
- it's often used to keep state 😉 or include layouts/styles that should be applied to all pages.
*/

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Applying the global styles to the entire application. */}
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
