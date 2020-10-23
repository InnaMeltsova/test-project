import React, { useState } from 'react';

import { TasksList, NewTask } from '../../components'

import './index.scss'

export const TasksContainer = ({ getTasks, deleteTask, updateTask, createTask, getTask, tasks }) => {

  return <div className="container">
    <h4 className="title">ToDo List</h4>
    <NewTask createTask={createTask}/>
    <TasksList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
  </div>
}

export default TasksContainer;
