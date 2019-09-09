import React, { Component } from 'react'  
import {connect} from 'react-redux'
import axios from 'axios'
import Image from '../../upload.js'
class AjouteEvenet extends Component {
    state={ 
        titre:"",
        date_debut:"",
        date_finale:"",
        heure_debut:"",
        heure_final:"",
        localisation:"",
        description:"",
        img:""
    }
    handleChange=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
        event.preventDefault();
    }
    add=(event)=>
    { 
        event.preventDefault();
        return (this.state.img.length == 0 &&this.state.titre.length == 0 && this.state.date_debut.length == 0 && this.state.date_finale.length == 0 && this.state.heure_debut.length == 0 && this.state.heure_final.length == 0 && this.state.localisation.length == 0 && this.state.description.length == 0) ? {} 
            : axios.post('/ajouteEvenement', this.state).then(()=>(this.props.Ajoute({ ...this.state }) ,this.setState({ titre: '', date_debut: '', date_finale: '', heure_debut: '', heure_final: '', localisation: '', description: '',img:"" })))
         .catch((err)=>alert(err))
    }
    // ajout = () => {
        
    //     axios.post('/ajouteEvenement', this.state)
    // }
    render() {
        return (
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
                                            <input type="text" class="form-control" name="titre" value={this.state.titre} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row"> 
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">date_debut</label>
                                            <input type="text" class="form-control" name="date_debut" value={this.state.date_debut} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">date_finale</label>
                                            <input type="text" class="form-control" name="date_finale" value={this.state.date_finale} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div> 
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">heure_debut</label>
                                            <input type="text" class="form-control" name="heure_debut" value={this.state.heure_debut} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">heure_final</label>
                                            <input type="text" class="form-control" name="heure_final" value={this.state.heure_final} onChange={this.handleChange}/>
                                        </div>
                                    </div> 
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">localisation</label>
                                            <input type="text" class="form-control" name="localisation" value={this.state.localisation} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Image</label>
                                            <input type="text" class="form-control" name="img" value={this.state.img} onChange={this.handleChange} />
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
                                <button onClick={this.add } type="submit" class="btn btn-primary pull-right">Ajoute</button>
                                <div class="clearfix"></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const MapDispatchToPropos=(dispatch)=>
{
    return {
        Ajoute:evenement=>
        {
            dispatch({
                    type:"ADD_Evenement",
                    evenement
                })
        }
        }
}
export default connect(null, MapDispatchToPropos)(AjouteEvenet)