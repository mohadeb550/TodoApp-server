
import express from 'express';
import { TodosRoutes } from '../modules/todo/todo.route';


const router = express.Router()


const moduleRoutes = [
    {
      path: '/todos',
      route: TodosRoutes,
    },
  ];
  
  moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;