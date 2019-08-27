import React, { Component } from 'react'
import  {Link} from 'react-router-dom'
export default class Heder extends Component {
    render() {
        return ( 
                <div className="as-mainwrapper">
                    <div className="bg-white">
                        <header>
                            <div className="header-top">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-5 d-none d-lg-block d-md-block">
                                            <span>Have any question? +968 547856 254</span>
                                        </div>
                                        <div className="col-lg-5 col-md-7 col-12">
                                            <div className="header-top-right">
                                            <Link to="/LogIn"> 
                                            <div className="content"><h4 style={{color:"#fff"}}><i className="zmdi zmdi-account"></i>Sing In</h4> 
                                             </div> 
                                            </Link> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="header-logo-menu sticker">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3 col-12">
                                        <div class="logo">
                                            <a href="index.html"><img src={require('../Style/img/logo/logo.png' )}alt="EDUCAT" /></a>
                                    </div>
                                        </div>
                                        <div class="col-lg-9 col-12">
                                            <div class="mainmenu-area pull-right">
                                                <div class="mainmenu d-none d-lg-block">
                                                    <nav>
                                                        <ul id="nav">
                                                            
                                                            <li class="current">
                                                                <Link to ='/'>
                                                                 Home
                                                                 </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/ListeEvenement'>
                                                                Liste Evenement 
                                                                </Link>
                                                            </li>
                                                        <li><Link to='/Departement'>Departement</Link>
                                                                <ul class="sub-menu">
                                                                <li>Informatique </li>
                                                                <li>Energétique </li>
                                                                <li>Génie Électronique </li>
                                                                <li>Génie Mécanique </li>

                                                                </ul>
                                                            </li>
                                                             
                                                            <li>
                                                                <Link to='/About'>
                                                                ABOUT US
                                                                </Link>
                                                            </li>
                                                            <li>
                                                            <Link to='/Contact'>
                                                                Contact
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <ul class="header-search">
                                                    <li class="search-menu">
                                                        <i id="toggle-search" class="zmdi zmdi-search-for"></i>
                                                    </li>
                                                </ul> 
                                        <div class="search">
                                                    <div class="search-form">
                                                        <form id="search-form" action="#">
                                                            <input type="search" placeholder="Search here..." name="search" />
                                                            <button type="submit">
                                                                <span><i class="fa fa-search"></i></span>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div> 
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            
                        </header> 
                    </div>
                </div> 
        )
    }
}
