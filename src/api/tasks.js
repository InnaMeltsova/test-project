import axios from 'axios';

import { BASE_URL, TASKS } from '../constants/api';

export const getTasksApi = async () => {
  try {
    const res = await axios.get(`${BASE_URL}${TASKS}`);

    return res.data;
  } catch (err) {
    throw (err && err.response && err.response.data) || err;
  }
};

export const getTaskByIdApi = async taskId => {
  try {
    const res = await axios.get(`${BASE_URL}${TASKS}/${taskId}`);

    return res.data;
  } catch (err) {
    throw (err && err.response && err.response.data) || err;
  }
};

export const createTaskApi = async newTask => {
  try {
    const res = await axios.post(`${BASE_URL}${TASKS}`, newTask);

    return res.data;
  } catch (err) {
    throw (err && err.response && err.response.data) || err;
  }
};

export const updateTaskApi = async updatedTask => {
  try {
    const res = await axios.put(`${BASE_URL}${TASKS}`, updatedTask);

    return res.data;
  } catch (err) {
    throw (err && err.response && err.response.data) || err;
  }
};

export const deleteTaskApi = async taskId => {
  try {
    const res = await axios.delete(`${BASE_URL}${TASKS}/${taskId}`);

    return res.data;
  } catch (err) {
    throw (err && err.response && err.response.data) || err;
  }
};
