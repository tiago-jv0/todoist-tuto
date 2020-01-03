import React from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
export const SideBar = () => {
    return (
        <div className="sideBar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li>
                    <span>
                        <FaInbox></FaInbox>
                    </span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendar></FaRegCalendar>
                    </span>
                    <span>Today</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                    </span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span>
                    <FaChevronDown></FaChevronDown>
                </span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">
                Projects will be here
            </ul>
        </div>
    );
};
