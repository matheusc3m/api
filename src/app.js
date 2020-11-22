import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    //  conexão com o banco id:root senha:admin
    //  https://cloud.mongodb.com/v2/5fb45389e84ccc2788e36fe7#security/database/users
    mongoose.connect('mongodb+srv://root:admin@e-lab.vjutz.mongodb.net/<E-lab>?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes)
  }

}
module.exports = new App().server;