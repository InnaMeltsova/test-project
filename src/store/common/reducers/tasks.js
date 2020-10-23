import {
  REQUEST,
  SUCCESS,
  FAIL,
  GET,
  UPDATE,
  DELETE,
  TASK,
  TASKS, CREATE,
} from '../../../constants/actions';

export const initialState = {
  tasks: [],
  selectedTask: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${REQUEST}_${GET}_${TASK}`:
    case `${REQUEST}_${GET}_${TASKS}`:
    case `${REQUEST}_${CREATE}_${TASK}`:
    case `${REQUEST}_${UPDATE}_${TASK}`:
    case `${REQUEST}_${DELETE}_${TASK}`:
      return { ...state, error: null, loading: true };

    case `${SUCCESS}_${GET}_${TASKS}`:
      return { ...state, error: null, loading: false, tasks: action.tasks };

    case `${SUCCESS}_${GET}_${TASK}`:
      return { ...state, error: null, loading: false, selectedTask: action.selectedTask };

    case `${SUCCESS}_${CREATE}_${TASK}`:
      return { ...state, error: null, loading: false, tasks: [...state.tasks, action.newTask] };

    case `${SUCCESS}_${UPDATE}_${TASK}`:
      return { ...state, error: null, loading: false, tasks: state.tasks.map(task => task.id === action.updatedTask.id ? action.updatedTask : task) };

      case `${SUCCESS}_${DELETE}_${TASK}`:
      return { ...state, error: null, loading: false, tasks: state.tasks.filter(task => task.id !== action.taskId) };


    case `${FAIL}_${GET}_${TASK}`:
    case `${FAIL}_${GET}_${TASKS}`:
    case `${FAIL}_${CREATE}_${TASK}`:
    case `${FAIL}_${UPDATE}_${TASK}`:
    case `${FAIL}_${DELETE}_${TASK}`:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};
