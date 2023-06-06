import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 2.4rem 2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  @media (min-width: 900px) {
    header {
      margin-left: 12rem;

      > div:nth-child(3) {
        width: 60.8rem
      }
    }
  }
`

export const Banner = styled.div`
  margin-top: 4.4rem;
  width: 37.6rem;
  height: 12rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 2.91696px;
  position: relative;
  margin-bottom: 2rem;

  img {
    position: absolute;
    width: 19.1rem;
    height: 14.9rem;
    opacity: 0.8;
    top: -2.9rem;
    left: -2rem;
  }

  .Texting {
    font-family: ${({ theme }) => theme.FONT.POPPINS };
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    width: 20rem;
    padding-top: 3.6rem;
    margin-left: 15rem;

    h1 {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 2.5rem;
    }

    p {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }

  @media (min-width: 900px) {
    margin-top: 17rem;
    width: 111rem;
    height: 26rem;
    margin-bottom: 3rem;

    img {
      width: 65rem;
      height: 41rem;
      top: -13.5rem;
      left: -10rem;
    }

    .Texting {
      width: 52rem;
      padding-top: 8.7rem;
      margin-left: 54rem;

      h1 {
       font-size: 4rem;
       margin-bottom: 1rem;
      }

      p {
        font-size: 1.6rem;
      }

    }
  }
`
export const Section = styled.section`
  width: 43.7rem;
  height: 34.1rem;
  overflow: hidden;
  margin-bottom: 2.4rem;

  h1 {
    font-family: ${({ theme }) => theme.FONT.POPPINS };
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 140%;
    margin-left: 2rem;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 900px) {
    width: 112rem;
    height: 53rem;
    margin-bottom: 4.8rem;

    h1 {
      font-size: 3.2rem;
      line-height: 4.4rem;
    }
  }

`
