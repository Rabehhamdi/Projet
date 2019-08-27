import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Header from '../header'
import Footer from '../footer'
import Menu from '../menu'
class Admin extends Component { 
    componentDidMount = () => {
        axios.get("/afiicheAboutMe")
            .then(res => {
                this.props.update(res.data)

            })
    }
    handleChange=(event)=>{
        this.setState({
            newdata:event.target.value
        })
    }
    modifier=(event)=>{
        event.preventDefault();
        this.props.edit(this.state.newdata)
    }
    
    render() { 
        return (
            <div style={{ backgroundColor: "#f4f4f4" }}>
                <Header />
                <div class="container">
                    <Menu /> 
                    <div class="col-md-9">
                        <div class="panel panel-default">
                            <div class="panel-heading main-color-bg">
                                <h3 class="panel-title">Administrateure</h3>
                            </div>
                            <div class="panel-body">
                                <div class="card-body">
                                    <form>
                                        
                                         
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>About Me</label>
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating"> </label>
                                                        <textarea class="form-control" rows="5" name="description" onChange={this.handleChange}>{this.props.data[0].about}</textarea>
                                                        {/* <textarea class="form-control" rows="5" onChange={this.handelchange}  >{this.props.data}</textarea> */}
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        <button type="submit" class="btn btn-primary pull-right" onClick={this.modifier}>Update About Me</button>
                                        <div class="clearfix"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.ReducerAbout
    }
}
const MapDispatchToPropos = (dispatch) => {
    return {
        edit: newAbout => {
            dispatch({
                type: "EDIT_ABOUT",
                newAbout
            })
        }, 
        update: (update) => {
            dispatch({
                type: 'UPDATEABOUT',
                update
            })
        }  
    }
}
 
 
export default connect(mapStateToProps, MapDispatchToPropos)(Admin)