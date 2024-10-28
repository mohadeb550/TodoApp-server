import { TTodo } from "./todo.interface";
import { Todo } from "./todo.model";

const createTodoIntoDB = async (payload: TTodo) => {
    const result = await Todo.create(payload);
    return result;
}

const getAllTodosFromDB = async () => {
    // add the sort 
  const result = await Todo.find().sort({ status : 'descending'});
  return result;
}


const updateTodoIntoDB = async (todoId: string , payload: Partial<TTodo>) => {
    const result = await Todo.findByIdAndUpdate(todoId, payload ,{new: true });
    return result;
}

const deleteTodo = async (todoId: string) => {
    const result = await Todo.findByIdAndDelete(todoId);
    return result; 
}

export const TodoServices = {
   createTodoIntoDB, getAllTodosFromDB, updateTodoIntoDB, deleteTodo
}