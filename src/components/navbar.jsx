import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class NavBar extends Component {
    state = { 

     }


    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar bg-dark navbar-dark navbar-expand-sm justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Education</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default NavBar;