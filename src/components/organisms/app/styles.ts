import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #282c34;
  text-align: center;
`;
export const Nav = styled.nav`
  padding: 1rem;
  a {
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
  }
`;

export const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Link = styled.a`
  color: #61dafb;
`;

export const Button = styled.button`
  font-size: calc(10px + 2vmin);
`;
