import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Button from '../Button';

export function ContactForm() {
  return (
    <Form>
      <FormGroup>
        <Input
          placeholder="Email"
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Senha"
        />
      </FormGroup>
      <ButtonContainer>
        <Button type="submit" disabled>
          Confirmar
        </Button>
      </ButtonContainer>
    </Form>
  );
}
