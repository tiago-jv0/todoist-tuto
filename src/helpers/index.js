import {collatedTasks} from '../constants/index'

export const collatedTasksExist = (selectedProject) => {
    collatedTasksExist.find((task) => task.key === selectedProject);
};
