import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 2.4rem;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
`

export const Content = styled.form`
  padding: 0 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.3rem;

  .content-desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 900px) {
    width: 136.8rem;
    flex-direction: row;

    .content-desktop {
      width: 68.7rem;
      flex-direction: column;
      margin-top: 14rem;
      margin-left: 5.8rem;
      align-items: start;
      justify-content: center;
      margin-bottom: 19rem;
    }
  }


`

export const ImageProduct = styled.div`
  width: 26.4rem;
  height: 26.4rem;
  margin: 0 0 1.6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (min-width: 900px) {
    width: 38.9rem;
    height: 38.9rem;
  }

`

export const Title = styled.h1`
  width: 31.6rem;
  text-align: center;
  display: flex;
  font-family: ${({ theme }) => theme.FONT.POPPINS };
  color: ${({ theme }) => theme.COLORS.LIGHT_300 };
  font-weight: 500;
  font-size: 2.7rem;
  line-height: 3.7rem;
  margin-bottom: 2.4rem;
  
  @media (min-width: 900px) {
    width: 68.7rem;
    font-size: 4rem;
    line-height: 5.6rem;
  }
`

export const Description = styled.p`
  width: 31.6rem;
  display: flex;
  justify-content: center;
  text-align: left;
  flex-wrap: wrap;
  height: auto;
  font-family: ${({ theme }) => theme.FONT.POPPINS };
  color: ${({ theme }) => theme.COLORS.LIGHT_300 };
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  margin-bottom: 2.4rem;

  @media (min-width: 900px) {
    width: 68.7rem;
    justify-content: flex-start;
    font-size: 2.4rem;
    line-height: 3.3rem;
  }
`

export const ContentIngredients = styled.div`
  width: 31.6rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;

  @media (min-width: 900px) {
    width: 68.7rem;
    justify-content: flex-start;
  }
`

export const ContentAmount = styled.section`
  width: 31.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  margin-top: 4.8rem;

  @media (min-width: 900px) {
    justify-content: flex-start;

    .edit-btn {
      width: 13.1rem;
    }
  }
`