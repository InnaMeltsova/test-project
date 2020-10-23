import { REQUEST, TASK, TASKS, GET, CREATE, DELETE, UPDATE } from '../../../constants/actions';

export const getTask = taskId => ({
  type: `${REQUEST}_${GET}_${TASK}`,
  taskId,
});

export const getTasks = () => ({
  type: `${REQUEST}_${GET}_${TASKS}`,
});

export const createTask = task => ({
  type: `${REQUEST}_${CREATE}_${TASK}`,
  task,
});

export const updateTask = task => ({
  type: `${REQUEST}_${UPDATE}_${TASK}`,
  task
});

export const deleteTask = taskId => {
  console.log(123, taskId);
  return ({
    type: `${REQUEST}_${DELETE}_${TASK}`,
    taskId,
  });
}
