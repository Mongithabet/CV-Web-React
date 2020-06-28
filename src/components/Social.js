import React, { Component } from 'react'
import '../social.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation
  } from "react-router-dom";
 
export default class Social extends Component {
   
	
    render() {
        return (
			<Router>
            <div>
         <div className="container">
    <div className="row">
      <div>
        <ul className="social-network social-circle">
          <li><Link to={this.Test} className="icoGit" title="Git"><i className="fa fa-github"></i></Link></li>
		  <li><a href="https://www.facebook.com/thabet.mongi" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>

		  <li><a href="https://www.facebook.com/thabet.mongi" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
          <li><a Link="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
          <li><a Link="#" className="icoYoutube" title="Youtube"><i className="fa fa-youtube"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</Router>
          
        )
    }
}


