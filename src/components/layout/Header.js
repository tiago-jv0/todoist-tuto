import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = (props) => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="../images/logo.png" alt="Todoist" />
                </div>
                <div className="settings">
                    <ul>
                        <li>*</li>
                        <li>
                            <FaPizzaSlice></FaPizzaSlice>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
