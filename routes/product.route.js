const { Router } = require('express');
productController = require('./../controllers/product.controller');
const router = Router();

router.get('/', productController.findAllProducts);

router.get('/', productController.findOneProduct);

router.post('/', productController.createProduct);

router.patch('/', productController.patchProduct);

router.delete('/', productController.deleteProduct);

module.exports = {
  productRouter: router,
};
