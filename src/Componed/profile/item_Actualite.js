import React, { Component } from 'react'

export default class ItemActualite extends Component {
    render() {
        return (
            <div className="col-md-5" style={{ paddingTop: "20px" }}>
                <div className="card"> <img className="img-fluid" src={this.props.el.img} alt="" />
                    <div className="card-img-overlay"> <span class="badge badge-pill badge-danger">News</span> </div>
                    <div className="card-body">
                        <div className="news-title">
                            <h2 className=" title-small"><a href="#">{this.props.el.titre} </a></h2>
                        </div>
                        <p className="card-text"><small className="text-time"><em>{this.props.el.date}</em></small></p>
                    </div>
                </div>
            </div>
        )
    }
}
