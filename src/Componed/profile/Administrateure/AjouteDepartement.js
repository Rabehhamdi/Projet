import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Image from '../../upload.js'
 

class AjouteDepartement extends Component {
    constructor(props) {
        super(props)
        this.state = {  
        titre: "",
        chef_departement: "",
        img: "",
        description: ""
        }
    }
    
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    add = (event) => {
        event.preventDefault();
        return (this.state.titre.length == 0 && this.state.description.length == 0) ? {}
            : axios.post('/ajoutedepartement', this.state).then(() => (this.props.Ajoute({ ...this.state }), this.setState({ titre: '', description: '',chef_departement:'',img:'' })))
                .catch((err) => alert(err))
    }
    render() {
        return (
            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading main-color-bg">
                        <h3 class="panel-title">Ajoute Departement</h3>
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
                                            <label class="bmd-label-floating">chef departement</label>
                                            <input type="text" class="form-control" name="chef_departement" value={this.state.chef_departement} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">file</label>
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
const mapDispatchToProps = (dispatch) => {
    return {
        Ajoute: Departement => {
            dispatch({
                type: "ADD_Departement",
                Departement
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(AjouteDepartement) 