import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <h1>Login</h1>
      <Link to="/home">to home</Link>

    </Container>
  );
}
