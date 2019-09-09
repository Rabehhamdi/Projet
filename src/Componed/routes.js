import React, { Component } from 'react' 
import {Route} from 'react-router-dom'
import Departement from './departement/Page_departement'
import Index from './index/index.js'
import ListeEvenement from './evenement/Liste_evenement'
import Item_evenement_description from './evenement/Item_evenement_description'
import About from './about/about'
import Contact from './contact/contact'
import Dashboard from './profile/index'
import Profile from './profile/profile'
import Matiere from './profile/liste_matiere'
import Emploi_de_temp from './profile/emploi_de_temp'
import Entreprise from './profile/etudiant_entreprise/index';
import responsabledeentreprise from './profile/responsable_entreprise/index'
import Offres from './profile/responsable_entreprise/Offre'
import Admin from './profile/Administrateure/indes'
import ListeEntreprise from './profile/Administrateure/Liste_Entreprise'
import AdminListeEvenement from './profile/Administrateure/ListeEvenement'
import ListeEtudiant from './profile/Administrateure/Liste_Etudiant'
import ListeActualites from './profile/Administrateure/ListeActualite'
import ListeEmploidetemp from './profile/Administrateure/Liste_Emploidetemp'
import LogIn from './login/connection'
import SignUp from './login/creer'
import Descriptiondepartement from './departement/Description_departement'
import ModificationActualite from './profile/Administrateure/modificationActualite'
import ModificationEvenement from './profile/Administrateure/modificationEvenement'
import ListeDepartement from './profile/Administrateure/ListeDepartement'
export default class Routes extends Component { 

    render() {
        return (
            <div>
                <Route exact path='/' component={Index} />
                <Route exact path="/ListeEvenement" component={ListeEvenement}  />
                <Route exact path="/ItemEvenement/:id" render={(props) => <Item_evenement_description id={props.match.params.id} /> }  />
                <Route exact path='/Departement' component={Departement} />
                <Route exact path="/About" component={About} /> 
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Dashboard/:id" render={(props) => <Dashboard id={props.match.params.id} />}/>
                <Route exact path='/Profile/:id' render={(props) => <Profile _id={props.match.params.id} />} />  
                <Route exact path='/Matiere/:id' render={(props) => <Matiere _id= { props.match.params.id } />} />  
                <Route exact path='/Emploi/:id' render={(props) => <Emploi_de_temp _id= { props.match.params.id } />} />  
                <Route exact path='/Entreprise/:id' render={(props) => <Entreprise _id= { props.match.params.id } />} /> 
                {/* <Route exact path="/ResponsableEntreprise" component={responsabledeentreprise}/> */}
                <Route exact path='/Offres/:id' render={(props) => <Offres _id= { props.match.params.id } />} /> 
                <Route exact path='/Admin/:id' render={(props) => <Admin _id= { props.match.params.id } />} /> 
                <Route exact path='/ListeEntreprise/:id' render={(props) => <ListeEntreprise _id= { props.match.params.id } />} />
                <Route exact path='/AdminListeEvenement/:id' render={(props) => < AdminListeEvenement _id= { props.match.params.id } />} />
                <Route exact path='/ListeDepartement/:id' render={(props) => < ListeDepartement _id={props.match.params.id} />} />

                <Route exact path='/ListeEtudiant/:id' render={(props) => < ListeEtudiant _id={props.match.params.id} />} />
                <Route exact path='/ListeActualites/:id' render={(props) => < ListeActualites _id={props.match.params.id} />} />
                <Route exact path='/ListeEmploidetemp/:id' render={(props) => <ListeEmploidetemp _id={props.match.params.id} />} />
                <Route exact path="/LogIn" component={LogIn} /> 
                <Route exact path="/SignUp" component={SignUp} /> 
                <Route exact path="/ItemDepartement/:id" render={(props) => < Descriptiondepartement id={props.match.params.id} />} />
                <Route exact path='/ModificationActualite/:a/:id' render={(props) => <ModificationActualite _id={props.match.params.id} />} />
                <Route exact path='/ModificationEvenement/:z/:id' render={(props) => <ModificationEvenement _id={props.match.params.id} />} />
            </div>
        )
    }
}
