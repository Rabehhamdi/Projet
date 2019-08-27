import React, { Component } from 'react'

export default class ItemMatiere extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.el.Matiere}</td>
                <td>{this.props.el.Coffision}</td>
                <td>{this.props.el.nbrheure}</td>
                <td>{this.props.el.Prof}</td>
            </tr>
        )
    }
}
