import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const img = "aespa-logo.png";

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
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  gap: 5rem;
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
        <StNavLink to="/">Home</StNavLink>
        <StNavLink to="/letter">To.aespa</StNavLink>
      </StNav>
      <StHeader>
        <img
          src={img}
          alt="title-logo"
          style={{ width: "30%", minWidth: "400px" }}
        />
      </StHeader>

      <StLayout>
        <Outlet />
      </StLayout>
      <StFooter>© EB Corp.</StFooter>
    </div>
  );
}

export default Layout;
