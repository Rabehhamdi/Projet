 let tabOffre=
    [
        {
            _id:"1",
            offre: "offre 1",
            titre: "titre 1",
            description: "description 1 description 1",
            date: "12/02/1997"

        },
         {
            _id: "2",
            offre: "offre 2",
            titre: "titre 2",
            description: "description 2 description 2",
            date: "12/02/1997"
        },
        {   
            _id: "3",
            offre: "offre 3",
            titre: "titre 3",
            description: "description 3 description 3",
            date: "12/02/1997"
        }
    ]
const reducerOffre = (state = tabOffre, action) => {
    switch (action.type) {
        case 'UPDATEOffreDeEntreprise':
            return (
                state = action.update
            )
        case "ADD_Offre":
            return (
                state.concat(action.Offre)
            )
        case "REMOVE_Offre":
            return (
                state.filter((el, index) => el._id !== action._id)
            )

        default:
            return state
    }
}
export default reducerOffre