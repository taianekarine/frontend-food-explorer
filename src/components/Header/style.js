import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 42.8rem;
  padding: 5.6rem 0rem 2.4rem;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  @media (min-width: 900px) {
    width: 136.8rem;
  } 

`

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6.8rem;
  margin-left: 3.5rem;

  button {
    width: 21.6rem;
  }


  @media (min-width: 900px) {
    width: 136.8rem;
    gap: 3.2rem;
  } 

`

export const Menu = styled(Link)`
  width: 2.4rem;
  height: 1.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };

  @media (min-width: 900px) {
    display: none;
  } 
`

export const Logo = styled.div`
  width: 17.8rem;
  height: 2.6rem;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

`

export const ReceiptNotification = styled.div`
  width: 2.6rem;
  height: 2.2rem;
  position: relative;
  display: flex;
  
  img {
    height: 100%;
  }

  p {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100 };
    text-align: center;
    font-family: ${({ theme }) => theme.FONT.POPPINS };
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    font-weight: 500;
    font-size: 1.4rem;

    position: absolute;
    top: -1rem;
    left: 1.2rem;
  }

  @media (min-width: 900px) {
    display: none;
  } 

`

export const LogoAdmin = styled.div`
  width: 27.8rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  gap: .8rem;
  position: relative;

  img {
    height: 100%;
  }

  p {
    width: 3.4rem;
    height: 1.9rem;
    font-family: ${({ theme }) => theme.FONT.ROBOTO };
    color: ${({ theme }) => theme.COLORS.CAKE_200 };
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.9rem;
    margin-top: .5rem;
  }

  @media (min-width: 900px) {
    width: 15.7rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    
    p {
      position: absolute;
      top: 2rem;
      left: 13rem;
    }
  } 
`

export const ContentInput = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78.1rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900 };
    border-radius: .5rem;
    gap: 1.4rem;

    input {
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_300 };
      font-family: ${({ theme }) => theme.FONT.ROBOTO };
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.6rem;
      border: none;
      width: 34.4rem;
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500 };

      }
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500 };
    }
  } 

`

export const Logout = styled.button`
  display: none;

  @media (min-width: 900px) {
    width: 3.2rem;
    height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    display: flex;
  }
`