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

export default function EditProductModal({modalIsOpen, closeModal, product}) {

  const [Descricao, setDescricao] = useState(product.Descricao);
  const [ValorUnitario, setValorUnitario] = useState(product.ValorUnitario);

  function handleEditProduct(e){
    e.preventDefault();
    const productBody = {
      Descricao,
      ValorUnitario
    }
    api.put(`/produtos/${product.IDProduto}`, productBody)

    setTimeout(() => location.reload(), 500);
  }

  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Editar produto"
      >
        <HeaderContainer>
          <h2>Editar produto</h2>
          <button onClick={closeModal}>Fechar</button>
        </HeaderContainer>
        <form>
        <Content>

          <input defaultValue={product.Descricao} placeholder='Descrição' onChange={(e) => setDescricao(e.target.value)}/>
          <input defaultValue={product.ValorUnitario} type="number" placeholder='Valor' onChange={(e) => setValorUnitario(e.target.value)}/>
          
          <Btn onClick={handleEditProduct}>Salvar alterações</Btn>
        </Content>
        </form>
      </Modal>
  )
}
