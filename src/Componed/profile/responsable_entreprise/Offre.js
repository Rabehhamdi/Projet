import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Header from '../header'
import Footer from '../footer'
import Menu from '../menu'
import ItemOffres from './Item-offres'

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
 
    
class Offres extends Component {
    
    state = {
        offre: "",
        titre: "", 
        description: "",
        date: today
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        event.preventDefault();
    }
    add = (event) => { 
        event.preventDefault();
        var id = window.location.pathname
        var x = 0
        var ch = ""
        for (var i = 0; i < id.length; i++) {
            if (x === 2)
                ch = ch + id[i]
            if (id[i] === "/")
                x = x + 1
        }
         
        return (this.state.offre.length == 0 && this.state.titre.length == 0 && this.state.description.length == 0) ? {} 
            : axios.post('/ajouteOffre', {...this.state ,"id_user":ch }).then(() => (this.props.Ajoute({ ...this.state  }), this.setState({ offre: '', titre: '', description: '' })))
                .catch((err) => alert(err))
 
    }
    componentDidMount = () => {
        var id = window.location.pathname
        var x = 0
        var ch = ""
        for (var i = 0; i < id.length; i++) {
            if (x === 2)
                ch = ch + id[i]
            if (id[i] === "/")
                x = x + 1
        }
        axios.get(`/OffreDeEntreprise/${ch}` )
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() { 
        const { dataOffre}=this.props
        return (
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
                <div className="container">
                    <Menu /> 
                     

                <div className="col-md-9">
                    <div className="panel panel-default">
                        <div className="panel-heading main-color-bg">
                            <h3 className="panel-title">Ajoute Offre</h3>
                        </div>
                        <div className="panel-body">
                            <div className="card-group">
                                
                                    <form>
                                        <div className="row"> 
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Offre</label>
                                                    <input type="text" className="form-control" name="offre" value={this.state.offre} onChange={this.handleChange} />
                                                </div>
                                            </div> 
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Titre</label>
                                                    <input type="text" className="form-control" name="titre" value={this.state.titre} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Description</label>
                                                    <div className="form-group">
                                                         
                                                        <textarea className="form-control" rows="5" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={this.add} type="submit" className="btn btn-primary pull-right">Ajoute Offres</button>
                                        <div className="clearfix"></div>
                                    </form>

                                    
                            </div>
                        </div>
                    </div>
                </div>
                 

                <div className="col-md-9">
                    <div className="panel panel-default">
                        <div className="panel-heading main-color-bg">
                            <h3 className="panel-title">Liste des Offres</h3>
                        </div>
                        <div className="panel-body">
                            <div className="card-group">
                                <div style={{ desplay: "flex", flexWrap: "wrap" }} >
                                        {dataOffre.map((el, index) => <ItemOffres el={el} key={index} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

             
                    
                </div>
                <Footer />
            </div >
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Ajoute: Offre => {
            dispatch({
                type: "ADD_Offre",
                Offre
            })
        },
        update: (update) => {
            dispatch({
                type: 'UPDATEOffreDeEntreprise',
                update
            })
        } 
    }
}
const mapStateToProps = (state) => {
    return {
        dataOffre: state.ReducerOffres
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Offres)