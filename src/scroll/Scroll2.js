"use strict";
import '../scroll/scroll.css'
import Education from '../components/Education'
import Apropos from '../components/Apropos'
import Progress from '../components/Progress'
import Competences from '../components/Competences'

var React = require('react');
var ReactDOM = require('react-dom');
var Scroll = require('react-scroll');

var Link = Scroll.Link;
var Element = Scroll.Element;


var durationFn = function (deltaTop) {
  return deltaTop;
};

export default class Scroll2 extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <nav className="navbar navbar-default static">
        <ul className="nav navbar-nav">
         <li><Link activeClass="active" to="rel1" spy={true} smooth={true} duration={250} >rel 1</Link></li>
          <li><Link activeClass="active" to="rel2" spy={true} smooth={true} duration={250} >rel 2</Link></li>
          <li><Link activeClass="active" to="rel3" spy={true} smooth={true} duration={250} >rel 3</Link></li>
          <li><Link activeClass="active" to="rel4" spy={true} smooth={true} duration={250} >rel 4</Link></li>
          <li><Link activeClass="active" to="normal" spy={true} smooth={true} duration={250} >normal</Link></li>
        </ul>
      </nav>
   
      <div className="relative">
        <Element name="rel1" className="element big"><Apropos/></Element>
        <Element name="rel2" className="element big"><Education/></Element>
        <Element name="rel3" className="element big"><Progress/></Element>
        <Element name="rel4" className="element big"><Competences/></Element>
      </div>


    </div>
  );
}
};


ReactDOM.render(
<Scroll2 />,
document.getElementById('example')
);