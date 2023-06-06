import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200 };
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;
  gap: 1.2rem;
  isolation: isolate;
  border: .1rem solid #000204;
  border-radius: .8rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;

  &:hover {
    transform: scale(1.05);
    transition: 700ms;
  }

  .Include {
    height: 3.2rem;
  }

  .Buttons {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 900px) {
    width: 30rem;
    height: 44rem;

    .Buttons {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    margin-top: 2rem;
  }

  }
`

export const Favorite = styled.button`
  position: absolute;
  width: 2.4rem;
  height: 2.2rem;
  left: 17rem;
  top: 1.6rem;

  @media (min-width: 900px) {
    left: 25rem;
    top: 1.6rem;
  }
`

export const Edit = styled.button`
  position: absolute;
  width: 2.4rem;
  height: 2.2rem;
  left: 17rem;
  top: 1.6rem;

  @media (min-width: 900px) {
    left: 25rem;
    top: 1.6rem;
  }
`

export const ImageProduct = styled.div` 
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 50%;
  margin-top: ${({ isAdmin }) => isAdmin ? '5rem' : 'none' };

  img  {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (min-width: 900px) {
    width: 17.6rem;
    height: 17.6rem;
  }
`

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT.POPPINS };
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300 };

  img {
    width: .4rem;
    height: 1.4rem;
    text-align: center;
    margin-left: 1rem;
  }

  @media (min-width: 900px) {
    font-size: 2.2rem;
    line-height: 3.3rem;
    img {
      width: .6rem;
    }
  }
`

export const Description = styled.p`
  width: 25.6rem;
  height: 4.8rem;
  overflow: hidden;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  font-family: ${({ theme }) => theme.FONT.ROBOTO };
  color: ${({ theme }) => theme.COLORS.LIGHT_400 };

  @media (max-width: 900px) {
    display: none;
  }
`

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT.ROBOTO };
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.COLORS.CAKE_200 };

  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200 };
    margin-left: 0.5rem;
  }
`