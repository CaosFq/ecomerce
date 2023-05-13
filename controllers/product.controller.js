exports.findAllProducts = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE-GET',
  });
};

exports.findOneProduct = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE-GET',
  });
};

exports.createProduct = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE-POST',
  });
};

exports.patchProduct = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE-PATCH',
  });
};

exports.deleteProduct = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE-DELETE',
  });
};
