import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  font-family: ${({ theme }) => theme.FONT.POPPINS };
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.3rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300 };

  display: flex;
  align-items: center;
  justify-content: start;
  margin: 3.4rem 0rem 2.4rem 3.2rem;

  img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1rem;
    margin-top: .2rem;
  }

  @media (min-width: 900px) {
    justify-content: start;
    margin: 3.4rem 0rem 2.4rem 6.5rem;

  }

`