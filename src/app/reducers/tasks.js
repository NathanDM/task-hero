const task = (state, action) => {
  let newState = {};
  switch (action.type) {
    case 'ADD_TASK':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TASK':
      if (state.id !== action.id) {
        return state;
      }
      newState = state;
      newState.completed = !state.completed;
      return newState;
    default:
      return state;
  }
};


const localTasks = localStorage.getItem('tasks');
const initialState = localTasks ? JSON.parse(localTasks) : [];


const tasks = (state = initialState, action) => {
  let retval;
  switch (action.type) {
    case 'ADD_TASK':
      retval = [
        ...state,
        task(undefined, action)
      ];
      localStorage.setItem('tasks', JSON.stringify(retval));
      return retval;
    case 'TOGGLE_TASK':
      retval = state.map(t =>
        task(t, action)
      );
      localStorage.setItem('tasks', JSON.stringify(retval));
      return retval;
    default:
      return state;
  }
};

export default tasks;
