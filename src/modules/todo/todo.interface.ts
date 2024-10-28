
export type TTodo = {
    _id? : string,
    title : string,
    deadline : string,
    priority : 'low' | 'medium' | 'high',
    status : 'ongoing'| 'completed'
};