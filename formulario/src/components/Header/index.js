import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Header({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
