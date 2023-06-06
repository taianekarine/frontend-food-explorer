import { Container, HeaderComponent, Menu, Logo, ReceiptNotification, LogoAdmin, ContentInput, Logout } from './style';
import MenuIcon from '../../assets/menu.svg';
import LogoIcon from '../../assets/logo.svg';
import ReceiptIcon from '../../assets/receipt.svg';
import LogoutIcon from '../../assets/logout.svg';
import { FiSearch } from 'react-icons/fi';
import { Button } from '../Button';
import { Receipt }  from '../Icons/Receipt';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
// import { useState, useEffect } from 'react';

export const Header = ( {onChange} ) => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const isAdmin = user.isAdmin;

  const handleClickNewProduct = () => {
    navigate('/create')
  }

  return (
    <Container>
      <HeaderComponent>
        <Menu to = '/menu'>
          <img src={MenuIcon} alt="Imagem para ir ao Menu" />
        </Menu>

        {!isAdmin ?
          <Logo>
           <img src={LogoIcon} alt="Logo da página" />
          </Logo>
            :
          <LogoAdmin>
            <img src={LogoIcon} alt="Logo da página" />
            <p>admin</p>
          </LogoAdmin>
        }

        {!isAdmin &&
          <ReceiptNotification>
            <button>
              <img src={ReceiptIcon} alt="Imagem para acessar os pedidos" />
            </button>
            <p>0</p>
          </ReceiptNotification>
        }

        <ContentInput>
          <FiSearch />
          <input 
            type = {'text'} 
            name = {'search'} 
            id = {'search'} 
            placeholder = {'Busque por pratos ou ingredientes'}
            onChange = { onChange }
          />
        </ContentInput>

        {!isAdmin ?
          <Button 
            icon = { Receipt }
            title = { `Pedidos ${`(0)`}` }
          />
            :
          <Button 
            title = { 'Novo prato' }
            onClick = { handleClickNewProduct }
          />
        }

        <Logout onClick={ signOut }>
          <img src = { LogoutIcon } alt = { 'Imagem para sair' } />
        </Logout>

      </HeaderComponent>

    </Container>
  )
}