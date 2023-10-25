import Link from "next/link";
/*
Importing the 'styled' function/object from the 'styled-components' module/library,
which allows us to write CSS in our JavaScript.
*/
import styled from "styled-components";

// creating a styled button component
const StyledButton = styled.button`
  background-color: var(--primary-color);
  padding: 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: var(--secondary-color);
  }
`;

// creating a styled Link component
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  &:hover {
    color: var(--secondary-color);
  }
`;

export default function HomePage() {
  return (
    <>
      <h1>
        Hello Surfers{" "}
        <span role="img" aria-label="A emoji indicating the cool surfer course">
          🏄
        </span>
      </h1>
      <StyledButton>The Button</StyledButton>
      <br />
      <StyledLink href="/">The Link</StyledLink>
    </>
  );
}
