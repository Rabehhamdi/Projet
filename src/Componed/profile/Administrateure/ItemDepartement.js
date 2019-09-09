import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios' 
class ItemDepartement extends Component {
    constructor(props) {
        super(props)
        
    }
    
    delete = () => {
        axios.delete(`/supprimerDepartement/${this.props.E._id}`)
            .then(() => { this.props.Supprimer(this.props.E._id) })
            .catch((err) => alert(err))
    }
    render() {
       
        return (
            <tr>
                <td><img src={this.props.E.img} style={{ height: "50px", weight: "50px" }} /></td>
                <td>{this.props.E.titre}</td>
                <td>{this.props.E.chef_departement}</td>
                <td>{this.props.E.description}</td>
                <td> 
                    <button type="button" onClick={this.delete} class="btn btn-danger">Supprimer</button>
                </td>
            </tr>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Supprimer: _id => {
            dispatch({
                type: "REVOME_Departement",
                _id
            })
        }
    }
}


export default connect(null, mapDispatchToProps)(ItemDepartement)