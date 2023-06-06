import { Container, Logo, SignInContent, CreateAccount } from './styles';
import Logotipe from '../../../assets/logo.svg';
import { Label } from '../../../components/Label';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useState } from 'react';
import { api } from '../../../services/api';
import { useNavigate } from 'react-router-dom';


export const SignUp = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()

    if ( !name || !email || !password ) {
      setName('')
      setEmail('')
      setPassword('')
      return alert( 'Todos os campos devem ser preenchidos ')
    }

    if ( password.length < 6 ) {
      setPassword('')
      return alert('A senha deve ter pelo menos 6 caracteres')
    }

    api.post('/users/', { name, email, password })
    .then( () => { 
      alert('Usuário cadastrado com sucesso');
      navigate('/');
    })
    .catch( (error) => {
      if (error.response) {
        alert( error.response.data.message );
      } else {
        alert('Não foi possível concluir o cadastro');
      }
    } ) 
  }


  return (
    <Container>
      <Logo>
        <img src = { Logotipe } alt='Logo tipo da página' />
      </Logo>

      <SignInContent>
          <h1>Crie sua conta</h1>

          <Label title = {'Nome'}  htmlFor={'name'}/>
          <Input 
            placeholder = {'Exemplo: Maria da Silva'} 
            id = {'name'}
            type = {'text'}
            value = { name }
            onChange = { (e) => { setName(e.target.value) }}
          />

          <Label title = {'E-mail'}  htmlFor={'email'}/>
          <Input 
            placeholder = {'Exemplo: exemplo@email.com'} 
            id = {'email'}
            type = {'email'}
            value = { email }
            onChange = { (e) => { setEmail(e.target.value) }}
          />

          <Label title = {'Senha'}  htmlFor={'password'}/>
          <Input 
            placeholder = {'No mínimo 6 caracteres'} 
            id = {'password'} 
            type = {'password'}
            min = {6} required 
            value = { password }
            onChange = { (e) => { setPassword(e.target.value) }}
          />


        <Button 
          title = {'Criar conta'}
          type = {'submit'}
          onClick = { handleSignUp }
        />

      </SignInContent>

      <CreateAccount to = '/'>
        <p>Já tenho uma conta</p>
      </CreateAccount>

    </Container>
  )
}