import { Container } from './style';

export const InputValue = ({ type, id, ...rest }) => {

  return (
    <Container>
      <input 
        type = {'text'} 
        id = {id}
        {...rest}
      />
    </Container>
  )
}