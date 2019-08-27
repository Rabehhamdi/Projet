import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Header from './header'
import Footer from './footer'
import Menu from './menu'
class EmploiTemp extends Component {
    componentDidMount = () => {
        axios.get("/UPDATEYourEmploit")
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        const { dataemploit}=this.props
        return (
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
                <div class="container">
                    <Menu />   
                    <div class="col-md-9">
                    <div class="panel panel-default">
                            <div class="panel-heading main-color-bg">
                                <h3 class="panel-title">Emploi De Temp</h3>
                        </div>
                        <div class="panel-body">
                                <iframe src={dataemploit} frameborder="0" height="500px" width="100%">

                                </iframe>
                        </div>
                    </div> 
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataemploit: state.reducerYourEmploit
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATEEntreprise',
                update
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmploiTemp)