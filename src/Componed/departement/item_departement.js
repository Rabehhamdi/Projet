import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ItemDepartement extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-12" style={{paddingTop:'75px'}}>
                <div className="single-item">
                    <div className="single-item-image overlay-effect">
                        <a href="#"><img src={this.props.el.img} alt="" /></a>
                    </div>
                    <div className="single-item-text">
                        <h4><a href="#">{this.props.el.titre}</a></h4>
                        <div className="single-item-text-info">
                            <span>Directeur: <span>{this.props.el.chef_departement}</span></span>
                             
                        </div>
                        <p>{this.props.el.description.substr(0, 40)}...</p>
                        <div className="single-item-content">
                            <div className="single-item-comment-view">
                                <span><i className="zmdi zmdi-eye"></i>59</span>
                                <span><i className="zmdi zmdi-comments"></i>19</span>
                            </div>
                            <div className="single-item-rating">
                                <i className="zmdi zmdi-star"></i>
                                <i className="zmdi zmdi-star"></i>
                                <i className="zmdi zmdi-star"></i>
                                <i className="zmdi zmdi-star"></i>
                                <i className="zmdi zmdi-star-half"></i>
                            </div>
                        </div>
                    </div>
                    <Link to={`/ItemDepartement/${this.props.el._id}`}>
                        <div className="button-bottom">
                            <a href="#" className="button-default">Learn Now</a>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
