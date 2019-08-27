import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ItemDepartement from './item_departement'

class Departement extends Component {
    componentDidMount = () => {
        axios.get("/afficheDepartement")
            .then(res => {
                this.props.update(res.data)

        })
    }
    render() {
        
        const { dataDepartement}=this.props
        return (
            <div>
                <div class="course-area section-padding bg-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title-wrapper">
                                    <div class="section-title">
                                        <h3>Liste Departement</h3>
                                        <p>There are many variations of passages of Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            {dataDepartement.map((el, index) => <ItemDepartement el={el} key={index}/>)}
                        <div class="col-md-12 col-sm-12 text-center">
                                <a href="#" class="button-default button-large">Browse All Courses <i class="zmdi zmdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        dataDepartement: state.ReducerDepartement
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATEDepartement',
                update
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Departement)