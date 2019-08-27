import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import Menu from '../menu'
import Image from '../../upload.js'
class ModificationActualite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titre: "",
            date_debut: "",
            date_finale: "",
            heure_debut: "",
            heure_final: "",
            localisation: "",
            description: "" 
        }

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentDidMount = () => {
        this.setState({
            ...this.props.tab.filter((el, index) => el._id === this.props._id)[0]
        })
    }

    a = () => {
        axios.put(`/ModificationEvenement/${this.props._id}`, {
            titre: this.state.titre, 
            date_debut: this.state.date_debut,
            date_finale: this.state.date_finale,
            heure_debut: this.state.heure_debut,
            heure_final: this.state.heure_final,
            localisation: this.state.localisation,
            description: this.state.description 
           
        })
            .then(() => this.props.modification({...this.state}))

    }

    render() {
        return (
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
                <div class="container">
                    <Menu />
                    <div class="col-md-9">
                        <div class="panel panel-default">
                            <div class="panel-heading main-color-bg">
                                <h3 class="panel-title">Ajoute Evenement</h3>
                            </div>
                            <div class="panel-body">
                                <div class="card-group">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">titre</label>
                                                    <input type="text" class="form-control" name="titre" value={this.state.titre} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">date_debut</label>
                                                    <input type="text" class="form-control" name="date_debut" value={this.state.date_debut} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">date_finale</label>
                                                    <input type="text" class="form-control" name="date_finale" value={this.state.date_finale} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">heure_debut</label>
                                                    <input type="text" class="form-control" name="heure_debut" value={this.state.heure_debut} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">heure_final</label>
                                                    <input type="text" class="form-control" name="heure_final" value={this.state.heure_final} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">localisation</label>
                                                    <input type="text" class="form-control" name="localisation" value={this.state.localisation} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">

                                                    <div class="form-group">
                                                        <label class="bmd-label-floating"> description</label>
                                                        <textarea class="form-control" rows="5" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">

                                                    <div class="form-group">
                                                        <Image />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/AdminListeEvenement`}>
                                            <button type="submit" onClick={this.a} class="btn btn-primary pull-right" >Modification</button>
                                        </Link> 
                                        <div class="clearfix"></div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
const mapStateToPropos = (state) => {
    return {
        tab: state.reducerEvenement
    }
}

const mapdispatchToProps = dispatch => {
    return {
        modification: (element) => {
            dispatch({
                type: 'ModificationEvenement',
                element
            })
        }
    }
}
export default connect(mapStateToPropos, mapdispatchToProps)(ModificationActualite)