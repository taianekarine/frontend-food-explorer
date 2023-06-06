import styled from 'styled-components';

export const Container = styled.div`
  width: 13.6rem;
  display: flex;
  height: 3.2rem;
  align-items: center;
  padding: 0 1rem 0;
  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.LIGHT_600 };
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `none`};
  border-radius: .8rem;
  
  > button {
    border: none;
    background: none;
    color: ${({ theme, isNew }) => isNew ?  theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100 };
    font-size: 1.6rem;
    padding-top: .5rem;
  }

  input {
    height: 3.2rem;
    width: 9.6rem;
    color: ${({ theme, isNew }) => isNew ?  theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100 };

    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

`;