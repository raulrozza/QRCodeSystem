import ProductController from 'controllers/ProductController';
import UserController from 'controllers/UserController';
import express from 'express';

const routes = express.Router();

routes.get('/products/random', ProductController.random);

routes.post('/user/discount', UserController.discount);

export default routes;
