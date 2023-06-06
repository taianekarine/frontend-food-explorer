import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100 };
  color: ${({ theme }) => theme.COLORS.LIGHT_300 };
  font-family: ${({ theme }) => theme.FONT.POPPINS };
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: center;
  border-radius: .5rem;
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  &:disabled {
    opacity: 0.5;
  }
`