import { Container } from './styles';
import Header from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';

export default function Login() {
  return (
    <Container>
      <Header title="Login" />
      <LoginForm />
    </Container>
  );
}
