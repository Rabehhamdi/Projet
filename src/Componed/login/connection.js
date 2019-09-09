import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import './Style.css'
class Connection extends Component {

    state = { 
        email: "" ,
        password: "" 
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    add = (event) => {
        event.preventDefault();
        return (this.state.email.length == 0 && this.state.password.length == 0 ) ? {}
            : axios.post('/login', this.state)
                .then((data) => { this.props.history.push(`/Profile/${data.data._id}`)}) 
                // .then((data) => this.props.history.push(`/Profile/${data.data.cin}`))
                .catch((err) => alert(err))  
    }
    // ;alert(data.data._id); this.props.update({ _id: data.data._id, name: data.data.name, cin: data.data.cin, email: data.data.email, role: data.data.role })
    render() {
        return (
            <div class="rabeh"  >
                
                <div class="signup-form " Style={{ height:" 400px !important;" 	}}>
                    <form method="post">
                        <div class="form-header">
                            <h2>Connection</h2>
                        </div> 
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handleChange} required="required" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange} required="required" />
                        </div> 
                        <div class="form-group">
                            <button type="submit" onClick={this.add} class="btn btn-primary btn-block btn-lg" >Log In</button>
                            <br />
                            <Link to="/SignUp">
                                <button type="submit" class="btn btn-primary btn-block btn-lg" >Sign Up</button>
                            </Link>
                        </div>
                    </form> 
                </div>
            </div>
        )
    }
}
const mapdispatchToProps = dispatch => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATEUser',
                update
            })
        }
    }
}
export default connect(null, mapdispatchToProps)(Connection)