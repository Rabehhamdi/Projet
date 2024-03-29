import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ListeActualites from './Liste_Actualites' 
class Contenu extends Component {
    componentDidMount = () => {
        axios.get("/afficheEvenement")
            .then(res => {
                this.props.update1(res.data)

            })
        axios.get("/afficheEtudiant")
            .then(res => {
                this.props.update(res.data)

            })
        axios.get("/afficheActualite")
            .then(res => {
                this.props.update3(res.data)

            })
        axios.get("/afficheEntreprise")
            .then(res => {
                this.props.update2(res.data)

            })
    }
    render() {
        const { nbrEtudiant }=this.props
        const { nbrEntreprise } = this.props
        const { nbrActualite } = this.props
        const { nbrEvenement } = this.props
        return (
            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading main-color-bg">
                        <h3 class="panel-title">Website Overview</h3>
                    </div>
                    <div class="panel-body">
                        <div class="col-md-3">
                            <div class="well dash-box">
                                <h2><span class="glyphicon glyphicon-user" aria-hidden="true"></span>{nbrEtudiant.length}</h2>
                                <h4>Nombre d'étudiants</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="well dash-box">
                                <h2><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> {nbrEvenement.length}</h2>
                                <h4>Nombre d'événements</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="well dash-box">
                                <h2><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> {nbrActualite.length}</h2>
                                <h4>Nombre de Actualites </h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="well dash-box">
                                <h2><span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span> {nbrEntreprise.length}</h2>
                                <h4>Nombre de Entreprise</h4>
                            </div>
                        </div>
                    </div>
                </div>
                < ListeActualites /> 
            </div>
        )
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//        nbrEtudiant:()=>{
//            dispatch({
//                type:"COUNT"
//            })
//        }
//     }
// }
const mapStateToProps = (state)=>{
    return{
        nbrEtudiant: state.reducerEtudiant,
        nbrEntreprise: state.reducerEntreprise,
        nbrActualite: state.ReducerActualite,
        nbrEvenement: state.reducerEvenement
    }
}
const mapdispatchToProps = dispatch => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATEEtudiant',
                update
            })
        },
        update1: (update) => {
            dispatch({
                type: 'UPDATE',
                update
            })
        },
        update2: (update) => {
            dispatch({
                type: 'UPDATEEntreprise',
                update
            })
        },
        update3: (update) => {
            dispatch({
                type: 'UPDATEactualite',
                update
            })
        }
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Contenu) 