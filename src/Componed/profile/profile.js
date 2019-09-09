import React, { Component } from 'react'
import {connect }from 'react-redux'
import axios from 'axios'
import Header from './header'
import Footer from './footer'
import Menu from './menu'
class componentName extends Component {
    componentDidMount = () => {
        axios.get(`/AffProfile/${this.props._id}`)
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        const { user } = this.props
        return (
            
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
               
                <div class="container"> 
                    <Menu /> 
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card">
                                    <div class="card-header card-header-primary" style={{ backgroundColor: "#e74c3c" }}>
                                        <h4 class="card-title" style={{ color: "#fff" }}>Edit Profile</h4>
                                        <p class="card-category" style={{ color: "#fff" }}>Complete your profile</p>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">CIN</label>
                                                    <input type="text" value={user.cin} class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            
                                                 
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="bmd-label-floating">Email address</label>
                                                            <input type="email" value={user.email} class="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="bmd-label-floating">Fist Name</label>
                                                            <input type="text" value={user.Fist_Name} class="form-control"/>
                                                            </div>
                                                        </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="bmd-label-floating">Last Name</label>
                                                            <input type="text" value={user.Last_Name} class="form-control"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="bmd-label-floating">Adress</label>
                                                            <input type="text" value={user.Adress} class="form-control"/>
                                                                </div>
                                                            </div>   
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="bmd-label-floating">Postal Code</label>
                                                            <input type="text" value={user.PostalCode} class="form-control"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label>About Me</label>
                                                                    <div class="form-group">
                                                                <textarea class="form-control" value={user.About_Me} rows="5"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                                                        <div class="clearfix"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-profile">
                                <div class="card-avatar">
                                    <a href="#pablo">
                                            <img class="img" src="http://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png/image_preview" />
                                    </a>
                                </div>
                                <div class="card-body">
                                            
                                            <h6 class="card-category text-gray">{user.role === "2" ? <div>Etudiant</div> : null} {user.role === "1" ? <div>Responsable d'entreprise</div> : null}  {user.role === "0" ? <div>Administrateur</div> : null} </h6>
                                            
                                            <h4 class="card-title">{user.cin}</h4>
                                    <p class="card-description">
                                                {user.About_Me}
                                    </p>
                                            <h3> {user.email} </h3> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapdispatchToProps = dispatch => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATEUser',
                update
            })
        }
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(componentName)
