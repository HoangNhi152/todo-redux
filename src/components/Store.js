const initialState = {
    tasks: [],
  };
  
  const ADD_TASK = "ADD_TASK";
  const DELETE_TASK = "DELETE_TASK";
  const UPDATE_TASK = "UPDATE_TASK";
  
  export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return { ...state, tasks: [...state.tasks, action.payload] };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case UPDATE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
          ),
        };
      default:
        return state;
    }
  };