import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import Menu from './menu'
export default class componentName extends Component {
    render() {
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
                                            
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Username</label>
                                                        <input type="text" class="form-control"/>
                                                    </div>
                                                </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="bmd-label-floating">Email address</label>
                                                            <input type="email" class="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label class="bmd-label-floating">Fist Name</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="bmd-label-floating">Last Name</label>
                                                                    <input type="text" class="form-control"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label class="bmd-label-floating">Adress</label>
                                                                    <input type="text" class="form-control"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label class="bmd-label-floating">City</label>
                                                                    <input type="text" class="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label class="bmd-label-floating">Country</label>
                                                                    <input type="text" class="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label class="bmd-label-floating">Postal Code</label>
                                                                    <input type="text" class="form-control"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label>About Me</label>
                                                                    <div class="form-group">
                                                                        <label class="bmd-label-floating"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>
                                                                        <textarea class="form-control" rows="5"></textarea>
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
                                    <h6 class="card-category text-gray">CEO / Co-Founder</h6>
                                    <h4 class="card-title">Alec Thompson</h4>
                                    <p class="card-description">
                                        Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                                    </p>
                                    <a href="#pablo" class="btn btn-primary btn-round">Follow</a>
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
