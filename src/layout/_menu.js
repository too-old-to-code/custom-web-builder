import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const SPEED = 0.1;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const Menu = styled.nav.attrs(props => ({ className: props.isOpen ? 'is-open' : '' }))`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  transition: visibility ${SPEED}s;
  animation: ${fadeOut} ${SPEED}s ease-in;
  font-family: sans-serif;
  font-size: 1.5em;
  background: ${({ theme }) => (theme && theme.menu && theme.menu.background) || '#3b3939'};
  color: ${({ theme }) => (theme && theme.menu && theme.menu.textColor) || 'grey'};
  padding: ${({ theme }) =>
    theme && theme.navbar && theme.navbar.height
      ? `calc(${theme.navbar.height} + 10px) 0 0 20px;`
      : `50px 0 0 20px;`};
  line-height: 50px;
  &.is-open {
    visibility: visible;
    display: block;
    transition: visibility ${SPEED}s;
    animation: ${fadeIn} ${SPEED}s ease-in;
  }
  > * {
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => (theme && theme.menu && theme.menu.hoverTextColor) || 'grey'};
    }
  }
`;

Menu.propTypes = {
  isOpen: PropTypes.bool,
};

Menu.defaultProps = {
  isOpen: false,
};
