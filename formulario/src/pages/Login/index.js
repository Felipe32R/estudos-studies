import { Link } from 'react-router-dom';
import { Container } from './styles';
import Header from '../../components/Header';

export default function Login() {
  return (
    <Container>
      <Header>
        <h1>Login</h1>
      </Header>
      <Link to="/home">to home</Link>
    </Container>
  );
}
