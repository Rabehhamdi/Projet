import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class ItemEntreprise extends Component {
    delete=()=>{
        axios.delete(`/supprimerentreprise/${this.props.el._id}`)
            .then(() => this.props.supprimer(this.props.el._id))
            .catch((err)=>alert(err))
    }
 
    render() {
        return (
            <tr>
                <td><img src={this.props.el.img} style={{height:"50px", weight:"50px" }}/></td>
                <td>{this.props.el.cin}</td>
                <td>{this.props.el.Nom }</td>
                <td>{this.props.el.Description }</td>
                <td>{this.props.el.Email  }</td>
                <td>{this.props.el. Domaine}</td>
                <td> <button onClick={this.delete}  type="button" class="btn btn-danger">Supprimer</button></td> 
            </tr>
        )
    }
}
const MapDispatchToPropos =( dispatch)=>{
    return {
        supprimer : _id =>
        { 
            dispatch({
                type:"REMOVE_Entreprise",
                _id
            })
        }
    }
}
export default connect(null, MapDispatchToPropos) (ItemEntreprise)