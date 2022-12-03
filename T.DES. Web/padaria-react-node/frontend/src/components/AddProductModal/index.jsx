import { useState } from 'react';
import Modal from 'react-modal';
import api from '../../services/axios';
import { Btn } from '../Btn';
import { Content, HeaderContainer } from './styles';

const customStyles = {
  content: {
    width: '400px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function AddProductModal({modalIsOpen, closeModal}) {

  const [Descricao, setDescricao] = useState('');
  const [ValorUnitario, setValorUnitario] = useState(0);

  function handleAddProduct(e){
    e.preventDefault();
    const productBody = {
      Descricao,
      ValorUnitario,
      IDCategoria: 89,
      IDUnidadeMedida: 28,
      Quantidade: '8',
      QuantidadeMinima: '5',
      CodigoDeBarras:'22'
    }
    api.post(`/produtos`, productBody)

    setTimeout(() => location.reload(), 500);
  }

  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Adicionar produto"
      >
        <HeaderContainer>
          <h2>Adicionar produto</h2>
          <button onClick={closeModal}>Fechar</button>
        </HeaderContainer>
        <form>
        <Content>

          <input placeholder='Descrição' onChange={(e) => setDescricao(e.target.value)}/>
          <input  type="number" placeholder='Valor' onChange={(e) => setValorUnitario(e.target.value)}/>
          
          <Btn onClick={handleAddProduct}>Adicionar produto</Btn>
        </Content>
        </form>
      </Modal>
  )
}
