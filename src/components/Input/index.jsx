import { Container } from './style';

export const Input = ({ type, id, icon:Icon, ...rest }) => {
  return (
    <Container>
      { Icon && <Icon size={20}/>}
      <input type = {type} id = {id} {...rest}/>
    </Container>
  )
}