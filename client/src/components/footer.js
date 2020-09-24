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
                        <ul className="list-unstyled" >
                            <li style={{color: 'white'}}><Link to="/Home" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                                Home</Link> | <Link to="/Contact" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                                    Contact</Link> | <Link to="/Services" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                                        Services</Link> | <Link to="/About" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                                            About</Link></li>  
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