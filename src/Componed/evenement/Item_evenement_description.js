import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from '../index/header'
import Footer from '../index/footer'
import RecentEvents from './RecentEvents'
class Item_evenement_description extends Component {
    

    render() {
        const { dataEvenement }=this.props
        let x = dataEvenement.filter((el, index) => el._id === this.props.id)[0]
        return (
            <div>
                <Header />
            <div style={{backgroundColor:'#fff'}}> 
                    
                <div className="breadcrumb-banner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="breadcrumb-text">
                                        <h1 className="text-center">EVENT DETAILS </h1>
                                    <div className="breadcrumb-bar">
                                        <ul className="breadcrumb text-center">
                                            <li><a href="index.html">Home</a></li>
                                            <li>EVENTS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="event-details-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                <div className="event-details-content">
                                    <div className="single-event-item">
                                        <div className="single-event-image">
                                            <a href="#">
                                                    <img alt="" src={x.img}  />
                                                    <span><span>{x.date_debut} </span> </span>
                                            </a>
                                        </div>
                                            <div className="single-event-text"> 
                                                <h3>{x.titre}</h3>
                                            <div className="single-item-comment-view">
                                                    <span><i className="zmdi zmdi-time"></i>{x.date_debut} - {x.date_finale}</span>
                                                    <span><i className="zmdi zmdi-pin"></i>{x.localisation}</span>
                                            </div>
                                                <p>{x.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <RecentEvents/>
                    </div >
                </div >
            </div >
        </div >
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
export default connect(mapStateToProps)(Item_evenement_description)