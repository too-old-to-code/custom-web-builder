import styled from 'styled-components';

export const MainArea = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding-top: ${props => props.theme.navbar.height};
`;
