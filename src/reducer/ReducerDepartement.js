let tabDepartement =
    [
        {
            _id: "1",
            titre: "Département Informatique",
            chef_departement: "Rabeh Hamdi",
            img: "https://www.dailypioneer.com/uploads/2014/story/images/big/58665_Untitled-13.gif",
            description: "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"
        },
        {
            _id: "2",
            titre: "Département Energétique",
            chef_departement: "Rabeh Hamdi",
            img: "https://www.dailypioneer.com/uploads/2014/story/images/big/58665_Untitled-13.gif",
            description: "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"
        },
        {
            _id: "3",
            titre: "Département Électronique",
            chef_departement: "Rabeh Hamdi",
            img: "https://www.dailypioneer.com/uploads/2014/story/images/big/58665_Untitled-13.gif",
            description: "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"
        },
        {
            _id: "4",
            titre: "Département Mécanique",
            chef_departement: "Rabeh Hamdi",
            img: "https://www.dailypioneer.com/uploads/2014/story/images/big/58665_Untitled-13.gif",
            description: "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"
        }
    ]
const reducerDepartement = (state = tabDepartement, action) => {
    switch (action.type) {
        case "ADD_Departement":
            return (
                state.concat(action.Departement)
            )
        case "REVOME_Departement":
            return ( 
                state.filter((el, index) => el._id !== action._id)
            )
        case 'UPDATEDepartement':
            return (
                state = action.update
            ) 
        default:
            return state
    }
}
export default reducerDepartement