import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Why_educat extends Component {
    componentDidMount = () => {
        axios.get("/afiicheAboutMe")
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        const { data}=this.props
        return (
            <div>
                 
                <div class="about-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-md-12">
                                <div class="about-container">
                                    <h3>WHY EDUCAT ?</h3>
                                    <p>{data[0].aboutMe}</p>
                                    <a class="button-default" href="#">
                                        <Link to='/About'>
                                            ABOUT US
                                        </Link>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        data: state.ReducerAbout
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATEABOUT',
                update
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Why_educat)