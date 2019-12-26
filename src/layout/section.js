import styled from 'styled-components';

export const Hero = styled.div`
  height: calc(100vh - ${({ theme }) => theme.navbar.height});
  background: beige;
  overflow: hidden;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
