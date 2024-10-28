import { Schema, model } from "mongoose";
import { TTodo } from "./todo.interface";

const todoSchema = new Schema<TTodo>({
   title : {
        type : String,
        required : true,
    },
   deadline : {
        type: String,
        required: true,
    },
    priority : {
        type: String,
        required: true,
    },
    status : {
        type: String,
        required: true,
    }
}, { timestamps : true })

export const Todo = model <TTodo>('Todo', todoSchema);