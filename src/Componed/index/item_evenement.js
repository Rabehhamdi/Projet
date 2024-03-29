import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ItemEvenement extends Component {
    render() {
        return (
             
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="single-latest-item">
                        <div class="single-latest-image">
                        <a href="#"><img src={this.props.el.img ? this.props.el.img : "https://system.na1.netsuite.com/core/media/media.nl?id=3738002&c=589178&h=cd9e47a89ed774871723"} alt="" style={{ height: "80px", weight: "200px" }}/></a>
                        </div>
                        <div class="single-latest-text">
                            <h3><a href="#">{this.props.el.titre}</a></h3>
                            <div class="single-item-comment-view">
                                <span><i class="zmdi zmdi-calendar-check"></i>{this.props.el.date_debut}</span>
                                 
                            </div>
                            <p>{this.props.el.description}</p>
                        <Link to={`/ItemEvenement/${this.props.el._id}`}>
                            <a  class="button-default">LEARN Now</a>
                        </Link>
                        </div>
                    </div>
                </div>
             
        )
    }
}
