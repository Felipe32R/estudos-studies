import { Container } from './styles';
import Header from '../../components/Header';
import { ContactForm } from '../../components/ContactForm';

export default function Login() {
  return (
    <Container>
      <Header title="Login" />
      <ContactForm />
    </Container>
  );
}
