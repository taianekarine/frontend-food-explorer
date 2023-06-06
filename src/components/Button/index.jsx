import { Container } from './style';

export const Button = ({ title, type, loading = false, icon:Icon, ...rest}) => {
  return (
    <Container type = { type } disabled = { loading } {...rest}>
      { Icon && <Icon size={17}/>}
      { loading ? 'Carregando' : title }
    </Container>
  )
}