import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ItemOffre from './item_Offre'

class ListeOffre extends Component {
    componentDidMount = () => {
        axios.get("/afiicheOffres")
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        const { dataOffres}=this.props
        return (
            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading main-color-bg">
                        <h3 class="panel-title">Liste des Offres</h3>
                    </div>
                    <div class="panel-body">
                        <div class="card-group">
                            <div style={{ desplay: "flex", flexWrap: "wrap" }} >
                                {dataOffres.map((el, index) => <ItemOffre el={el} key={index}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        dataOffres : state.ReducerListeOffres
    }
}
const mapDispatchToProps = (dispatch) => {
    return { 
        update: (update) => {
            dispatch({
                type: 'UPDATEListeOffre',
                update
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListeOffre)