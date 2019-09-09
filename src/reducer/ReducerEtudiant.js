let tabEtudiant = [
    {
        _id:"1",
        img: "http://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png/image_preview",
        nom: "Hamdi",
        prenom: "Rabeh",
        Email: "rabeh@rabeh.rabeh",
        NumTel: "002225510",
        adresse: "aaaa",
        description: "aaaa",
        date_naissance: "aaa",
        niveau: "4 ing"
    },
    {
        _id: "2",
        img: "http://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png/image_preview",
        nom: "Hamdi",
        prenom: "Rabeh",
        Email: "rabeh@rabeh.rabeh",
        NumTel: "002225510",
        adresse: "aaaa",
        description: "aaaa",
        date_naissance: "aaa",
        niveau: "4 ing"
    },
    {
        _id: "3",
        img: "http://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png/image_preview",
        nom: "Hamdi",
        prenom: "Rabeh",
        Email: "rabeh@rabeh.rabeh",
        NumTel: "002225510",
        adresse: "aaaa",
        description: "aaaa",
        date_naissance: "aaa",
        niveau: "4 ing"
    }

]
const reducerEtudiant =(state= tabEtudiant,action)=>{
    switch (action.type){
        case "ADD_Etudiant":
            return (
                state.concat(action.Etudiant)
            )
        case "REMOVE_Etudiant":
            return(
                state.filter((el,index)=>el._id !==action._id)
            ) 
        case 'UPDATEEtudiant':
            return (
                state = action.update
            ) 
        default:
            return state
    }
}
export default reducerEtudiant