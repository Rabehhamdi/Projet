import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Uploadpdf from '../../uploadpdf'
class AjouteEmploidetemp extends Component {
    state={ 
        pdf:"" 
    }
    // handelchange=(event)=>{
    //     this.setState({
    //         [event.target.name]:event.target.value
    //     })
    // } 
    // add = (event) => {
    //     event.preventDefault();
    //     return (this.state.niveaux.length == 0 && this.state.pdf.length == 0) ? {} : (this.props.Ajoute({ ...this.state }), this.setState({ pdf: '', niveaux: ''}))
         
    // }
    handelchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    add = (event) => {
        event.preventDefault();
        return ( this.state.pdf.length == 0  ) ? {} 
            : axios.post('/AjouteEmploidetemp', this.state).then(() => (this.props.Ajoute({ ...this.state }), this.setState({ niveaux: '',pdf:""  })))
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading main-color-bg">
                        <h3 class="panel-title">Ajoute Emploi de temp</h3>
                    </div>
                    <div class="panel-body">
                        <div class="card-group">
                            <form>
                                 
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">pdf</label>
                                            <input type="text" class="form-control" name="pdf" value={this.state.pdf} onChange={this.handelchange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="bmd-label-floating"></label>
                                            <Uploadpdf/>
                                        </div>
                                    </div>
                                </div> 
                                <button type="submit" onClick={this.add} class="btn btn-primary pull-right">Ajoute  </button>

                                <div class="clearfix"></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        Ajoute: emploi=>{
            dispatch({
                type:"ADD_Emploidetemp",
                emploi
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(AjouteEmploidetemp)