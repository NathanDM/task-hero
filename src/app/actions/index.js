let nextTaskId = 0;

export const ActionsConst = {
  ADD_TASK: 'ADD_TASK',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TOGGLE_TASK: 'TOGGLE_TASK'
};

export const addTask = (text) => ({
  type: ActionsConst.ADD_TASK,
  id: Date.now() + nextTaskId++,
  text
});

export const setVisibilityFilter = (filter) => ({
  type: ActionsConst.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTask = (id) => ({
  type: ActionsConst.TOGGLE_TASK,
  id
});
