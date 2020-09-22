import React from 'react';
import "./footer.css";
import {ImFacebook2} from "react-icons/im"
import {SiInstagram} from "react-icons/si"
import { Link } from 'react-router-dom';

function footer(){
    return(
        <div className="main-footer">
            <div className="container" >
                <div className="row">
                    {/* Column 1 */}
                        <ul className="list-unstyled">
                            <li><Link to="/Home">Home</Link> | <Link to="/Contact">Contact</Link> | <Link to="/Services">Services</Link> | <Link to="/About">About</Link></li>  
                        </ul>
                        
                        <ul>
                            <p className="row">
                                <div className="col-xs">
                                    <ImFacebook2 />
                                </div>
                                <div className="col-sm">
                                    <SiInstagram />
                                </div>
                            </p>
                        </ul>

                        <ul>
                            <p className="col col-1-3" > 
                                    &copy;{new Date().getFullYear()} Tradez Electric LLC INC | All Rights Reserved | Terms of  Services | Privacy 
                            </p>

                        </ul>
                </div>
               
                {/* Footer Bottom */}
            </div>
        </div>
    )
}

export default footer;