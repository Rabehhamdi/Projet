import React, { Component } from 'react' 
 
import '../Style/css/color-switcher.css'
import "../Style/img/favicon.ico"     
import'../Style/css/font-awesome.min.css' 
import"../Style/css/material-design-iconic-font.min.css"             
import"../Style/css/bootstrap.min.css" 
 
import '../Style/style.css'
import "../Style/css/color.css" 
import "../Style/css/responsive.css" 
import "../Style/switcher/color-one.css"  
import "../Style/switcher/color-two.css"
import "../Style/switcher/color-three.css"
import "../Style/switcher/color-four.css" 
import "../Style/switcher/color-five.css" 
import "../Style/switcher/color-six.css" 
import "../Style/switcher/color-seven.css"
import "../Style/switcher/color-eight.css"
import "../Style/switcher/color-nine.css" 
import "../Style/switcher/color-ten.css" 
import "../Style/switcher/color-ten.css" 
import "../Style/switcher/pattren1.css" 
import "../Style/switcher/pattren2.css" 
import "../Style/switcher/pattren3.css" 
import "../Style/switcher/pattren4.css" 
import "../Style/switcher/pattren5.css" 
import "../Style/switcher/background1.css"   
import "../Style/switcher/background2.css"   
import "../Style/switcher/background3.css" 
import "../Style/switcher/background4.css"  
import "../Style/switcher/background5.css" 

import Header from './header'
import Slide from './slide'
import Why_educat from './why educat'
import Evenement from '../departement/Liste_departement'
import Facts from './facts'
import Departement from './Liste_evenement'
import Milleur from './meilleur'
import Footer from './footer'
export default class Index extends Component {
    render() {
        return ( 
            <div>
                <div className="as-mainwrapper">
                    <div className="bg-white"> 
                        <Header/>
                    </div>
                </div> 
                <Slide />
                <Why_educat />
                <Evenement />
                <Facts />
                <Departement />
                {/* <Milleur /> */}
                <Footer />
            </div>
        )
    }
}
