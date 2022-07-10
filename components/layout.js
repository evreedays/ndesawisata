import Header from "./header";
import Footer from "./footer";
import styled from "@emotion/styled";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  margin: 0;
`;
