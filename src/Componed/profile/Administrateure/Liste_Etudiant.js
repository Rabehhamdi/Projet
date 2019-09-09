import React, { Component } from 'react'
import $ from 'jquery';
import axios from 'axios'
import {connect} from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import Menu from '../menu' 
import ItemEtudiant from './ItemEtudiant';
import AjouteEtudiant from './ajouteEtudiant'

class ListeEtudiant extends Component {
    componentDidMount = () => {
        axios.get("/afficheEtudiant")
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        $(document).ready(function () {
            $('.filterable .btn-filter').click(function () {
                var $panel = $(this).parents('.filterable'),
                    $filters = $panel.find('.filters input'),
                    $tbody = $panel.find('.table tbody');
                if ($filters.prop('disabled') == true) {
                    $filters.prop('disabled', false);
                    $filters.first().focus();
                } else {
                    $filters.val('').prop('disabled', true);
                    $tbody.find('.no-result').remove();
                    $tbody.find('tr').show();
                }
            });

            $('.filterable .filters input').keyup(function (e) {
                /* Ignore tab key */
                var code = e.keyCode || e.which;
                if (code == '9') return;
                /* Useful DOM data and selectors */
                var $input = $(this),
                    inputContent = $input.val().toLowerCase(),
                    $panel = $input.parents('.filterable'),
                    column = $panel.find('.filters th').index($input.parents('th')),
                    $table = $panel.find('.table'),
                    $rows = $table.find('tbody tr');
                /* Dirtiest filter function ever ;) */
                var $filteredRows = $rows.filter(function () {
                    var value = $(this).find('td').eq(column).text().toLowerCase();
                    return value.indexOf(inputContent) === -1;
                });
                /* Clean previous no-result if exist */
                $table.find('tbody .no-result').remove();
                /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
                $rows.show();
                $filteredRows.hide();
                /* Prepend no-result row if all rows are filtered */
                if ($filteredRows.length === $rows.length) {
                    $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">No result found</td></tr>'));
                }
            });
        });
        const { dataEtudiant} = this.props
        return (
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
                <div class="container">
                    <Menu />
                    < AjouteEtudiant />
                    <div class="container-fluid">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3 main-color-bg"  >
                                <h6 class="m-0 font-weight-bold   panel-title" style={{ color: "#fff" }}>Liste des Etudiant</h6>
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
                                                    <th> </th>
                                                    <th><input type="text" class="form-control" placeholder="cin" disabled /></th> 
                                                    <th><input type="text" class="form-control" placeholder="nom" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="prenom" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="Email" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="NumTel" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="adresse" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="description" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="date_naissance" disabled /></th>
                                                    <th><input type="text" class="form-control" placeholder="niveau" disabled /></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Cin</th>
                                                    <th>Image</th>
                                                    <th>nom</th>
                                                    <th>prenom</th>
                                                    <th>Email</th>
                                                    <th>NumTel</th>
                                                    <th>adresse</th>
                                                    <th>description</th>
                                                    <th>date_naissance</th>
                                                    <th>niveau</th>
                                                    <th></th>
                                                </tr>
                                                    

                                            </tfoot>
                                            <tbody>
                                                {dataEtudiant.map((el, index) => < ItemEtudiant el={el} key={index} />)}
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
const MapStateToPropos = (state) =>{
    return{
        dataEtudiant : state.reducerEtudiant
    }
}
const mapdispatchToProps = dispatch => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATEEtudiant',
                update
            })
        }
    }
}
export default connect(MapStateToPropos, mapdispatchToProps)(ListeEtudiant)