const intialState = [];

const ADD_TASK = "ADD_TASK";

export const addTaskReducer = (title) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
};

const COMPLETE_TASK = "COMPLETE_TASK";

export const completeTaskReducer = (id) => ({
  type: COMPLETE_TASK,
  payload: { id },
});


const DELETE_TASK = "DELETE_TASK";
export const deleteTaskReducer = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});

export const taskListReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: new Date().getTime().toString(),
          title: action.payload.title,
          completed: action.payload.completed,
        },
      ];
    case COMPLETE_TASK:
        return state.map((task) =>
            task.id === action.payload.id
                ? { ...task, completed: !task.completed }
                : task
        );
    case DELETE_TASK:
        return state.filter((task) => task.id !== action.payload.id); 
        
    default:
      return state;
  }
};
