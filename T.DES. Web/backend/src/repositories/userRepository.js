const connection = require('../database/config');

module.exports = {
  async findAll() {
    try {
      var users = await connection('TB_Usuario as u')
        .select(
          'u.IDUSUARIO as id',
          'u.Login as login',
          'u.Nome as nome',
          'u.Senha as senha',
          'u.Status as status'
        )
        .orderBy('id', 'desc');
      return users;
    } catch (error) {
      console.log(error);
    }
  },

  async findById(userId) {
    try {
      const user = await connection('TB_Usuario')
        .where('IDUSUARIO', userId)
        .first();
      if (user === null || user === undefined) {
        return -1;
      } else {
        return user;
      }
    } catch (error) {}
  },
  async create(user) {
    try {
      var userID = await connection('TB_Usuario').insert(user);
      return userID;
    } catch (error) {
      return error.errno;
    }
  },
  async delete(id) {
    try {
      var userID = await connection('TB_Usuario').del(id);
      return userID;
    } catch (error) {
      return error.errno;
    }
  },
};
