import './_burger-menu.scss';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Menu = styled.button.attrs(({ isActive, burgerStyle }) => ({
  className: `hamburger hamburger--${burgerStyle || 'spin'} ${
    isActive ? 'is-active' : ''
  } sidebar-menu`,
  type: 'button',
}))`
  z-index: 200 !important;
  position: fixed;
  left: 0;
  min-height: ${({ theme }) => (theme && theme.navbar && theme.navbar.height) || '54px'};
  @media (min-width: ${({ theme }) => theme && theme.breakpoints && theme.breakpoints.desktop}) {
    display: none !important;
  }
`;

const SideMenu = styled(Menu)`
  transform: rotate(180deg);
  z-index: inherit;
  position: absolute !important;
  top: ${({ theme }) => (theme && theme.navbar && theme.navbar.height) || '54px'} !important;
  right: 0;
  left: initial !important;
`;

export const BurgerMenu = props => {
  return (
    <Menu onClick={props.toggleOpen} isActive={props.isActive} burgerStyle={props.burgerStyle}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </Menu>
  );
};

BurgerMenu.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  burgerStyle: PropTypes.string,
};

export const SideBurger = props => (
  <SideMenu onClick={props.toggleOpen} isActive={props.isActive} burgerStyle="arrowturn">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </SideMenu>
);

SideBurger.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
