import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
class Facts extends Component {
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
        const { nbrEtudiant } = this.props
        const { nbrEntreprise } = this.props
        const { nbrActualite } = this.props
        const { nbrEvenement } = this.props
        return (
            <div>
                <div class="fun-factor-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title-wrapper white">
                                    <div class="section-title">
                                        <h3>IMPORTANT FACTS</h3>
                                        <p>There are many variations of passages of Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-12">
                                <div class="single-fun-factor">
                                    <h4>Etudiant</h4>
                                    <h2><span class="counter">{nbrEtudiant.length}</span></h2>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-12">
                                <div class="single-fun-factor">
                                    <h4>Evenement</h4>
                                    <h2><span class="counter">{nbrEvenement.length}</span></h2>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-12">
                                <div class="single-fun-factor">
                                    <h4>Actualite</h4>
                                    <h2><span class="counter">{nbrActualite.length}</span></h2>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-12">
                                <div class="single-fun-factor">
                                    <h4>Entreprise</h4> 
                                    <h2><span class="counter">{nbrEntreprise.length}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
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

export default connect(mapStateToProps, mapdispatchToProps)(Facts) 
