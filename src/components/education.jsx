import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Education extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <h1 className="display-4">Eduacation</h1>
                    <div className="container pt-4">
                        <h2>B.Sc in Computer Science and Engineering</h2>
                        <h4>University Of Asia Pacific</h4>
                        <h5 className="text-info">2017-2021</h5>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Education;