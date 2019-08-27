import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import Menu from '../menu'
import ListeEntreprise from './liste_entreprise'
import ListeOffre from './Liste_offre'
export default class Entreprise extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
                <div class="container">
                    <Menu />  
                    <ListeOffre />       
                    <ListeEntreprise/> 
                    
                </div>
                <Footer />
            </div >
        )
    }
}
