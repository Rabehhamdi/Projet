let tabListeOffre =
    [
        {
            offre: "offre 1",
            titre: "titre 1",
            description: "description 1 description 1",
            date: "12/02/1997"

        },
        {
            offre: "offre 2",
            titre: "titre 2",
            description: "description 2 description 2",
            date: "12/02/1997"
        },
        {
            offre: "offre 3",
            titre: "titre 3",
            description: "description 3 description 3",
            date: "12/02/1997"
        },
        {
            offre: "offre 4",
            titre: "titre 4",
            description: "description 4 description 4",
            date: "12/02/1997"
        },
        {
            offre: "offre 4",
            titre: "titre 4",
            description: "description 4 description 4",
            date: "12/02/1997"
        }
        ,
        {
            offre: "offre 4",
            titre: "titre 4",
            description: "description 4 description 4",
            date: "12/02/1997"
        },
        {
            offre: "offre 4",
            titre: "titre 4",
            description: "description 4 description 4",
            date: "12/02/1997"
        }

    ] 
const reducerListeOffre = (state = tabListeOffre, action) => {
    switch (action.type) { 
        case 'UPDATEListeOffre':
            return (
                state = action.update
            )
        default:
            return state
        
    }
}
export default reducerListeOffre