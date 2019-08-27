import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../index/header'
import Footer from '../index/footer'
class DescriptionDepartement extends Component {
    render() {
        const { Departement } = this.props
        let x = Departement.filter((el, index) => el._id === this.props.id)[0]
        return (
            <div style={{ backgroundColor: "#fff" }}>
                <Header />
                <div class="breadcrumb-banner-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="breadcrumb-text">
                                    <h1 class="text-center">Departement</h1>
                                    <div class="breadcrumb-bar">
                                        <ul class="breadcrumb text-center">
                                            <li><a href="index.html">Home</a></li>
                                            <li>Departement</li>
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
                                        <h3>{x.titre}</h3>
                                        <p> {x.chef_departement}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-12">
                                <div class="about-text-container">
                                    <p>{x.description}</p>
                                     
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-12">
                                <div class="skill-image">
                                    <img src={x.img} alt="" />
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
        Departement: state.ReducerDepartement
    }
}
export default connect(mapStateToProps)(DescriptionDepartement)