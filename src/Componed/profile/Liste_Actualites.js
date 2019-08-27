import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ItemActualite from './item_Actualite' 

class ListeActualites extends Component {
    componentDidMount = () => {
        axios.get("/afficheActualite")
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        const { dataActualite}=this.props
        return (
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Liste Des Actualites</h3>
                </div>
                <div class="panel-body"> 
                    {dataActualite.map((el, index) => <ItemActualite el={el} key={index} />)}
                </div>
            </div> 
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataActualite: state.ReducerActualite 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATEactualite',
                update
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListeActualites)