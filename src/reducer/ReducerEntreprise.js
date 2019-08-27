let tabEntreprise =
    [
        {
            _id: "5",
            Nom: 'Rabeh 5', 
            Description: 'Description Description Description',
            Email: 'rabeh@rabeh.rabeh',
            Domaine: 'informatique',
            img: 'http://nouvelentrepreneur.fr/wp-content/uploads/sites/7/2017/06/entreprise.jpg'
        },
        {
            _id: "4",
            Nom: 'Rabeh 4',
            Description: 'Description Description Description Description Description Description Description Description',
            Email: 'rabeh@rabeh.rabeh',
            Domaine: 'informatique',
            img: 'http://nouvelentrepreneur.fr/wp-content/uploads/sites/7/2017/06/entreprise.jpg'
        },
        {
            _id: "3",
            Nom: 'Rabeh 3',
            Description: 'Description Description Description',
            Email: 'rabeh@rabeh.rabeh',
            Domaine: 'informatique',
            img: 'http://nouvelentrepreneur.fr/wp-content/uploads/sites/7/2017/06/entreprise.jpg'
        },
        {
            _id: "2",
            Nom: 'Rabeh 2',
            Description: 'Description Description Description',
            Email: 'rabeh@rabeh.rabeh',
            Domaine: 'informatique',
            img: 'http://nouvelentrepreneur.fr/wp-content/uploads/sites/7/2017/06/entreprise.jpg'
        }
    ]
 
const reducerEntreprise = (state=tabEntreprise, action)=>{
    switch(action.type){
        case "ADD_Entreprise":
            return(
                state.concat(action.Entreprise)
            )
        case "REMOVE_Entreprise":
            return(
                state.filter((el,index)=>el._id !== action._id)
            )
        case 'UPDATEEntreprise':
            return (
                state = action.update
            ) 
        default:
            return state
    }
} 
export default reducerEntreprise