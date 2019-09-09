import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import $ from 'jquery';
import Header from '../header'
import Footer from '../footer'
import Menu from '../menu' 
import ItemDepartement from './ItemDepartement';
import AjouteDepartement from './AjouteDepartement'
class ListeDepartement extends Component {
    componentDidMount = () => {
        axios.get("/afficheDepartement")
            .then(res => {
                this.props.update(res.data) 
            })
    }
    render() {
 
        const { dataDepartement } = this.props
        return (
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
                <div class="container">
                    <Menu />
                    <AjouteDepartement />
                    <div class="container-fluid">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3 main-color-bg"  >
                                <h6 class="m-0 font-weight-bold   panel-title" style={{ color: "#fff" }}>Liste Departement</h6>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <div class="panel panel-primary filterable">
                                        <div class="panel-heading">
                                            <h3 class="panel-title"> </h3>
                                            <div class="pull-right">
                                                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>
                                            </div>
                                        </div>
                                        <table class="table">
                                            <thead>
                                                <tr class="filters">
                                                    
                                                    <th><input type="text" class="form-control" placeholder="file" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="titre" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="chef_departement" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="description" disabled /></th>
                                                     <th> </th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>file</th>
                                                    <th>titre</th>
                                                    <th>chef_departement</th> 
                                                    <th>description</th>
                                                    <th></th>
                                                </tr>


                                            </tfoot>
                                            <tbody>
                                                {this.props.dataDepartement.map((el, index) => < ItemDepartement E={el} key={index} />)}
                                            </tbody>
                                        </table>
                                    </div>
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
        dataDepartement: state.ReducerDepartement
    }
}
const mapdispatchToProps = dispatch => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATEDepartement',
                update
            })
        }
    }
}
export default connect(mapStateToPropos, mapdispatchToProps)  (ListeDepartement)