import { put, takeLatest, call } from 'redux-saga/effects';
import {
  FAIL,
  SUCCESS,
  GET,
  REQUEST,
  UPDATE,
  DELETE,
  TASK,
  TASKS,
  CREATE,
} from '../../../constants/actions';
import { getTasksApi, getTaskByIdApi, createTaskApi, updateTaskApi, deleteTaskApi } from '../../../api';

export function* getTasks() {
  try {
    const tasks = yield call(getTasksApi);

    yield put({ type: `${SUCCESS}_${GET}_${TASKS}`, tasks });
  } catch (error) {
    yield put({ type: `${FAIL}_${GET}_${TASKS}`, error: error.message });
  }
}

export function* getTask({ taskId }) {
  try {
    const selectedTask = yield call(getTaskByIdApi, taskId);

    yield put({ type: `${SUCCESS}_${GET}_${TASK}`, selectedTask });
  } catch (error) {
    yield put({ type: `${FAIL}_${GET}_${TASK}`, error: error.message });
  }
}

export function* createTask({ task }) {
  try {
    const newTask = yield call(createTaskApi, task);

    yield put({ type: `${SUCCESS}_${CREATE}_${TASK}`, newTask });
  } catch (error) {
    yield put({ type: `${FAIL}_${CREATE}_${TASK}`, error: error.message });
  }
}

export function* updateTask({ task }) {
  try {
    const updatedTask = yield call(updateTaskApi, task);

    yield put({ type: `${SUCCESS}_${UPDATE}_${TASK}`, updatedTask });
  } catch (error) {
    yield put({ type: `${FAIL}_${UPDATE}_${TASK}`, error: error.message });
  }
}

export function* deleteTask({ taskId }) {
  try {
    yield call(deleteTaskApi, taskId);

    yield put({ type: `${SUCCESS}_${DELETE}_${TASK}`, taskId });
  } catch (error) {
    yield put({ type: `${FAIL}_${DELETE}_${TASK}`, error: error.message });
  }
}

export default function tasksSaga() {
  return [
    takeLatest(`${REQUEST}_${GET}_${TASKS}`, getTasks),
    takeLatest(`${REQUEST}_${GET}_${TASK}`, getTask),
    takeLatest(`${REQUEST}_${CREATE}_${TASK}`, createTask),
    takeLatest(`${REQUEST}_${UPDATE}_${TASK}`, updateTask),
    takeLatest(`${REQUEST}_${DELETE}_${TASK}`, deleteTask),
  ];
}
