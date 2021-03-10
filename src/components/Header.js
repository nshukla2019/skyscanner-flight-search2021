import React from 'react';
import './Header.css';


function Header(props) { 
    // another function
    return(
        <div className="header">
            {
            //props.title takes in the argument props from Header(props)
            // .title is the "title" we defined in the Header tag in App.js
            // property of props.title is the string "SkyScanner Flights"
            }
            {props.title} 
        
        {
        // figure this out
        //<img src={logo} alt="logo"></img>    
        }
       
        </div>
    )
}

export default Header;