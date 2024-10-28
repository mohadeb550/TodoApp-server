
import httpStatus from 'http-status'
import { Request, Response } from 'express';
import { TodoServices } from './todo.services';

const createTodo = async (req : Request, res: Response) => {
 const result = await TodoServices.createTodoIntoDB(req.body);
 
 res.status(httpStatus.OK).json({
  success : true,
  message : 'Todo created successfully',
  data: result,
})
}

const getAllTodos = async (req : Request, res: Response) => {
  const result = await TodoServices.getAllTodosFromDB();
  
  res.status(httpStatus.OK).json({
    success : true,
    message : 'Todos retrieved successfully',
    data: result,
  })
}
const updateTodo = async (req : Request, res: Response) => {
  const result = await TodoServices.updateTodoIntoDB(req.params.todoId , req.body);
  
  res.status(httpStatus.OK).json({
    success : true,
    message : 'Todo updated successfully',
    data: result,
  })
}

const deleteTodo = async (req : Request, res: Response) => {
  const result = await TodoServices.deleteTodo(req.params?.todoId);

  res.status(httpStatus.OK).json({
    success : true,
    message : 'Todo deleted successfully',
    data: result,
  })
}

export const TodoControllers = {
    createTodo, getAllTodos, updateTodo, deleteTodo
}