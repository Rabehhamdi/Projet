import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
class ItemActualite extends Component {
   
    delete=()=>{
        axios.delete(`/supprimeractualite/${this.props.el._id}`)
            .then(() => { this.props.Supprimer(this.props.el._id) })
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
                <td>{this.props.el.description}</td>
                <td>{this.props.el.date}</td>  
                <td> 
                    <Link to={`/ModificationActualite/${ch}/${this.props.el._id}`}>
                        <a href="#" className="btn btn-primary">Modification</a>
                    </Link>
                    <button type="button" onClick={this.delete} class="btn btn-danger">Supprimer</button>
                </td>
            </tr>    
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        Supprimer:_id=>{
            dispatch({
                type:"REVOME_Actualite",
                _id
            })
        }
    }
}

 
export default connect(null, mapDispatchToProps) (ItemActualite )