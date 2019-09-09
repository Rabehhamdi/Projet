import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ItemrecentEvent extends Component {
    render() {
        return ( 
                <div className="recent-content-item">
                <Link to={`/ItemEvenement/${this.props.el._id}`}>
                    <img src={this.props.el.img} alt="" height='90px' width='90px' /> 
                </Link>
                    <div className="recent-text">
                    <Link to={`/ItemEvenement/${this.props.el._id}`}>
                    <h4> {this.props.el.titre} </h4>
                    </Link>
                        
                    <p>{this.props.el.description.substr(0, 10)}...}</p>
                    </div>
                </div> 
        )
    }
}
