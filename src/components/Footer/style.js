import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600 };

  p {
    font-family: ${({ theme }) => theme.FONT.DM_SANS };
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  @media (min-width: 900px) {
    justify-content: space-between;
    padding: 0 14rem;
    
    svg {
      width: 18.6rem;
      height: 3rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }

`