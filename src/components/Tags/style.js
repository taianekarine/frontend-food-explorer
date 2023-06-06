import styled from 'styled-components';

export const Container = styled.span`
  width: fit-content;
  height: 3.2rem;
  padding: .7rem;
  border-radius: .8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000 };
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
  display: flex;
  align-items: center;
`