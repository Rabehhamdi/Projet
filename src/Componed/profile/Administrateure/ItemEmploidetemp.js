import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class ItemActualite extends Component {
    delete = () => {
        axios.delete(`/supprimerEmploidetemp/${this.props.el._id}`)
            .then(() => { this.props.Supprimer(this.props.el._id) })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <section>
                <tr>
                    <td> 
                        {this.props.el.niveaux}
                    </td>  
                    <td>
                        <iframe src={this.props.el.pdf} frameborder="0" height="500px" width="100%"></iframe>
                    </td>   
                    <td> 
                        <button type="button" class="btn btn-danger" onClick={this.delete}>Supprimer</button>
                    </td>
                </tr>  
            </section>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        Supprimer:_id=>{
            dispatch({
                type:"REMOVE_Emploidetemp",
                _id
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(ItemActualite)