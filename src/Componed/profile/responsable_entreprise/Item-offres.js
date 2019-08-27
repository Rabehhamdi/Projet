import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class ItemOffres extends Component {
    delete = () => {
        console.log(this.props.el.id)
        axios.delete(`/supprimerOffre/${this.props.el._id}`)
            .then(() => this.props.supprimer(this.props.el._id))
            .catch((err) => alert(err))

    }
    render() {
        return (
            <div class="card border-success  col-md-5" style={{ maxWidth: "18rem", margin: "20px " }}>
                <div class="card-header bg-transparent border-success">{this.props.el.offre}</div>
                <div class="card-body text-success">
                    <h5 class="card-title">{this.props.el.titre}</h5>
                    <p class="card-text">{this.props.el.description}</p>
                </div>
                <div class="card-footer bg-transparent border-success">{this.props.el.date}</div>

                <button type="button" onClick={  this.delete}  class="btn btn-danger">Supprimer</button>
            </div>
        )
    }
}
const MapDispatchToPropos = (dispatch) => {
    return {
        supprimer: _id => {
            dispatch({
                type: "REMOVE_Offre",
                _id
            })
        } 
    }
}
export default connect(null, MapDispatchToPropos)(ItemOffres)