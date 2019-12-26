// import './navbar.scss';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// ${/*props => props.theme.navbar*/}
const Nav = styled.nav`
  z-index: 50;
  color: white;
  background-color: grey;
  background: ${({ theme }) => (theme && theme.navbar && theme.navbar.background) || '#3b3939'};
  color: ${({ theme }) => (theme && theme.navbar && theme.navbar.textColor) || 'grey'};
  font-family: sans-serif;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: ${({ theme }) => (theme && theme.navbar && theme.navbar.height) || '54px'};
  justify-content: space-between;
`;

const MyDiv = styled.div`
  display: flex;
  margin-right: 20px;
  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    text-decoration: none;
    position: relative;
    &.selected {
      background: ${({ theme }) =>
        (theme && theme.navbar && theme.navbar.backgroundSelected) || 'black'};
    }
    &:hover {
      color: ${({ theme }) => (theme && theme.navbar && theme.navbar.hoverTextColor) || 'black'};
    }
  }
  @media (max-width: ${({ theme }) => theme && theme.breakpoints && theme.breakpoints.mobile}) {
    display: none !important;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  margin: 0 20px;
  padding: 6px 0;
  @media (max-width: ${({ theme }) => theme && theme.breakpoints && theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const Navbar = props => {
  return (
    <Nav>
      <LogoBox>{props.logo}</LogoBox>
      <div style={{ display: 'flex' }}>{}</div>
      <MyDiv>{props.itemsRight}</MyDiv>
    </Nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.any,
  itemsRight: PropTypes.object,
};
