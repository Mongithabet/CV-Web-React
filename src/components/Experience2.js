import React, { Component } from 'react'
import tt from './icons/tt.svg'
import gct from './icons/gct.png'
import tpc from './icons/tpc.png'

export default class Experience extends Component {
  

    render() {
        return (
            <div >
<div className="container-fluid bg  ">

      <div className="card bg ">
        <div className="card-body margin2 bg">
          <h4 className="card-title">01-Experience</h4>
          <div className="mt-5">
            <div className="timeline">
              <div className="timeline-wrapper timeline-wrapper-warning">
                <div className="timeline-badge"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title"><img  src={tpc} width="120" color="white" height="70"  alt="tpc"/>Développeur au sein de la Société TECHNOPC</h6>
                  </div>
                  <div className="timeline-body">
                    <p className="text-color">   Missions et tâches réalisées :  Développement et mise en page des sites Web avec l’intégration des éléments. Développement des Applications bureautiques  Outils utilisés : Spring Boot, ReactJS, Angular, React Native, SQL server, MySQL, CSS, HTML, JQUERY … 
 
 </p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                      <span>19</span>
                      <span className="ml-md-auto font-weight-bold">19 Oct 2017</span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                <div className="timeline-badge"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title"><img  src={gct} width="120" height="120"  alt="tt"/>Groupe Chimique Tunisien</h6>
                  </div>
                  <div className="timeline-body">
                    <p className="text-color">Missions et tâches réalisées :  Conception et développement d’une application avec Java. Application de gestion des abonnés GCT.  
 Outils utilisés : Java, Jasper Reports, SQL SERVER, UML Lien : https://www.youtube.com/channel/UCijIPSUnCs-WGse1q4mfoZw </p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                      <span>25</span>
                      <span className="ml-md-auto font-weight-bold">10th Aug 2017</span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-wrapper-success">
                <div className="timeline-badge"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Bootstrap 4 Alpha 5</h6>
                  </div>
                  <div className="timeline-body">
                    <p>Juillet 2017
MShop
APPLICATION MOBILE ANDROID POUR UNE BOUTIQUE EN LIGNE

Réalisation d’une application mobile Android, pour une boutique en ligne. L’application permet une authentification sécuriser, payement à l’aide de Paypal, gestion de panier et localisation de boutique.

Android
Java
Firebase</p>
                  </div >
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                      <span>19</span>
                      <span className="ml-md-auto font-weight-bold">5th Sep 2016</span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-inverted timeline-wrapper-info">
                <div className="timeline-badge"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title"><img  src={tt} width="120" height="120"  alt="tt"/>Tunisie Telecom Stage PFE </h6>
                  </div>
                  <div className="timeline-body">
                    <p  className="text-color">  
Missions et tâches réalisées : Conception et réalisation d’une Application de Push-pull Des SMS via une interface Web.  Outils utilisés : Linux, Html, PHP, JavaScript, CSS... </p>
                  </div>
                 
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                      <span>25</span>
                      <span className="ml-md-auto font-weight-bold">25th July 2016</span>
                  </div>
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
