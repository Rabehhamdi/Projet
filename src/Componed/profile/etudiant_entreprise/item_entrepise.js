import React, { Component } from 'react'

export default class ItemEntreprise extends Component {
    render() {
        return ( 
            <div class="card col-md-5" style={{ margin: "20px "  }} >
                <img class="card-img-top" src={this.props.el.img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{this.props.el.Nom}</h5>
                    <p class="card-text">{this.props.el.Description}</p>
                </div>
                <div class="card-footer" >
                    <small class="text-muted">{this.props.el.Domaine}</small><br/> 
                    <small class="text-muted">{this.props.el.Email}</small>
                </div>
            </div> 
        )
    }
}
