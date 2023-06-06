import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  padding: 5.6rem 2.8rem 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

   div {
    margin-bottom: 3.6rem;
    position: relative;

    img {
      margin-bottom: 0;
      position: absolute;
      top: 30%;
    }

    input {
      padding-left: 5rem;
    }
  }

  footer {
    margin-top: 36rem;
  }
`

export const CloseMenu = styled(Link)`
  width: 100%;
  font-family:  ${({ theme }) => theme.FONT.ROBOTO };
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
  font-weight: 400;
  font-size: 2.1rem;
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;
  padding-bottom: 2.4rem;
`

export const Logout = styled.a`
  width: 100%;
  font-family:  ${({ theme }) => theme.FONT.POPPINS };
  color: ${({ theme }) => theme.COLORS.LIGHT_600 };
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 140%;
`

export const NewProduct = styled(Link)`
  width: 100%;
  font-family:  ${({ theme }) => theme.FONT.POPPINS };
  color: ${({ theme }) => theme.COLORS.LIGHT_600 };
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 140%;
`

export const Line = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000 };
  margin-bottom: 1rem;

`