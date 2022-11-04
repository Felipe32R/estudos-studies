const userRepository = require('../repositories/userRepository');

module.exports = {
  async findAll(req, res) {
    var users = await userRepository.findAll();

    return res.json(users);
  },

  async findById(req, res) {
    const { id } = req.params;

    var result = await userRepository.findById(id);

    if (result === -1) {
      return res.status(404).json('User not found');
    } else {
      return res.json(result);
    }
  },

  async create(req, res) {
    var allUserData = req.body;

    var user = {
      Login: allUserData.Login,
      nome: allUserData.Nome,
      senha: allUserData.Senha,
      status: allUserData.Status,
      IDPerfil: allUserData.IDPerfil,
    };

    var result = await userRepository.create(user);

    return res.json(result);
  },
  async delete(req, res) {
    const { id } = req.params;

    var result = await userRepository.delete(id);

    return res.json(result);
  },
};
