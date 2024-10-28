
import httpStatus from 'http-status'
import { NextFunction, Request, Response } from 'express';
import { TodoServices } from './todo.services';

const createTodo = async (req : Request, res: Response, next :NextFunction) => {
  try {
const result = await TodoServices.createTodoIntoDB(req.body);
 
 res.status(httpStatus.OK).json({
  success : true,
  message : 'Todo created successfully',
  data: result,
})
  }catch(error){
    next(error)
  }
}

const getAllTodos = async (req : Request, res: Response, next: NextFunction) => {
  const result = await TodoServices.getAllTodosFromDB();
  
  try {
    res.status(httpStatus.OK).json({
      success : true,
      message : 'Todos retrieved successfully',
      data: result,
    })
  }catch(error){
    next(error)
  }
}

const updateTodo = async (req : Request, res: Response, next :NextFunction) => {
 try{
  const result = await TodoServices.updateTodoIntoDB(req.params.todoId , req.body);
  
  res.status(httpStatus.OK).json({
    success : true,
    message : 'Todo updated successfully',
    data: result,
  })
 }catch(error){
  next(error)
 }
}

const deleteTodo = async (req : Request, res: Response, next: NextFunction) => {
  try {
    const result = await TodoServices.deleteTodo(req.params?.todoId);

  res.status(httpStatus.OK).json({
    success : true,
    message : 'Todo deleted successfully',
    data: result,
  })
  }catch(error){
    next(error)
  }
}

export const TodoControllers = {
    createTodo, getAllTodos, updateTodo, deleteTodo
}