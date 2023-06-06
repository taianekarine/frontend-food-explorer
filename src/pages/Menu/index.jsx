import  { Container, CloseMenu, NewProduct, Logout, Line } from './style';
import Close from '../../assets/close.svg';
import { Search } from '../../components/Icons/Search';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user.isAdmin;

  const SignOut = () => {
    signOut();
    navigate('/');
  }

  return  (
    <Container>
      <CloseMenu to = '/' >
        <img src={Close} alt='Imagem para fechar o menu' />
        <p>Menu</p>
      </CloseMenu>

      <Input
        icon = {Search}
        className = 'Search'
        placeholder = {'Busque por pratos ou ingredientes'}
      />

      { isAdmin ? <NewProduct to = '/create' > Novo produto </NewProduct> : <></> }

      { isAdmin ? <Line/> : <></> }

      <Logout onClick = { SignOut }> Sair </Logout> 
      { isAdmin ?<Line/> : <></> }

      <Footer />
    </Container>
  )

}