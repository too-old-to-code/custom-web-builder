import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  justify-content: ${props => (props.center ? 'center' : 'space-between')};
`;

const ItemsRight = styled.div`
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
  visibility: visible;
  margin: 0 20px;
  padding: 6px 0;
  ${props => (props.center ? 'flex: 1' : '')};
  @media (max-width: ${({ theme }) => theme && theme.breakpoints && theme.breakpoints.mobile}) {
    flex: 1;
    justify-content: center;
  }
`;

const CenteredItems = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  align-items: center;
  max-width: 80%;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme && theme.breakpoints && theme.breakpoints.mobile}) {
    visibility: hidden;
  }
`;

export const Navbar = props => {
  let numOfItems = props.itemsRight.length;
  let middleIndex = Math.floor(numOfItems / 2);
  let firstHalf = [...props.itemsRight.slice(0, middleIndex)];
  let secondHalf = [...props.itemsRight.slice(middleIndex)];
  if (numOfItems % 2 !== 0) {
    firstHalf.unshift(<span />);
  }
  return (
    <Nav center={props.center}>
      {props.center ? (
        <CenteredItems>
          {firstHalf}
          {props.logo && <LogoBox>{props.logo}</LogoBox>}
          {secondHalf}
        </CenteredItems>
      ) : (
        <React.Fragment>
          <LogoBox>{props.logo}</LogoBox>
          <ItemsRight>{props.itemsRight}</ItemsRight>
        </React.Fragment>
      )}
    </Nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.any,
  itemsRight: PropTypes.array,
  center: PropTypes.bool,
};
