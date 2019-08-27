import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ItemEvenement from './item_evenement'
 
class Evenement extends Component {
    componentDidMount = () => {
        axios.get("/afficheEvenement")
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        const {dataEvenement}=this.props
        return (
            <div>
                <div className="latest-area section-padding bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title-wrapper">
                                    <div className="section-title">
                                        <h3>Liste Evenement</h3>
                                        <p>There are many variations of passages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {dataEvenement.map((el,index)=><ItemEvenement el={el} key={index}/> )}
                            
                             
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToPropos=(state)=>
{
    return{
        dataEvenement: state.reducerEvenement
    }
}
const mapdispatchToProps = dispatch => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATE',
                update
            })
        }
    }
}
export default connect(mapStateToPropos, mapdispatchToProps) (Evenement)
