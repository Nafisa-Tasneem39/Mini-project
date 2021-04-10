import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProfilePic from '../img/profile.jpg';


class AboutMe extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="container bg-white mt-3 pt-5">
                    <div className="row">
                        <div className="col-lg-7 pt-5">
                            <h1 style={{fontSize: "60px"}}>Nafisa Tasneem</h1>
                            <p> A responsible position providing for career growth, utilizing innovative skills, compatibility with others and educational experiences. Desire to contribute effectively through facing new challenging responsibilities and work independently in an environment where professionalism & responsibility are of prime concern.</p>
                        </div>
                        <div className="col pl-5 text-center">
                            <img className="border rounded-circle" src={ProfilePic} alt="Profilepicture" style={{height: "300px", width: "350px"}}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default AboutMe;