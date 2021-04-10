import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Skills extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5 pb-5">
                    <h1 className="display-4">Skills</h1>
                    <div className="container w-50 h-100 mx-auto mt-3 pt-3">
                        <div className="nodejs p-3">
                            <h4>NodeJs</h4>
                            <div className="progress" style={{width: "400px", height: "25px", backgroundColor: "grey"}}>
                                <div className="progress-bar bg-warning" style={{width: "60%"}}>60%</div>
                            </div>
                        </div>
                        <div className="reactjs p-3">
                            <h4>ReactJs</h4>
                            <div className="progress" style={{width: "400px", height: "25px", backgroundColor: "grey"}}>
                                <div className="progress-bar bg-success" style={{width: "80%"}}>80%</div>
                            </div>
                        </div>
                        <div className="javascript p-3">
                            <h4>Javascript</h4>
                            <div className="progress" style={{width: "400px", height: "25px", backgroundColor: "grey"}}>
                                <div className="progress-bar bg-success" style={{width: "90%"}}>90%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Skills;