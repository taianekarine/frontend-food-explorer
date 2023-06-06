import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 2.4rem;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  h1 {
    width: 100%;
    font-family: ${({ theme }) => theme.FONT.POPPINS };
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.4rem;
    margin: 0 0 3.6rem 3.4rem;
  }

  @media (min-width: 900px) {
    h1 {
      width: 100%;
      margin-left: 7rem;
    }
  }
`

export const CreateProductForm = styled.form`
  width: 36.4rem;
  margin: 1rem 5rem 5.3rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800 };
  }

  .column {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 1.2rem;
  }

  label {
    font-family: ${({ theme }) => theme.FONT.ROBOTO };
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    text-align: start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    margin-left: 1.2rem;
  }

  .label {
    margin-top: 2.4rem;
  }

  .custom-file-upload {
    width: 100%;
    font-family: ${({ theme }) => theme.FONT.POPPINS };
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-weight: 500;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: .8rem;
    padding-left: 3.2rem;
    cursor: pointer;
  }

  .custom-file-upload:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_100 };
  }

  input[type="file"] {
    display: none;
  }
  
  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/%3E%3C/svg%3E");
    background-color: ${({ theme }) => theme.COLORS.DARK_900 };
    background-repeat: no-repeat;
    background-position: center;
    background-position-x: 32rem;
    height: 4.8rem;
    cursor: pointer;
    font-family: ${({ theme }) => theme.FONT.ROBOTO };
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-weight: 400;
    font-size: 1.4rem;
    border: none;
    padding: 1.6rem;
    border-radius: 4px;
  }

  select:hover {
    filter: brightness(1.2);
  }

  select:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }

  .Ingredients {
    width: 30.7rem;
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
    border-radius: .8rem;
    overflow-y: auto;

    input {
      margin: 0;
      background-color: transparent;
    }
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield; /* para Firefox */
    appearance: textfield; /* para Chrome, Safari e Opera  */
  }

  textarea {
    width: 100%;
    height: 20.4rem;
    border: none;
    resize: none;
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800 };
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    font-family: ${({ theme }) => theme.FONT.ROBOTO };
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;
    padding: 1.4rem;
    margin-left: 1.2rem;
    margin-bottom: 3.2rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_900 };
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500 };
    }
  }

  .save {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400 };
    width: 17.2rem;
    margin: 0 auto;
  }

  @media (min-width: 900px) {
    width: 124.8rem;
    overflow: hidden;

    .row {
      flex-direction: row;
      gap: 3.2rem;
      height: auto;
      margin-left: 0;
      margin-bottom: 3.2rem;
      
      .label {
        margin-top: 0;
        margin-left: 0;
      }
    }

    label {
      margin-left: 0;
    }

    #name-product {
      width: 50.3rem;
    }

    select {
      width: 36.4rem;
    }

    .Ingredients {
      width: 103.7rem;
      overflow: auto;
    }

    #price-product {
      width: 25.1rem;
    }

    textarea {
      width: 124.8rem;
      margin-left: 0;

    }

    .save {
      margin-left: 107.6rem;
    }
  } 
`