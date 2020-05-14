import React, { Component } from 'react'
import '../social.css'
export default class Social extends Component {
   

    render() {
        return (
            <div>
         <div className="container-fluid">
    <div className="row">
	

			<div className="col-lg-1 col-md-1 col-sm-2 col-xs-3 text-center">
				<div className="icon-circle">
					<a href="#" className="ifacebook" title="Facebook"><i className="fa fa-facebook"></i></a>
				</div>
			</div>
     
			<div className="col-lg-1 col-md-1 col-sm-2 col-xs-3 text-center">
				<div className="icon-circle">
					<a href="#" className="itwittter" title="Twitter"><i className="fa fa-twitter"></i></a>
				</div>
			</div>
      
			<div className="col-lg-1 col-md-1 col-sm-2 col-xs-3 text-center">
				<div className="icon-circle">
					<a href="#" className="igoogle" title="Google+"><i className="fa fa-google-plus"></i></a>
				</div>
			</div>
      
			<div className="col-lg-1 col-md-1 col-sm-2 col-xs-3 text-center">
				<div className="icon-circle">
					<a href="#" className="iLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a>
				</div>
			</div>

		</div>
	</div>
</div>
          
        )
    }
}



