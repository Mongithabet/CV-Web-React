import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Competences extends Component {
   

    render() {
        var style = {
            width: '30rem',
          };
        return (
            <div class="card text-white card-color mb-3"  style={style}>
            <div class="card-header">Langages de programmation</div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div></div>
        )
    }
}
