import styled from 'styled-components';

export const Container = styled.div`
  width: 43.7rem;
  height: auto;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  display: flex;
  gap: 1.6rem;
  padding-right: 2rem;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }

  .ButtonLeft {
    position: absolute;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 8px;
    z-index: 1;
    width: 5rem;
    height: 44rem;

    button {
      width: 15rem;
      height: 44rem;
    }
  }

  .ButtonRight {
    position: absolute;
    left: 124rem;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    border-radius: 8px;
    z-index: 1;
    width: 10rem;
    height: 44rem;

    button {
      width: 15rem;
      height: 44rem;
    }
  }

  @media (min-width: 900px) {
    width: 110rem;
    gap: 2.7rem;
  }

  @media (max-width: 900px) {
    .ButtonLeft {
      display: none;
    }

    .ButtonRight {
      display: none;
    }
  }
`