import styled from 'styled-components';

export const Container = styled.div`
  width: 10rem;
  height: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  button {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-family: ${({ theme }) => theme.COLORS.ROBOTO };
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
  }

`