import { Container, Favorite, Edit, ImageProduct, Title, Description, Price } from './style';
import HeartIcon from '../../assets/heart.svg';
import FavoriteIcon from '../../assets/isFavorite.svg';
import EditIcon from '../../assets/pencil.svg'
import CaretRightIcon from '../../assets/caretRight.svg';
import { Button } from '../Button';
import { Amount } from '../Amount';
import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';

export const Card = ({ id, title, description, price, onClick, src, to, ...rest }) => {
  const [value, setValue] = useState(1);
  const [favorited, setFavorited] = useState(false);
  const { user } = useAuth();
  const isAdmin = user.isAdmin;

  const handleFavorite = () => {
    const newFavorited = !favorited;
      setFavorited(newFavorited);

    if (newFavorited) {
      localStorage.setItem(`favorite_${id}`, 'true');
    } else {
      localStorage.removeItem(`favorite_${id}`);
    }
  };

  useEffect(() => {
    const isFavorited = localStorage.getItem(`favorite_${id}`);
    if (isFavorited) {
      setFavorited(true);
    }
  }, [id]);

  return (
    <Container {...rest} id={id}>
      {!isAdmin ?
        <Favorite
          onClick={handleFavorite}
        >
          <img src={favorited ? FavoriteIcon : HeartIcon} alt="Imagem para favoritar o produto" />
        </Favorite>
        :
        <Edit
          onClick={onClick}
        >
          <img src={EditIcon} alt="Icone para editar o produto" />
        </Edit>
      }

      <ImageProduct isAdmin={isAdmin}>
        <img src={src} alt={`Imagem do produto ${title}`} />
      </ImageProduct>

      <Title to={to} >
        {title} <img src={CaretRightIcon} alt="Seta apontando para a direita" />
      </Title>

      <Description>
        {description}
      </Description>

      <Price>
        R$ <span> {(price * value).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
        } </span>
      </Price>

      <div className="Buttons">
        {!isAdmin &&
          <Amount
            value={value}
            setValue={setValue}
          />
        }

        {!isAdmin &&
          <Button
            type={'submit'}
            title={'Incluir'}
            className={'Include'}
          />
        }
      </div>


    </Container>
  )
}


