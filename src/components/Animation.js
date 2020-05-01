import React, { Component } from 'react'
import { init } from 'ityped'
import '../Animation.css'
export default class Animation extends Component {
   

    componentDidMount(){
        
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: true, strings: ['Je suis un ingénieur Développeur Web.', 'Développeur Java/JEE.' ] })
      }
      render(){
        return <div className=" row" id="myElement">
            <div className="row" id="one other"></div>
        </div>
      }
}
