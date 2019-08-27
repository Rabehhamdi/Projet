import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Image from '../../upload.js'
class AjouteEntreprise extends Component {
    state = { 
        Nom:"",
        Email:"",
        Domaine:"",
        Description:""
    } 
    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    add= (event)=>{
        event.preventDefault();
        return (this.state.Nom.length == 0 && this.state.Email.length == 0 && this.state.Domaine.length == 0 && this.state.Description.length == 0) ? {} 
            : axios.post('/ajouteEntreprise', this.state).then(() => (this.props.Ajoute({ ...this.state }),  this.setState({ Nom: '', Email: '', Domaine: '', heure_debut: '', Description: ''})))
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading main-color-bg">
                        <h3 class="panel-title">Ajoute Entreprise</h3>
                    </div>
                    <div class="panel-body">
                        <div class="card-group">
                            <form>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Nom</label>
                                            <input type="text" class="form-control" value={this.state.Nom} name="Nom" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Email</label>
                                            <input type="Email" class="form-control" value={this.state.Email} name="Email" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="bmd-label-floating" >Domaine</label>
                                            <input type="text" class="form-control" value={this.state.Domaine} name="Domaine" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label class="bmd-label-floating"> Description</label>
                                                <textarea class="form-control" value={this.state.Description} rows="5" name="Description" onChange={this.handleChange}></textarea>
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
                                
                                <button type="submit" onClick={this.add} class="btn btn-primary pull-right">Ajoute Entreprise</button>
                                <div class="clearfix"></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const MapDispatchToPropos=(Dispatch)=>{
    return {
        Ajoute:Entreprise=>{
            Dispatch({
                type:"ADD_Entreprise",
                Entreprise
            })
        }
    }
}
export default connect(null,MapDispatchToPropos) (AjouteEntreprise)