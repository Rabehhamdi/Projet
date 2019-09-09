import React, { Component } from 'react' 
import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import Menu from '../menu'
import Image from '../../upload.js'
class ModificationActualite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titre: "", 
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
        axios.put(`/Modificationactualite/${this.props._id}`, {
            titre: this.state.titre,
            description: this.state.description 
        })
            .then(() => this.props.modification(this.state))

    }
 
    render() {
        var id = window.location.pathname
        var x = 0
        var ch = ""
        for (var i = 0; i < id.length; i++) {
            if (x === 2)
                ch = ch + id[i]
            if (id[i] === "/")
                x = x + 1
        }
        return (
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
                <div class="container">
                    <Menu />
                        <div class="col-md-9">
                            <div class="panel panel-default">
                                <div class="panel-heading main-color-bg">
                                    <h3 class="panel-title">Modification Actualite</h3>
                                </div>
                                <div class="panel-body">
                                    <div class="card-group">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">titre</label>
                                                    <input type="text" class="form-control" name="titre" value={this.state.titre} onChange={this.handleChange}   />
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
                                        <Link to={`/ListeActualites/${ch}`}> 
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
        tab: state.ReducerActualite
    }
}

const mapdispatchToProps = dispatch => {
    return {
        modification: (element) => {
            dispatch({
                type: 'ModificationActualite',
                element
            })
        }
    }
} 
export default connect(mapStateToPropos, mapdispatchToProps)(ModificationActualite)