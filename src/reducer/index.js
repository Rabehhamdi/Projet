import {combineReducers} from 'redux'
import reducerEvenement from './ReducerEvenement'
import reducerEntreprise from './ReducerEntreprise'
import reducerEtudiant from './ReducerEtudiant'
import ReducerActualite from './ReducerActualite'
import RedcerEmploidetemp from './ReudxEmploidetemp'
import ReducerOffres from './ReducerOffres'
import ReducerAbout from './ReducerAboutMe' 
import ReducerListeOffres from './ReducerListeOffres'
import reducerYourEmploit from './ReducerYourEmploideTemp'
import reducerMatiere from './ReducerMatiere'
import ReducerDepartement from './ReducerDepartement'
import user from './user'
export default combineReducers({ reducerEvenement,
    reducerEntreprise,
    reducerEtudiant,
    ReducerActualite,
    RedcerEmploidetemp,
    ReducerOffres,
    ReducerAbout,
    ReducerListeOffres,
    reducerYourEmploit,
    reducerMatiere,
    ReducerDepartement,
    user})