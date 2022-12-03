const profileRepository = require('../repositories/profileRepository');

module.exports = {
  async findAll(req, res) {
    var profiles = await profileRepository.findAll();

    return res.json(profiles);
  },

  async findById(req, res) {
    const { id } = req.params;

    var result = await profileRepository.findById(id);

    if (result === -1) {
      return res.status(404).json('Profile not found');
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

    var result = await profileRepository.create(user);

    return res.json(result);
  },
};
