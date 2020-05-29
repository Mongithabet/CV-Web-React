import React, { Component } from 'react'
import '../scroll/scroll.css'
import Scroll from 'react-scroll'
var Link = Scroll.Link;
var Element = Scroll.Element;

var durationFn = function (deltaTop) {
  return deltaTop;
};
export default class Scroll2 extends Component {
   
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div>
        <nav className="navbar navbar-default static">
          <ul className="nav navbar-nav">
            <li><Link activeClass="active" to="first" spy={true} smooth={true} duration={250} containerId="containerElement">1st element</Link></li>
            <li><Link activeClass="active" to="second" spy={true} smooth={true} duration={250} containerId="containerElement">2nd element</Link></li>
           
          </ul>
        </nav>

        <Element name="container" className="element" id="containerElement">
          <Element name="first" className="element">first element inside container</Element>
          <Element name="second" className="element">second element inside container</Element>

          

          <Element name="nestedContainer" className="element fixed-size" id="nestedContainerElement">
           
          </Element>



         


        </Element>

     


      </div>
        )
    }
}
