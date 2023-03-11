import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartIcon from './CartIcon';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled(NavLink)`
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  color: #000;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
  }
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: #000;
  margin-left: 20px;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }
`;

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Logo to="/">E-commerce</Logo>
        <NavLinks>
          <NavLinkItem exact={true.toString()} to="/">
            Home
          </NavLinkItem>
          <NavLinkItem to="/products">Product</NavLinkItem>
          <NavLinkItem to="/cart">
            <CartIcon />
          </NavLinkItem>
          <NavLinkItem to="/checkout">Checkout</NavLinkItem>
        </NavLinks>
      </Nav>

      <Footer>© 2023 E-commerce. All rights reserved.</Footer>
    </Container>
  );
};

export default Navbar;
