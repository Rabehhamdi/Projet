import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import './Style.css'
class Creer extends Component {
    state = {
        cin:"", 
        email: "" ,
        role:"",
        password: "",
        Fist_Name: "",
        Last_Name: "",
        Adress: "",
        PostalCode: "",
        About_Me: "",
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    add = (event) => {
        event.preventDefault();
        return (this.state.Fist_Name.length == 0 && this.state.About_Me.length == 0 && this.state.Last_Name.length == 0 && this.state.Adress.length == 0 && this.state.PostalCode.length == 0 &&this.state.cin.length == 0 &&this.state.email.length == 0 && this.state.password.length == 0 && this.state.role.length == 0) ? {}
            : axios.post('/register', this.state).then(() => this.props.history.push('/LogIn'))
                .catch((err) => alert(err))
    }
    render() {
        return (
            <div class="rabeh"  >
                <div class="signup-form rabeh">
                    <form method="post">
                        <div class="form-header">
                            <h2>Créer un compte</h2>
                        </div>
                        <div class="form-group">
                            <label>cin</label>
                            <input type="text" class="form-control" name="cin" value={this.state.cin} onChange={this.handleChange} />
                        </div> 
                        <div class="form-group">
                            <label>Fist_Name</label>
                            <input type="text" class="form-control" name="Fist_Name" value={this.state.Fist_Name} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label>Last_Name</label>
                            <input type="text" class="form-control" name="Last_Name" value={this.state.Last_Name} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label>Adress</label>
                            <input type="text" class="form-control" name="Adress" value={this.state.Adress} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label>PostalCode</label>
                            <input type="text" class="form-control" name="PostalCode" value={this.state.PostalCode} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label>About_Me</label>
                            <input type="email" class="form-control" name="About_Me" value={this.state.About_Me} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange}  />
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="password" class="form-control" name="confirm_password"   />
                        </div> 
                        <div class="form-group">
                            <label>Choose your option</label>
                            {/* assain ouwe fetch */}
                            <select class="mdb-select md-form form-control" name="role" value={this.state.role} onChange={this.handleChange} >
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Etudiant</option>
                                <option value="2">Responsable De L'entreprise</option> 
                            </select>
                        </div>
                        <div class="form-group">
                            <button type="button" onClick={this.add} class="btn btn-primary btn-block btn-lg" >Sign Up</button>
                            <br/>
                            <Link to="/LogIn">
                                <button type="submit" class="btn btn-primary btn-block btn-lg" >Log In</button>
                            </Link>
                        </div>
                    </form>
                    </div>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Ajoute: User => {
            dispatch({
                type: "ADD_User",
                User
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Creer) 
