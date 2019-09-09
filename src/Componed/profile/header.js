import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div>
                
                <nav class="navbar navbar-default" style={{ height: "78px" }}>
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button> 
                        </div>
                        <div id="navbar" class="collapse navbar-collapse" style={{ display: "flex" }}>
                           <Link to="/">  <ul class="nav navbar-nav">
                                  
                                <li class="active"><a href="#">Dashboard</a></li>
                              
                            </ul>  </Link> 
                            <Link to="/">
                            <ul class="nav navbar-nav navbar-right"> 
                                <li><a href="#">Logout</a></li>
                            </ul>
                            </Link>
                        </div>
                    </div>
                </nav>

                <header id="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10">
                                <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> RABEH <small>RABEH</small></h1>
                            </div>

                        </div>
                    </div>
                </header>
                <section id="breadcrumb"> 
                    <Link to="/">   
                        <div class="container">
                            <ol class="breadcrumb">
                                <li class="active">Dashboard</li>
                            </ol>
                        </div>
                    </Link>
                </section>
            </div>
        )
    }
}
