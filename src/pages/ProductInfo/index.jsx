import { Container, Content, ImageProduct, Title, Description, ContentIngredients, ContentAmount } from './style';
import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Tags } from '../../components/Tags';
import { Amount } from '../../components/Amount';
import { Button } from '../../components/Button';
import { Receipt } from '../../components/Icons/Receipt';
import { Footer } from '../../components/Footer';
import { useAuth } from '../../hooks/auth';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export const ProductInfo = () => {
  const [ data, setData ] = useState(null);
  const [ ingredients, setIngredients ] = useState([]);
  const [value, setValue] = useState(1);

  const { user } = useAuth();
  const isAdmin = user.isAdmin;

  // const navigate = useNavigate();
  const params = useParams();

  const handleEditProduct = ( id ) => {
    window.location.href = `/edit/${id}`
  }

  useEffect( () => {
    const fetchProduct = async () => {
      const response = await api.get(`/products/${ params.id }`);
      setData(response.data);
      setIngredients(response.data.convertIngredients);

    }

    fetchProduct()

  },[]);

  return (
    
    <Container>
      <Header/>
      <Return/>

      <Content>
        {
          data &&
          <>
        <ImageProduct>
          <img src = { `${ api.defaults.baseURL}/files/${data.product.image}` } alt = { `Imagem do produto ${data.product.title }`} />
        </ImageProduct>

        <div className="content-desktop">
          <Title>
            { data.product.title }
          </Title>

          <Description>
            { data.product.description }
          </Description>

          <ContentIngredients>
            {
              ingredients && ingredients.map( (ingredient, index) => (
                <Tags
                  key = { index }
                  title = { ingredient }
                />
              ))
            }
          </ContentIngredients>

          {!isAdmin ?
            <ContentAmount>
              <Amount 
                value = { value }
                setValue={setValue}
              />
              <Button 
                title = {`pedir - R$ ${(data.product.price * value).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                } `}
                icon={Receipt}
                type= {'button'}
              />
            </ContentAmount>
              :
            <ContentAmount>
              <Button 
                title = {'Editar Prato'}
                type= {'button'}
                className = {'edit-btn'}
                onClick = { () => handleEditProduct(params.id) }
              />
            </ContentAmount>
          }

        </div>   
          </>
        }
 
      </Content>

      <Footer />


    </Container>
  )
  
}
