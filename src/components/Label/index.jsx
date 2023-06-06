import { Container } from './style';

export const Label = ({ title, htmlFor }) => {
  return (
    <Container htmlFor={htmlFor}>
      {title}
    </Container>
  )
}