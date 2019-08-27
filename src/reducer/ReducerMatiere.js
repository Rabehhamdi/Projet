let tabMatiere =
    [
        {
            _id: '1',
            Matiere: "Matière1 ",
            Coffision: "1",
            nbrheure: "12",
            Prof: "Rabeh Hamdi"
        },
        {
            _id: '2',
            Matiere: "Matière2 ",
            Coffision: "2",
            nbrheure: "12",
            Prof: "Rabeh Hamdi"
        },
        {
            _id: '3',
            Matiere: "Matière3 ",
            Coffision: "3",
            nbrheure: "12",
            Prof: "Rabeh Hamdi"
        }
    ] 

const reducerMatiere = (state = tabMatiere, action) => {
    switch (action.type) { 
        case 'UPDATEMatiere':
            return (
                state = action.update
            )
        default:
            return state
    }
}
export default reducerMatiere