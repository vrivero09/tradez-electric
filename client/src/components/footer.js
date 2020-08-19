import React from 'react';
import "./footer.css";

function footer(){
    return(
        <div className="main-footer">
            <div className="container" >
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4 style={{ color: 'white' }}>Info</h4>
                        <ul className="list-unstyled">
                            <li>Hola</li>
                            <li>hola</li>
                            <li>HOLA</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>What's New</h4>
                        <ul className="list-unstyled">
                            <li>Hola</li>
                            <li>hola</li>
                            <li>HOLA</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Price</h4>
                        <ul className="list-unstyled">
                            <li>Hola</li>
                            <li>hola</li>
                            <li>HOLA</li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact</h4>
                        <ul className="list-unstyled">
                            <li>Hola</li>
                            <li>hola</li>
                            <li>HOLA</li>
                        </ul>
                    </div>
                </div>
               
                {/* Footer Bottom */}
                <div className="row">
                    <p className="col-sm"> 
                    
                        &copy;{new Date().getFullYear()} Tradez Electric LLC INC | All Rights Reserved | Terms of  Services | Privacy 
                    </p>
                </div>  
            </div>
        </div>
    )
}

export default footer;