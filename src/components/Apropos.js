import React, { Component,Img } from 'react'
import PropTypes from 'prop-types'
import photo from './icons/photo.jpg'

import '../Animation.css'
import '../App.css'
import Animation from './Animation'
export default class Apropos extends Component {
   state = {
   }

    render() {
        return (
         <div className="container">
            <div className=" text-white ">
            <div className="col-lg-10">

            <p className="text-bg2">Salut je m'appelle</p> 
           <h3 className="bold">Thabet Mongi</h3>
           <div className="container-fluid">
             <div className="row col-sm-12 col-lg-12 col-md-12 police"><Animation/></div>
              
              </div>
          
        
<div className=" text-color">     
      Je suis un Ingénieur génie logiciel basé à Tunis, Tunisie, spécialisé dans la création et la conception des applications Web, Desktop et Mobile de haute qualité...
</div>

<div className=" margin-btn ">
  <div className="row">
    <div className="col">
    </div>
    
    <div className="col-lg-7 col-sm-7">
    <button className="btn ">Télécharger mon CV</button>
    </div>
  </div>
  <hr></hr>
  <hr></hr>
  <hr></hr>
  <hr></hr>
  
</div>


           
       </div>     
    </div>
    <div class="container">
  <div class="row">
    <div class="col-md-3 col-sm-12"><img  src={photo} width="150" height="150"  alt="M"/></div>
    <div class="col-md-6 col-sm-12 text-color text-align"><h1 className=" white">01. A propos</h1> 
    Quand je suis née, je n'ai pas pleuré mais j'ai crié "Hello World" : D!

J'aime le développement frontend parce que je veux que tout soit beau!

J'adore le développement de Backend parce que ça me permet de maintenir le cerveau en vie et en bonne forme.

J'adore l'informatique et les sciences de données car ça me permet de voyager dans un monde degital alternatif!

C'est moi, bienvenue dans mon univers!  </div>
  </div>
</div>
  </div>
  
             
        )
    }
}
