let tabActualites =
    [
        {
            _id: 1,
            titre: "titre 1",
            description: "description 1description 1 description  1description description",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLdrD0zAf3VZc12KmBBdn_RSGJg5BatKMo5cyUrAk1-xlDtyj",
            date: "06/08/2019"
        },
        {
            _id: 2,
            titre: "titre 2",
            description: "description 2 description 2 description 2 description 2 description",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLdrD0zAf3VZc12KmBBdn_RSGJg5BatKMo5cyUrAk1-xlDtyj",
            date: "06/08/2019"
        },
        {
            _id: 3,
            titre: "titre 3",
            description: "description  3 description 3 description 3 description description",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLdrD0zAf3VZc12KmBBdn_RSGJg5BatKMo5cyUrAk1-xlDtyj",
            date: "06/08/2019"
        },
        {
            _id: 4,
            titre: "titre 4 ",
            description: "description 4 description  4description description description",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLdrD0zAf3VZc12KmBBdn_RSGJg5BatKMo5cyUrAk1-xlDtyj",
            date: "06/08/2019"
        },
        {
            _id: 5,
            titre: "titre 5",
            description: "description 5 description 5 description  5description description",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLdrD0zAf3VZc12KmBBdn_RSGJg5BatKMo5cyUrAk1-xlDtyj",
            date: "06/08/2019"
        }
    ]
 
const reducerActualite = (state = tabActualites,action)=>{
    switch(action.type){
        case "ADD_Actualite":
            return(
                state.concat(action.Actualite)
            )
        case "REVOME_Actualite":
            return (
                state.filter((el,index)=>el._id !== action._id)
            )
        case "ModificationActualite":
            return state.map((el, index) => {
                if (el._id === action.element._id) {
                    return action.element
                }
                return el
            })
        case 'UPDATEactualite':
            return (
                state = action.update
            ) 
        default:
            return state
    }
}
export default reducerActualite