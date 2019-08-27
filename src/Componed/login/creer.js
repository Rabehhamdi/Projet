import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
export default class Creer extends Component {
    render() {
        return (
            <div class="rabeh"  >
                <div class="signup-form rabeh">
                    <form method="post">
                        <div class="form-header">
                            <h2>Créer un compte</h2>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" name="username" required="required" />
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" class="form-control" name="email" required="required" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" required="required" />
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="password" class="form-control" name="confirm_password" required="required" />
                        </div> 
                        <div class="form-group">
                            <label>Choose your option</label>
                            <select class="mdb-select md-form form-control"  >
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Etudiant</option>
                                <option value="2">Responsable De L'entreprise</option> 
                            </select>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block btn-lg" >Sign Up</button>
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
