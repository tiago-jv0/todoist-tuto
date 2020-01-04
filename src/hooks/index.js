import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers/index';
import moment from 'moment';

export const useTasks = (selectedProject) => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let unsubscribed = firebase
            .firestore()
            .collection('Tasks')
            .where('userId', '==', '2457');

        unsubscribed =
            selectedProject && !collatedTasksExist(selectedProject)
                ? (unsubscribed = unsubscribed.where('projectId', '==', selectedProject))
                : selectedProject === 'TODAY'
                ? (unsubscribed = unsubscribed.where('date', '==', moment().format('DD/MM/YYYY')))
                : selectedProject === 'INBOX' || selectedProject === 0
                ? (unsubscribed = unsubscribed.where('date', '==', ''))
                : unsubscribed;

        unsubscribed = unsubscribed.onSnapshot((snapshot) => {
            const newTasks = snapshot.docs.map((task) => ({
                id: task.id,
                ...task.data(),
            }));

            setTasks(
                selectedProject === 'NEXT_7'
                    ? newTasks.filter(
                          (task) =>
                              moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true
                      )
                    : newTasks.filter((task) => task.archived !== true)
            );

            setArchivedTasks(newTasks.filter((task) => task.archived !== false));
        });

        return () => unsubscribed();
    }, [selectedProject]);

    return { tasks, archivedTasks };
};

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', '2457')
            .orderBy('projectId')
            .get()
            .then((snapshot) => {
                const allProjects = snapshot.docs.map((project) => {
                    return {
                        ...project.data(),
                        docId: project.id,
                    };
                });

                if(JSON.stringify(allProjects) !== JSON.stringify(projects)){
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return {projects , setProjects}
};
