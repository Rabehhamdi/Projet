import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 
export default class Menu extends Component {
    render() {
        return ( 
                <div class="col-md-3">
                <div class="list-group">
                    <Link to="/Dashboard">
                        <a href="index.html" class="list-group-item active main-color-bg">
                            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                        </a>
                    </Link>
                    <Link to="/Profile">
                        <a href="users.html" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Profile </a>
                    </Link>
                    <Link to="/Matiere">
                        <a href="pages.html" class="list-group-item"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Matiere </a>
                    </Link>
                    <Link to="/Emploi">
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Emploi De Temp </a>
                    </Link> 
                    <Link to="/Entreprise">
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Entreprise  </a>
                    </Link>
                     
                    <Link to="/Offres">
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Ajoute Offres  </a>
                    </Link>
                    <Link to="/Admin">
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Admin  </a>
                    </Link>
                    <Link to="/ListeEntreprise">
                        <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste des Entreprises  </a>
                    </Link>
                    <Link to="/AdminListeEvenement">
                        <a href="#" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste des Evenement  </a>
                    </Link>
                    <Link to="/ListeEtudiant">
                        <a href="#" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste des Etudiant  </a>
                    </Link> 
                    <Link to="/ListeActualites">
                        <a href="#" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste des Actualites  </a>
                    </Link>
                    <Link to="/ListeEmploidetemp">
                        <a href="#" class="list-group-item"><span class="glyphicon glyphicon-tower" aria-hidden="true"></span> Liste Emploi de temp  </a>
                    </Link>
                    </div>
                <div class="well " style={{height:"300vh"}}> 
                    
                </div>
                </div> 
        )
    }
}
