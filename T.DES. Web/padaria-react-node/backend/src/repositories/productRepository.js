const db = require('../config/database');

module.exports = {
  getAll: async () => {
    try {
      const modelSaves = await db.select().table('TB_Produtos');

      if (!modelSaves) {
        return null;
      }

      return modelSaves;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  insert: async (Produtos) => {
    try {
      const retorno = await db.insert(Produtos).into('TB_Produtos');
      return retorno;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  edit: async (Produtos, id) => {
    try {
      const retorno = await db
        .update(Produtos)
        .table('TB_Produtos')
        .where('TB_Produtos.IDProduto', id);
      return retorno;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  delete: async (id) => {
    try {
      const retorno = await db
        .select()
        .table('TB_Produtos')
        .where('TB_Produtos.IDProduto', id)
        .del();
      return retorno;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getById: async (id) => {
    try {
      const Produtos = await db
        .select()
        .table('TB_Produtos')
        .where('TB_Produtos.IDProduto', id);
      return Produtos;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
