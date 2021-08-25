import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.gray[100]};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 60px;

  margin: 0 5px 20px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 10px;

  a{
  color: ${({ theme }) => theme.colors.gray[100]};
  text-decoration: none;
  display: inline-block;
  font-weight: 700;

  transition: .2s ease;
  &:hover{
    opacity: 0.6;
  }
  & + a{
    margin-left: 24px;
  }
  }
`;
