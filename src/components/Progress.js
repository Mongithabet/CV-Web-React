import React, { Component } from 'react'
import FontAwesomeIcon from './FontAwesomeIcon'
import {faJava} from '@fortawesome/free-brands-svg-icons'
export default class Progress extends Component {
 constructor(props){
   super()

 }
 
    render() {
        return (
            
<div>

<FontAwesomeIcon  icon={faJava} style={{color:'gray'}}/>   {this.props.nom1}
<div className="progress">
    
  <div className="progress-bar" role="progressbar" style={{width:this.props.value1}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.props.value1}</div>
</div>
<FontAwesomeIcon icon={this.props.faJs} style={{color:'pink'}} />     {this.props.nom2}

<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width:this.props.value2}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{this.props.value2}</div>
</div>
<FontAwesomeIcon icon={this.props.faPhp} style={{color:'cyan'}}/>   {this.props.nom3}

<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width:this.props.value3}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{this.props.value3}</div>
</div>
<FontAwesomeIcon icon={this.props.faHtml5} style={{color:'yellow'}} />  {this.props.nom4}

<div className={this.props.prog4}>
  <div className={this.props.prog_bar4} role="progressbar" style={{width:this.props.value4}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{this.props.value4}</div>
</div>   
<FontAwesomeIcon icon={this.props.faHtml5} style={{color:'yellow'}} />  {this.props.nom5}

<div className={this.props.prog5}>
  <div className={this.props.prog_bar5} role="progressbar" style={{width:this.props.value5}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{this.props.value5}</div>
</div>   
<FontAwesomeIcon icon={this.props.faHtml5} style={{color:'yellow'}} />  {this.props.nom6}

<div className={this.props.prog6}>
  <div className={this.props.prog_bar6} role="progressbar" style={{width:this.props.value6}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{this.props.value6}</div>
</div>   
         </div>
        )
    }
}
