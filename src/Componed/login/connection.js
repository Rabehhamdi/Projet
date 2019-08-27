import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
export default class Connection extends Component {
    render() {
        return (
            <div class="rabeh"  >
                <div class="signup-form " Style={{ height:" 400px !important;" 	}}>
                    <form method="post">
                        <div class="form-header">
                            <h2>Connection</h2>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem</p>
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
                            <button type="submit" class="btn btn-primary btn-block btn-lg" >Log In</button>
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
