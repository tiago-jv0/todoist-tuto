import React from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({ id }) => {
    const archiveTask = firebase
        .firestore()
        .collection('Tasks')
        .doc(id)
        .update({ archived: true });

    return (
        <div className="checkbox-holder" data-testid="checkbox-holder" onClick={() => archiveTask()}>
            <span className="checkbox"></span>
        </div>
    );
};
