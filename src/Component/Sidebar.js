import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
function Sidebar() {
    return (
        <>
            <div class="sidebar">
                <ul>
                    <li>
                        <Link to="dashboard">
                            <i class="fas fa-th-large"></i>
                            <div>Dashboard</div>
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-user-graduate"></i>
                            <div>Students</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-chalkboard-teacher"></i>
                            <div>Teachers</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-users"></i>
                            <div>Employees</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-chart-bar"></i>
                            <div>Analytics</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-hand-holding-usd"></i>
                            <div>Earnings</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-cog"></i>
                            <div>Settings</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-question"></i>
                            <div>Help</div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar