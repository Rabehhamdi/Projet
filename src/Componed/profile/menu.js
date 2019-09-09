import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
 
class Menu extends Component {
 
    componentDidMount = () => { 
        var id = window.location.pathname
        var x = 0
        var ch = ""
        for (var i = 0; i < id.length; i++) {
            if (x === 2)
                ch = ch + id[i]
            if (id[i] === "/")
                x = x + 1
        }
        axios.get(`/AffProfile/${ch}`)
            .then(res => {
                this.props.update(res.data) 
            })

    }
    render() {
        const { user } = this.props  
       
        var id = window.location.pathname
        var x = 0
        var ch = ""
        for (var i = 0; i < id.length; i++) {
            if (x === 2)
                ch = ch + id[i]
            if (id[i] === "/")
                x = x + 1
        }
        return ( 
            
                <div class="col-md-3"> 
                {/* {alert(window.location.pathname)} */}
                {/* {alert(this.props.location.pathname)} */}
                <div class="list-group">
                    <Link to={`/Dashboard/${ch}`}>
                        <a href="index.html" class="list-group-item active main-color-bg">
                            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                        </a>
                    </Link>
                    <Link to={`/Profile/${ch}`}>
                        <a href="users.html" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Profile </a>
                    </Link>
                    
                    {user.role === "1" ? <Link to={`/Matiere/${ch}`}>
                        <a href="pages.html" class="list-group-item"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Matiere </a>
                    </Link> : null}
                    {user.role === "1" ?
                    <Link to={`/Emploi/${ch}`}>
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Emploi De Temp </a>
                    </Link> : null}
                    {user.role === "1" ?
                    <Link to={`/Entreprise/${ch}`}>
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Entreprise  </a>
                    </Link> : null}
                    {user.role === "2" ?
                    <Link to={`/Offres/${ch}`}>
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Ajoute Offres  </a>
                    </Link> : null}
                    {user.role === "0" ?
                    <Link to={`/Admin/${ch}`}>
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Admin  </a>
                    </Link> : null}
                    {user.role === "0" ?
                    <Link to={`/ListeEntreprise/${ch}`}>
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste des Entreprises  </a>
                    </Link>  : null}
                    {user.role === "0" ?
                    <Link to={`/ListeDepartement/${ch}`}>
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste des Departement  </a>
                    </Link>  : null}
                    {user.role === "0" ?
                    <Link to={`/AdminListeEvenement/${ch}`}>
                        <a href="#" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste des Evenement  </a>
                    </Link>  : null}
                    {user.role === "0" ?
                    <Link to={`/ListeEtudiant/${ch}`}>
                        <a href="#" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste des Etudiant  </a>
                    </Link>  : null}
                    {user.role === "0" ?
                    <Link to={`/ListeActualites/${ch}`}>
                        <a href="#" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste des Actualites  </a>
                    </Link>  : null}
                    {user.role === "0" ?
                    <Link to={`/ListeEmploidetemp/${ch}`}>
                        <a href="#" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste Emploi de temp  </a>
                    </Link> : null}
                    </div>
                <div class="well " style={{height:"300vh"}}> 
                    
                </div>
                </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
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
export default connect(mapStateToProps, mapdispatchToProps)(Menu)