import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks, deleteTask, updateTask, createTask, getTask } from '../../../store/common/actions'

import { TasksContainer } from '../components'

export const Tasks = ({ getTasks, deleteTask, updateTask, createTask, getTask, tasks }) => {
  useEffect(() => { // get tasks only on componentdidmount
    getTasks()
  },[])

  return <TasksContainer
      getTasks={getTasks}
      deleteTask={deleteTask}
      updateTask={updateTask}
      createTask={createTask}
      getTask={getTask}
      tasks={tasks}
  />
}

const mapDispatchToProps = {
  getTasks,
  deleteTask,
  updateTask,
  createTask,
  getTask
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  error: state.tasks.error,
  loading: state.tasks.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
