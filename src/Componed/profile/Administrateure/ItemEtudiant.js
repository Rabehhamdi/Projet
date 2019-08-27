import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class ItemEtudiant extends Component {
    
    delete=()=>{
        axios.delete(`/supprimeretudiant/${this.props.el._id}`)
            .then(() => { this.props.SUPPRIMER(this.props.el._id)})
            .catch((err)=>alert(err))
    }
    render() {
        return (
            <tr>
                <td><img src={this.props.el.img} style={{ height: "50px", weight: "50px" }} /></td>
                <td>{this.props.el.nom}</td>
                <td>{this.props.el.prenom}</td>
                <td>{this.props.el.Email}</td>
                <td>{this.props.el.NumTel}</td>
                <td>{this.props.el.adresse}</td>
                <td>{this.props.el.description}</td>
                <td>{this.props.el.date_naissance}</td>
                <td>{this.props.el.niveau}</td>
                <td> <button type="button" onClick={this.delete} class="btn btn-danger">Supprimer</button></td>
            </tr>  
        )
    }
}
const MapDispatchToProps =(Dispatch)=>{
    return{
        SUPPRIMER:_id=>{
            Dispatch({
                type: 'REMOVE_Etudiant',
                _id
            })
        }
    }
}
export default connect(null, MapDispatchToProps) (ItemEtudiant)