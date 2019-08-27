import React, { Component } from 'react'
import {connect} from 'react-redux'
import Item_Recent_Events from './item_Recent_Events'

class RecentEvents extends Component {
    render() {
        const { dataEvenement } = this.props
        return (
            <div className="col-lg-3 col-md-12">
                <div className="sidebar-widget">
                    <div className="single-sidebar-widget">
                        <h4 className="title">Recent Events</h4>
                        <div className="recent-content">
                            {dataEvenement.map((el, index) => <Item_Recent_Events el={el} key={index}/>)} 
                        </div>
                    </div>
                    <div className="single-sidebar-widget">
                        <h4 className="title">Search by Tags</h4>
                        <ul className="tags">
                            <li><a href="#">Photoshop</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Tutorial</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Premium</a></li>
                            <li><a href="#">Designtuto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
                                    
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataEvenement: state.reducerEvenement
    }
}
export default connect(mapStateToProps)(RecentEvents)