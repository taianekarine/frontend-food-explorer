import { Container } from './style';
import PlusIcon from '../../assets/plus.svg';
import MinusIcon from '../../assets/minus.svg';
import { useState } from 'react';

export const Amount = ( { value, setValue }) => {
  // const valueEntrie = value.toString().padStart(2, '0');

  const decrement = (e) => {
    e.preventDefault();
    if ( value < 2 ){
      alert('Você não pode fazer um pedido menor que 1!');
     return setValue(+1);
    }

    setValue(value - 1);
  };

  const increment = (e) => {
    e.preventDefault();

    setValue(value + 1);
  };

  return (
    <Container>
      <button onClick={decrement}>
        <img src={MinusIcon} alt="Imagem para subtrair" />
      </button>

      <p>{value.toString().padStart(2, '0')}</p>

      <button onClick={increment}>
        <img src={PlusIcon} alt="Imagem para somar" />
      </button>
    </Container>
  );
};
