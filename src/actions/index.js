export const ADD_TODO = 'addTodo';
export const ADD_FAILED = 'addFailede';

export function addTodo(todo) {
  if (todo.title && todo.body) {
    return {
      type: ADD_TODO,
      payload: todo,
    };
  } else {
    return {
      type: ADD_FAILED,
    };
  }
}
