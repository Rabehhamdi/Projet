import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import Menu from '../menu'
import Edit from './edit_generale'
export default class ResponsableEntreprise extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
                <div class="container">
                    <Menu /> 
                    <Edit />
                </div>
                <Footer />
            </div >
        )
    }
}
