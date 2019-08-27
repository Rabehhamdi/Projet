import React, { Component } from 'react'
import Header from '../index/header'
import Footer from '../index/footer'
import Departement from './Liste_departement'
export default class ListeDepartement extends Component {
    render() {
        return (
          <div>
                <Header/>
                    <Departement/> 
                <Footer />
          </div>
        )
    }
}
