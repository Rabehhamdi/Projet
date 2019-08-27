import React, { Component } from 'react'

export default class ItemOffre extends Component {
    render() {
        return (
            <div class="card border-success  col-md-5" style={{ maxWidth: "18rem", margin: "20px " }}>
                <div class="card-header bg-transparent border-success">{this.props.el.offre}</div>
                <div class="card-body text-success">
                    <h5 class="card-title">{this.props.el.titre}</h5>
                    <p class="card-text">{this.props.el.description}</p>
                </div>
                <div class="card-footer bg-transparent border-success">{this.props.el.date}</div>
            </div>
        )
    }
}
