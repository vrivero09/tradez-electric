import React from 'react';
import "./footer.css";
import {ImFacebook2} from "react-icons/im"
import {SiInstagram} from "react-icons/si"

function footer(){
    return(
        <div className="main-footer">
            <div className="container" >
                <div className="row">
                    {/* Column 1 */}
                        <ul className="list-unstyled">
                            <li>Home | Contact | Services | About</li>  
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
                            <p className="col-sm" > 
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