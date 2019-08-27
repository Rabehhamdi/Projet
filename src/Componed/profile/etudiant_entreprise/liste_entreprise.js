import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ItemEntreprise from './item_entrepise'

class ListeEntreprise extends Component {
    componentDidMount = () => {
        axios.get("/afficheEntreprise")
            .then(res => {
                this.props.update(res.data)

            })
    }
    render() {
        const { dataEntreprise}=this.props
        
        return (
            <div class="col-md-9">
                        <div class="panel panel-default">
                    <div class="panel-heading main-color-bg">
                        <h3 class="panel-title">Listes des entreprises</h3>
                            </div>
                            <div class="panel-body">
                         
                            <div class="card-group">
                            <div style={{ desplay: "flex", flexWrap: "wrap" }} >
                                {dataEntreprise.map((el, index) => <ItemEntreprise el={el} key={index} />)}
                            
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
             
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        dataEntreprise: state.reducerEntreprise    }
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
export default connect(mapStateToProps, mapDispatchToProps)(ListeEntreprise)