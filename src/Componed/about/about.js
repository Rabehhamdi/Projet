import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Header from '../index/header'
import Footer from '../index/footer'
class About extends Component {
    componentDidMount = () => {
        axios.get("/afiicheAboutMe")
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        const { data } = this.props
        return (
            <div style={{backgroundColor:"#fff"}}>
                <Header />
                <div class="breadcrumb-banner-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="breadcrumb-text">
                                    <h1 class="text-center">ABOUT US</h1>
                                    <div class="breadcrumb-bar">
                                        <ul class="breadcrumb text-center">
                                            <li><a href="index.html">Home</a></li>
                                            <li>ABOUT US</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="about-page-area section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title-wrapper">
                                    <div class="section-title">
                                        <h3>Who we are</h3>
                                        <p> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-12">
                                <div class="about-text-container">
                                    <span>Well come to Educat</span> 
                                    <h4>{data[0].aboutMe}</h4>
                                </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-12">
                                    <div class="skill-image">
                                    <img src={require('../Style/img/banner/6.jpg')} alt=""/>
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
const mapStateToProps = (state) => {
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
export default connect(mapStateToProps, mapDispatchToProps )(About)