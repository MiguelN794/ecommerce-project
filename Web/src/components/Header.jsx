import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: hsl(0, 0%, 100%);
  padding: 1.5rem 2rem;
  border-bottom: 1px solid hsl(220, 14%, 75%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: hsl(219, 9%, 45%);
  text-decoration: none;
  font-size: 1rem;
  position: relative;

  &:hover {
    color: hsl(220, 13%, 13%);

    &::after {
      content: '';
      position: absolute;
      bottom: -2.3rem;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: hsl(26, 100%, 55%);
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 0;
`;

const Avatar = styled.img`
  width: 3rem;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: hsl(26, 100%, 55%);
  }
`;

function Header() {
    return (
        <HeaderContainer>
            <Nav>
                <Logo src="/images/logo.svg" alt="sneakers" />
                <NavLink href="#">Collections</NavLink>
                <NavLink href="#">Men</NavLink>
                <NavLink href="#">Women</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Contact</NavLink>
            </Nav>
            <RightSection>
                <CartButton>
                    <img src="/images/icon-cart.svg" alt="cart" />
                </CartButton>
                <Avatar src="/images/image-avatar.png" alt="avatar" />
            </RightSection>
        </HeaderContainer>
    );
}

export default Header;
