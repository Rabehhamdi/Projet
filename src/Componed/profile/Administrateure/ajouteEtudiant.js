import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Image from '../../upload.js'
class AjouteEtudiant extends Component {
    state={
        nom:"",
        prenom:"",
        Email:"",
        NumTel:"",
        adresse:"",
        niveau:"",
        description:"",
        date_naissance:""
    }
    handelchange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })   
    }
    add = (event)=>{
        event.preventDefault();
        return (this.state.nom.length == 0 && this.state.prenom.length == 0 && this.state.Email.length == 0 && this.state.NumTel.length == 0 && this.state.adresse.length == 0 && this.state.niveau.length == 0 && this.state.description.length == 0 && this.state.date_naissance.length == 0) ? {} 
            : axios.post('/ajouteetudiant', this.state).then(() => (this.props.Ajoute({ ...this.state }), this.setState({ nom: '', prenom: '', Email: '', NumTel: '', adresse: '', niveau: '', description: '', date_naissance: '' })))
        .catch((err) => alert(err))
    }

    render() {
        return (
            <div>
                <div class="col-md-9">
                    <div class="panel panel-default">
                        <div class="panel-heading main-color-bg">
                            <h3 class="panel-title">Ajoute Etudiant</h3>
                        </div>
                        <div class="panel-body">
                            <div class="card-group">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">nom</label>
                                                <input type="text" class="form-control" value={this.state.nom} name="nom" onChange={this.handelchange} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">prenom</label>
                                                <input type="text" class="form-control" value={this.state.prenom} name="prenom" onChange={this.handelchange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row"> 
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Email</label>
                                                <input type="email" class="form-control" value={this.state.Email} name="Email" onChange={this.handelchange} />
                                            </div>
                                        </div> 
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">NumTel</label>
                                                <input type="text" class="form-control" value={this.state.NumTel} name="NumTel" onChange={this.handelchange}/>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">adresse</label>
                                                <input type="text" class="form-control" value={this.state.adresse} name="adresse" onChange={this.handelchange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-7">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">niveau</label>
                                                <input type="text" class="form-control" value={this.state.niveau} name="niveau"onChange={this.handelchange} />
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">date_naissance</label>
                                                <input type="text" class="form-control" value={this.state.date_naissance} name="date_naissance" onChange={this.handelchange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">

                                                <div class="form-group">
                                                    <label class="bmd-label-floating">description</label>
                                                    <textarea class="form-control" rows="5" value={this.state.description} name="description" onChange={this.handelchange}></textarea>
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
                                    <button type="submit" onClick={this.add}  class="btn btn-primary pull-right">Ajoute</button>
                                    <div class="clearfix"></div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const MapdispatchToProps =(dispatch)=>{
    return{
        Ajoute: Etudiant=>{
            dispatch({
                type:"ADD_Etudiant",
                Etudiant
            })
        }
    }
}
export default connect(null, MapdispatchToProps) (AjouteEtudiant)