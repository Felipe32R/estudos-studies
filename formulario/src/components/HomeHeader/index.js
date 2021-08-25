import { Link } from 'react-router-dom';
import Header from '../Header';
import { Container, Nav } from './styles';

export default function HomeHeader() {
  return (
    <Container>
      <Header title="<Logo>" />
      <Nav>
        <Link to="/home">Home</Link>
        <Link to="/list">Lista</Link>
        <Link to="/add">Adicionar</Link>
      </Nav>
    </Container>
  );
}
