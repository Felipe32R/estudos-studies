const router = require('express').Router();

const productController = require('../controllers/productController');

router.get('/', productController.getAll);

router.get('/:id', productController.getById);

router.post('/', productController.insert);

router.put('/:id', productController.edit);

router.delete('/:id', productController.delete);

module.exports = router;
