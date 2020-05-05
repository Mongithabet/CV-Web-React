import React, { Component } from 'react'



export default class Competences extends Component {
  constructor(props) {
    super(props);
   
  }
 
 
    render() {
  
        
        return (
  
          <div className="container">
          <div className="row">
    
            <div className="col-xs-6 col-md">
              
        <h1 className="text-align white">{this.props.nom}</h1>
        
            <div className="container">
              
          <div className="row">
            <div className=" text-white col-lg-12 card-color mb-3"  >
        <div className="card-header">{this.props.title}</div>
            <div className="card-body text-color">
            {this.props.cont}
            <div className="container">
  
            {this.props.vv}

    </div>
    
    <div className="col-sm">
     </div>
  </div>
</div>
           
            </div>
            </div>
            </div>
            </div>
            </div>
        
             
           
        )
    }
}
