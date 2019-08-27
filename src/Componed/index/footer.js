import React, { Component } from 'react' 

 class  Footer extends Component {
   

    render() {
        return (
            <div className="as-mainwrapper"> 
                <div className="bg-white">
                      <div className="newsletter-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-5">
                                    <div className="newsletter-content">
                                        <h3>SUBSCRIBE</h3>
                                        <h2>TO OUR NEWSLETTER</h2>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="newsletter-form angle">
                                        <form action="#" id="mc-form" className="mc-form footer-newsletter fix">
                                            <div className="subscribe-form">
                                                <input id="mc-email" type="email" name="email" placeholder="Enter your email address..."/>
                                                    <button id="mc-submit" type="submit">SUBSCRIBE</button>
                                        </div>    
                                        </form>
                                            
                                            <div className="mailchimp-alerts text-centre fix pull-right">
                                                <div class="mailchimp-submitting"></div> 
                                        <div className="mailchimp-success"></div> 
                                        <div className="mailchimp-error"></div>
                                    </div>
                                             
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                                <div  className="footer-widget-area">
                    <div  className="container">
                        <div  className="row">
                            <div  className="col-lg-3 col-md-6">
                                <div  className="single-footer-widget">
                                    <div  className="footer-logo">
                                            <a href="index.html"><img src={require('../Style/img/logo/footer.png')}   alt=""/></a>
                                    </div>
                                    <p>There are many variations of passg of Lorem Ipsum available, but thmajority have suffered altem, </p>
                                    <div  className="social-icons">
                                        <a href="#"><i  className="zmdi zmdi-facebook"></i></a>
                                        <a href="#"><i  className="zmdi zmdi-rss"></i></a>
                                        <a href="#"><i  className="zmdi zmdi-google-plus"></i></a>
                                        <a href="#"><i  className="zmdi zmdi-pinterest"></i></a>
                                        <a href="#"><i  className="zmdi zmdi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-lg-3 col-md-6">
                                <div  className="single-footer-widget">
                                    <h3>GET IN TOUCH</h3>
                                    <a href="tel:555-555-1212"><i  className="fa fa-phone"></i>555-555-1212</a>
                                    <span><i  className="fa fa-envelope"></i>info@example.com</span>
                                    <span><i  className="fa fa-globe"></i>www.educat.com</span>
                                    <span><i  className="fa fa-map-marker"></i>ur address goes here,street.</span>
                                </div>
                            </div>
                            <div  className="col-lg-3 col-md-6">
                                <div  className="single-footer-widget">
                                    <h3>Useful Links</h3>
                                    <ul  className="footer-list">
                                        <li><a href="#">Teachers &amp; Staff</a></li>
                                        <li><a href="#">Our Courses</a></li>
                                        <li><a href="#">Courses Categories</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div  className="col-lg-3 col-md-6">
                                <div  className="single-footer-widget">
                                    <h3>Instagram</h3>
                                    <div  className="instagram-image">
                                        <div  className="footer-img">
                                                <a href="#"><img src={require('../Style/img/footer/1.jpg')}    alt=""/></a>
                                        </div>
                                        <div  className="footer-img">
                                                <a href="#"><img src={require('../Style/img/footer/2.jpg')}  alt=""/></a>
                                        </div>
                                        <div  className="footer-img">
                                                <a href="#"><img src={require('../Style/img/footer/3.jpg')}  alt=""/></a>
                                        </div>
                                        <div  className="footer-img">
                                                <a href="#"><img src={require('../Style/img/footer/4.jpg')}  alt=""/></a>
                                        </div>
                                        <div  className="footer-img">
                                                <a href="#"><img src={require('../Style/img/footer/5.jpg')}  alt=""/></a>
                                        </div>
                                        <div  className="footer-img">
                                                <a href="#"><img src={require('../Style/img/footer/6.jpg')}  alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                <footer  className="footer-area">
                    <div  className="container">
                        <div  className="row">
                            <div  className="col-lg-6 col-md-7 col-12">
                                <span>Copyright &copy; Educat 2017.All right reserved.Created by <a href="#">Educat</a></span>
                            </div>
                            <div  className="col-lg-6 col-md-5 col-12">
                                <div  className="column-right">
                                    <span>Privacy Policy , Terms &amp; Conditions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> 
            </div>  
            </div>
            </div>
         
        )
    }
}
 

export default Footer