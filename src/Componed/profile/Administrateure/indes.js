import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Header from '../header'
import Footer from '../footer'
import Menu from '../menu'
class Admin extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            aboutMe: "",
            _id:""
        }        
    }
    
    componentDidMount = () => {
        axios.get("/afiicheAboutMe")
            .then(res => { 
                this.props.update(res.data)
                this.setState({ aboutMe: res.data[0].aboutMe, _id: res.data[0]._id }) 
            })
    }
    handleChange=(event)=>{
        this.setState({
            aboutMe:event.target.value
            
        })
    }
    modifier=(event)=>{
        event.preventDefault();
        axios.put(`/ModificationaboutMe/${this.state._id}`, {
            aboutMe: this.state.aboutMe
        }).then(() => this.props.edit(this.state.aboutMe ))
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
                                                        <textarea class="form-control" rows="5" value={this.state.aboutMe} name="description" onChange={this.handleChange}>
                                                           
                                                        </textarea>
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
        edit: aboutMe => {
            dispatch({
                type: "EDIT_ABOUT",
                aboutMe
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