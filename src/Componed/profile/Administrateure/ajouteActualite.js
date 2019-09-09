import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Image from '../../upload.js'
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
var today = dd + '/' + mm + '/' + yyyy;

class AjouteActualite extends Component {
    state={
        titre:"",
        date: today,
        description:"",
        img:""
    } 
    handleChange =(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    add = (event) => { 
        event.preventDefault();
        return (this.state.titre.length == 0   && this.state.description.length == 0) ? {} 
            : axios.post('/ajouteactualite', this.state).then(() => (this.props.Ajoute({ ...this.state }),   this.setState({ titre: '' , description: '',img:"" })))
                .catch((err) => alert(err))
    }
    render() {
        return (
            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading main-color-bg">
                        <h3 class="panel-title">Ajoute Actualite</h3>
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
                                                <label class="bmd-label-floating"> image</label>
                                                <input type="text" class="form-control" name="img" value={this.state.img} onChange={this.handleChange} />
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

                                <button type="submit" class="btn btn-primary pull-right" onClick={this.add}>Ajoute</button>
                                <div class="clearfix"></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        Ajoute: Actualite=>{
            dispatch({
                type:"ADD_Actualite",
                Actualite
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(AjouteActualite) 