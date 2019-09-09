import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
class ItemEvenement extends Component {
    

    delete=()=>{
        axios.delete(`/supprimerevenement/${this.props.el._id}`)
            .then(() => this.props.supprimer(this.props.el._id))
            .catch((err)=>alert(err))
    }
    render() {
        var id = window.location.pathname
        var x = 0
        var ch = ""
        for (var i = 0; i < id.length-1; i++) {
            if (x === 2)
                ch = ch + id[i]
            if (id[i] === "/")
                x = x + 1
        }
        return (
            <tr>
                <td><img src={this.props.el.img} style={{ height: "50px", weight: "50px" }} /></td>
                <td>{this.props.el.titre}</td>
                <td>{this.props.el.date_debut}</td>
                <td>{this.props.el.date_finale}</td>
                <td>{this.props.el.heure_debut}</td>
                <td>{this.props.el.heure_final}</td>
                <td>{this.props.el.localisation}</td>
                <td>{this.props.el.description}</td>
                <td> 
                    <Link to={`/ModificationEvenement/${ch}/${this.props.el._id}`}>
                        <a href="#" className="btn btn-primary">Modification</a>
                    </Link>
                    <button type="button" onClick={this.delete} class="btn btn-danger">Supprimer</button></td>
            </tr>
          
        )
    }
}
const MapDispatchToPropos = (dispatch) => {
    return {
        supprimer: _id => {
            dispatch({
                type: "REMOVE_Evenement",
                _id
            })
        }
    }
}
export default connect(null, MapDispatchToPropos)(ItemEvenement)