import { Container, Logo, SignInContent, CreateAccount } from './styles';
import Logotipe from '../../../assets/logo.svg';
import { Label } from '../../../components/Label';
import{ Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useAuth } from '../../../hooks/auth';
import { useState } from 'react';

export const SignIn = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { signIn } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault()
    signIn({ email, password })
  }

  return (
    <Container>
      <Logo>
        <img src = { Logotipe } alt='Logo tipo da página' />
      </Logo>

      <SignInContent>
          <h1>Faça o login</h1>
          <Label title = {'E-mail'}  htmlFor={'email'}/>
          <Input 
            placeholder = {'Exemplo: exemplo@email.com'} 
            id = {'email'}
            type = {'email'}
            value = { email }
            onChange = { e => setEmail(e.target.value) }
          />

          <Label title = {'Senha'}  htmlFor={'password'}/>
          <Input 
            placeholder = {'No mínimo 6 caracteres'} 
            id = {'password'} 
            min={6} required 
            type = {'password'}
            value = { password }
            onChange = { e => setPassword(e.target.value) }
          />


        <Button 
          title = {'Entrar'}
          type = {'submit'}
          onClick = { handleSignIn }
        />

      </SignInContent>

      <CreateAccount to = '/register'>
        <p>Crie uma conta</p>
      </CreateAccount>

    </Container>
  )
}