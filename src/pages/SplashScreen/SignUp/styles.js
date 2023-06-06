import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  margin: 15.8rem auto 0;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    width: 136.8rem;
    display: grid;
    grid-template-areas: 
    'A B'
    'A C';
  } 
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7.3rem;

  @media (min-width: 900px) {
    display: grid;
    grid-area: A;
    margin-right: 30rem;
  } 
`

export const SignInContent = styled.form`
  width: 31.6rem;
  margin-left: 6.5rem;
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  
  label {
    margin-bottom: .8rem
  }

  div {
    margin-bottom: 3.2rem
  }

  button {
    color: white;
  }

  h1 {
    display: none;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-area: B;

    h1 {
      display: flex;
      font-family: ${({ theme }) => theme.FONT.POPPINS };
      color: ${({ theme }) => theme.COLORS.LIGHT_100 };
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 4.4rem;
      margin-bottom: 3.2rem;
      justify-content: center;
    }
  } 
`
export const CreateAccount = styled(Link)`
  display: flex;
  justify-content: center;
  margin-left: 3.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };

  @media (min-width: 900px) {
    display: grid;
    grid-area: C;
    padding-left: 4rem;

  } 
`
