import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Item_evenement extends Component { 
    render() {
        return ( 
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="single-event-item">
                        <div class="single-event-image">
                            <a href="#">
                            <img src={this.props.el.img} alt="" style={{ height: "200px", weight: "50px" }} />
                            <span>{this.props.el.date_debut}</span>
                            </a>
                        </div>
                        <div class="single-event-text">
                        <h3><a href="#">{this.props.el.titre}</a></h3>
                            <div class="single-item-comment-view">
                            <span><i class="zmdi zmdi-time"></i>{this.props.el.heure_debut} - {this.props.el.heure_final}</span>
                            <span><i class="zmdi zmdi-pin"></i>{this.props.el.localisation}</span>
                            </div>
                        <p>{this.props.el.description}</p>
                        <Link to={`/ItemEvenement/${this.props.el._id}`}>
                            <a class="button-default" href="#">LEARN Now</a>
                        </Link>
                        </div>
                    </div>
                </div> 
        )
    }
}
