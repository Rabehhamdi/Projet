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