import React from 'react';
import { Checkbox } from './Checkbox';
import {useTasks} from '../hooks/index'

export const Tasks = () => {
    const {tasks} = useTasks('1');

    console.log(tasks)

    let projectName = '';

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="projectName">{projectName}</h2>
            <ul className="tasks__list">
                {tasks.map((task) => {
                    return (
                        <li key={`${task.id}`}>
                            <Checkbox id={task.id}></Checkbox>
                            <span> {task.task} </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
