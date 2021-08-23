import styled from 'styled-components';

export const Container = styled.header`

  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  width: 500px;
  max-width: 500px;
  height: 60px;
  padding: 16px;
  margin-left: 5px;
  margin-right: 5px;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 10px;

  a{
  color: ${({ theme }) => theme.colors.gray[100]};
  text-decoration: none;
  display: inline-block;
  font-weight: 600;

  & + a{
    margin-left: 24px;
  }
  }
`;
