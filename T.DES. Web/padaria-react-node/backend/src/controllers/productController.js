const productRepository = require('../repositories/productRepository');

module.exports = {
  getAll: async (req, res) => {
    try {
      const produtos = await productRepository.getAll();

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Produtos listados com sucesso',
        objeto: produtos,
      });
    } catch (err) {
      console.log(err);

      return res
        .status(500)
        .json({ sucesso: false, mensagem: 'Erro ao buscar produto' });
    }
  },
  insert: async (req, res) => {
    try {
      const dados = req.body;
      const retorno = await productRepository.insert(dados);
      if (retorno) {
        return res.status(200).json({
          sucesso: true,
          mensagem: 'Produto inserido com sucesso',
        });
      }
      return res
        .status(400)
        .json({ sucesso: false, mensagem: 'Erro ao inserir produtos' });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ sucesso: false, mensagem: 'Erro ao inserir produto' });
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const dados = req.body;
      const retorno = await productRepository.edit(dados, id);
      if (retorno) {
        return res.status(200).json({
          sucesso: true,
          mensagem: 'produto editado com sucesso',
        });
      }
      return res
        .status(400)
        .json({ sucesso: false, mensagem: 'Erro ao editar produto' });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ sucesso: false, mensagem: 'Erro ao editar produto' });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const retorno = await productRepository.delete(id);
      if (retorno) {
        return res.status(200).json({
          sucesso: true,
          mensagem: 'Produto deletado com sucesso',
        });
      }
      return res
        .status(400)
        .json({ sucesso: false, mensagem: 'Erro ao deletado produto' });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ sucesso: false, mensagem: 'Erro ao deletado produto' });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const produtos = await productRepository.getById(id);
      return res.status(200).json({
        sucesso: true,
        mensagem: 'Produtos buscado com sucesso',
        objeto: produtos,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ sucesso: false, mensagem: 'Erro ao buscar produtos' });
    }
  },
};
