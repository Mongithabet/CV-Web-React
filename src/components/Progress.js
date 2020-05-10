import React, { Component } from 'react'
import FontAwesomeIcon from './FontAwesomeIcon'
import {faJava} from '@fortawesome/free-brands-svg-icons'
export default class Progress extends Component {
 constructor(props){
   super()

 }
 
    render() {
        return (
            
<div >
  
 <h3 className="progress-title">{this.props.nom1}</h3>

<div className="progress">
    
  <div className="progress-bar"  style={{width:this.props.value1}} ><div class="progress-value">{this.props.value1}</div></div>
</div>

<h3 className="progress-title">{this.props.nom2}</h3>

<div className="progress">
<div className="progress-bar"  style={{width:this.props.value2}} ><div class="progress-value">{this.props.value2}</div></div>
</div>
<h3 className="progress-title">{this.props.nom3}</h3>

<div className="progress">
<div className="progress-bar"  style={{width:this.props.value3}} ><div class="progress-value">{this.props.value3}</div></div>
</div>
<h3 className="progress-title">{this.props.nom4}</h3>

<div className={this.props.prog4}>
<div className="progress-bar"  style={{width:this.props.value4}} ><div class="progress-value">{this.props.value4}</div></div>
</div>   
<h3 className="progress-title">{this.props.nom5}</h3>

<div className={this.props.prog5}>
<div className="progress-bar"  style={{width:this.props.value5}} ><div class="progress-value">{this.props.value5}</div></div>
</div>   
<h3 className="progress-title">{this.props.nom6}</h3>

<div className={this.props.prog6}>
<div className="progress-bar"  style={{width:this.props.value6}} ><div class="progress-value">{this.props.value6}</div></div>
</div>   
         </div>
     
        )
    }
}
