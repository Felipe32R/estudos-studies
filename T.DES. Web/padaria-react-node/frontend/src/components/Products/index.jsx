import { BtnDelete, BtnEdit, Container, Table } from "./styles";
import api from "../../services/axios";
import { useEffect } from "react";
import { useState } from "react";
import { Btn } from "../Btn";

import EditProductModal from "../EditProductModal";
import AddProductModal from "../AddProductModal";


export  function Products() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [editModalIsOpen, setEditIsOpen] = useState(false);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  function openEditModal(product) {
    setEditIsOpen(true);
    setProduct(product)
  }
  function openAddModal() {
    setAddModalIsOpen(true);
  }
  function closeEditModal() {
    setEditIsOpen(false);
  }
  function closeAddModal() {
    setAddModalIsOpen(false);
  }
  function handleDeleteProduct(id){
    if(confirm('Deseja mesmo excluir o produto selecionado?')){
      api.delete(`/produtos/${id}`).then(location.reload())
    }
  }

  useEffect(() => {
    api.get('/produtos').then((response) => setProducts(response.data.objeto))
    
  },[])
  return (
    <>
    <EditProductModal modalIsOpen={editModalIsOpen} closeModal={closeEditModal} product={product}/>
    <AddProductModal modalIsOpen={addModalIsOpen} closeModal={closeAddModal}/>
    <Container>
      <Table>
        <thead>
          <tr>
          <th>Produto</th>
          <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
          <tr key={product.IDProduto}>
            <td >
              {product.Descricao}
            </td>
            <td >
            R$: {product.ValorUnitario}
            </td>
            <td><BtnEdit onClick={() => openEditModal(product)}>Editar</BtnEdit></td>
            <td><BtnDelete onClick={() => handleDeleteProduct(product.IDProduto)}>Deletar</BtnDelete></td>
          </tr>
          ))}
        </tbody>
      </Table>
      <Btn onClick={openAddModal}>Adicionar Produto</Btn>
    </Container>
    </>

  )
}
