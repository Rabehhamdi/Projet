import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Item_evenement from './Item_evenement'
import Header from '../index/header'
import Footer from '../index/footer'

class Liste_Evenement extends Component {
    componentDidMount = () => {
        axios.get("/afficheEvenement")
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        const { dataEvenement}=this.props
        return ( 
            <div> 
                <Header />
            <div class="as-mainwrapper"> 
                <div class="bg-white">  
                    <div class="breadcrumb-banner-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="breadcrumb-text">
                                        <h1 class="text-center">Our Events</h1>
                                        <div class="breadcrumb-bar">
                                            <ul class="breadcrumb text-center">
                                                <li><a href="index.html">Home</a></li>
                                                <li>Events</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="event-area section-padding event-page">
                        <div class="container">
                            <div class="row">
                                    {dataEvenement.map((el, index) =>  <Item_evenement el={el} key={index} />)} 
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
        dataEvenement: state.reducerEvenement
    }
}
const mapdispatchToProps = dispatch => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATE',
                update
            })
        }
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Liste_Evenement)