import React, { Component } from 'react'
import Header from '../index/header'
import Footer from '../index/footer'
export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="breadcrumb-banner-area" >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="breadcrumb-text">
                                    <h1 class="text-center">CONTACT US</h1>
                                    <div class="breadcrumb-bar">
                                        <ul class="breadcrumb text-center">
                                            <li><a href="index.html">Home</a></li>
                                            <li>CONTACT</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="google-map-area"> 
                    <div id="contacts" class="map-area">
                        <div id="googleMap"  >
                            <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
                                type="text/javascript"></script>
                        </div>
                    </div>
                </div> 
                <div class="contact-form-area section-padding" style={{ backgroundColor: "#fff" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-12">
                                <h4 class="contact-title">contact info</h4>
                                <div class="contact-text">
                                    <p><span class="c-icon"><i class="zmdi zmdi-phone"></i></span><span class="c-text">+88 018 785 454 589</span></p>
                                    <p><span class="c-icon"><i class="zmdi zmdi-email"></i></span><span class="c-text">info@example.com</span></p>
                                    <p><span class="c-icon"><i class="zmdi zmdi-pin"></i></span><span class="c-text">House 09, Road 32, Mohammadpur,<br/>
                                        Dhaka-1200, UK</span></p>
                                </div>
                                    <h4 class="contact-title">social media</h4>
                                    <div class="link-social">
                                        <a href="#"><i class="zmdi zmdi-facebook"></i></a>
                                        <a href="#"><i class="zmdi zmdi-rss"></i></a>
                                        <a href="#"><i class="zmdi zmdi-google-plus"></i></a>
                                        <a href="#"><i class="zmdi zmdi-pinterest"></i></a>
                                        <a href="#"><i class="zmdi zmdi-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-12">
                                    <h4 class="contact-title">send your massage</h4>
                                    <form id="contact-form" action="http://preview.hasthemes.com/educat-v1/educat/mail.php" method="post">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" name="name" placeholder="name"/>
                                        </div>
                                                <div class="col-md-6">
                                                    <input type="email" name="email" placeholder="Email"/>
                                        </div>
                                                    <div class="col-md-12">
                                                        <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                                                        <button type="submit" class="button-default">SUBMIT</button>
                                                    </div>
                                                </div>
                                </form>
                                            <p class="form-messege"></p>
                                        </div>
                        </div>
                                </div>
                            </div>
                            <Footer />
            </div>
        )
    }
}
