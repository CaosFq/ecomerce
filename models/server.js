const express = require('express');
const { productRouter } = require('../routes/product.route');
const cors = require('cors');
//const morgan = require('morgan');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3004;

    //Path Routes
    this.paths = {
      product: '/api/v1/products',
    };

    //Connect to db
    // this.database();

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.product, productRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server Running On Port', this.port + '😎😎!!..');
    });
  }
}

module.exports = Server;
