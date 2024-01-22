import Link from "next/link";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Navigation>
        <ul>
          <StyledLink href="/">Spotlight</StyledLink>
          <StyledLink href="/art-pieces">Pieces</StyledLink>
        </ul>
      </Navigation>
      <Main>{children}</Main>
    </>
  );
}
const Navigation = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
  width: 100%;
`;
const Main = styled.main`
  margin-top: 3em;
`;
const StyledLink = styled(Link)`
  border: 1px solid black;
  padding: 0.5em;
  border-radius: 0.3em;
  margin: 0.5em;
`;
