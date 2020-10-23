import React from 'react';

import './index.scss'
import {DeleteIcon} from './icons'

export const TasksList = ({ tasks, deleteTask, updateTask }) => {

    const inProgressTasks = tasks.filter(t => !t.isComplete);
    const completedTasks = tasks.filter(t => t.isComplete);

    const updateListItem = t => updateTask({ ...t, isComplete: true });

    return <div className="wrap">
        <h2 className="listTitle">In progress</h2>
        <div>
            <ul>
                {
                    inProgressTasks.map(t => <li key={t} className="listItemWrap" onClick={() => updateListItem(t)}>
                        <div className="listItem">{t.body}</div>
                        <div onClick={() => deleteTask(t.id)}>
                            <DeleteIcon/>
                        </div>
                    </li>)
                }
            </ul>
        </div>
        <h2 className="listTitle">Complete</h2>
        <div>
            <ul >
                {
                    completedTasks.map(t => <li key={t} className="listItemWrap completed" >
                        <div className="listItem completed">{t.body}</div>
                        <div onClick={() => deleteTask(t.id)}>
                            <DeleteIcon/>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    </div>
}

export default TasksList;
