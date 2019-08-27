import React, { Component } from 'react'
import './Style/css/bootstrap.min.css'
import './Style/css/style.css'
import Header from './header'
import Menu from './menu'
import Contenu from './contenuPrincipal'
import Footer from './footer'
export default class Index extends Component {
    render() {
        return (
            <div style={{ backgroundColor:"#f4f4f4"}}>
                        <script src="http://cdn.ckeditor.com/4.6.1/standard/ckeditor.js"></script>
                
                <Header />
                <section id="main">
                    <div class="container">
                        <div class="row"> 
                            <Menu/>
                            <Contenu/>
                        </div>
                    </div>
                </section>

                          <Footer />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                <script src="./Style/js/bootstrap.min.js"></script>
                </div>
        )
    }
}
