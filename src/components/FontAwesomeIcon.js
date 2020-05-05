import React, { Component } from 'react'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faHtml5} from '@fortawesome/free-brands-svg-icons'

export default class FontAwesomeIcon extends Component {
   constructor(props){
       super(props);

this.props={
    faJava:{ faJava },
    faJs:{faJs},
    faPhp:{faPhp},
    faHtml5:{faHtml5}
}
console.log(this.props.faJava)
   }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
