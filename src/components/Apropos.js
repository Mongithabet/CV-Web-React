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
         
            <div className=" text-white apropos">
            <div className="col-lg-12">
            <img src={photo} width="120" height="120"  alt="M"/>

            <p className="text-bg2">Salut je m'appelle</p> 
           <h3 className="bold">Thabet Mongi</h3>
           <div className="container">
             <div className="row col-sm-8 "><Animation/></div>
              
              </div>
          
         
<div className="row row-4 col-4 text-color">     
      Je suis un Ingénieur génie logiciel basé à Tunis, Tunisie, spécialisé dans la création et la conception des applications Web, Desktop et Mobile de haute qualité...
</div>
<div class="container">
  <div class="row">
    <div class="col col-md-6">
    </div>
    <div class="col text-color">
    <h1 className="white">01. A propos</h1> 

Quand je suis née, je n'ai pas pleuré mais j'ai crié "Hello World" : D!

J'aime le développement frontend parce que je veux que tout soit beau!

J'adore le développement de Backend parce que ça me permet de maintenir le cerveau en vie et en bonne forme.

J'adore l'informatique et les sciences de données car ça me permet de voyager dans un monde degital alternatif!

C'est moi, bienvenue dans mon univers!
    </div>
  </div>
  <div class="row">
    <div class="col">

    </div>
    <div class="col">
    </div>
    <div class="col">
    </div>
  </div>
</div>
           <div className="col col-lg-6">
            <button className="btn">Télécharger mon CV</button>
            </div>
             </div>  
            </div>
        )
    }
}
