import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const HEADER_IMG = "aespa-logo.png";

const LOGO_IMG =
  "https://kpopping.com/documents/54/0/400/first_Aespa_official_symbol_logo-removebg-preview.webp";

const StHeader = styled.header`
  width: "100%";
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: "100%";
  min-height: 90vh;
`;

const StNav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  gap: 3rem;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StNavLink = styled(Link)`
  color: var(--mainWhite);
  font-weight: 600;
  font-size: 1.2rem;
  transition: 0.3s;
  &:hover {
    color: var(--aespa4);
  }
`;

const StFooter = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
  font-size: small;
`;

function Layout({ children }) {
  return (
    <div>
      <StNav>
        <StNavLink to="/">
          <img src={LOGO_IMG} alt="" width="80px" />
        </StNavLink>
        <StNavLink to="/letter">To.aespa</StNavLink>
      </StNav>
      <StHeader>
        <Link to="/">
          <img src={HEADER_IMG} alt="title-logo" width="400px" />
        </Link>
      </StHeader>
      <StLayout>
        <Outlet />
      </StLayout>
      <StFooter>© EB Corp.</StFooter>
    </div>
  );
}

export default Layout;
