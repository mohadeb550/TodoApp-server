
import express from 'express';
import { TodoControllers } from './todo.controller';
const router = express.Router();

// get all todos 
router.get('/', TodoControllers.getAllTodos )

// update a todo
router.patch('/update/:todoId', TodoControllers.updateTodo)

// delete a todo
router.delete('/delete/:todoId', TodoControllers.deleteTodo)

// create new todo 
router.post('/', TodoControllers.createTodo )


export const TodosRoutes = router;