let tabEvenement=
    [
        {
            _id: "1",
            titre: "Learn English in ease",
            date_debut: "15 JUN",
            date_finale: "16 JUN",
            heure_debut: "4.00 pm",
            heure_final: "8.00 pm",
            localisation: "Comilla Bangladesh",
            description: "There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour,",
            img: "https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2017.2F05.2F05.2F9588059d-e157-42e4-b779-ac678d8fbaf5.2Ejpeg/750x375/background-color/ffffff/quality/70/en-images-salon-de-l-auto-ces-10-voitures-qui-font-l-evenement-1213126.jpg"
        },
        {
            _id: "2",
            titre: "Learn English in ease",
            date_debut: "25 DEC",
            date_finale: "26 DEC",
            heure_debut: "4.00 pm",
            heure_final: "8.00 pm",
            localisation: "Jessore Bangladesh",
            description: "There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr sarata din megla....",
            img: "https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2017.2F05.2F05.2F9588059d-e157-42e4-b779-ac678d8fbaf5.2Ejpeg/750x375/background-color/ffffff/quality/70/en-images-salon-de-l-auto-ces-10-voitures-qui-font-l-evenement-1213126.jpg"
        },
        {
            _id: "3",
            titre: "Learn English in ease", 
            date_debut: "01 MAR",
            date_finale: "03 MAR ",
            heure_debut: "4.00 pm",
            heure_final: "8.00 pm",
            localisation: "Dhaka Bangladesh",
            description: "There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr sarata din megla....",
            img: "https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2017.2F05.2F05.2F9588059d-e157-42e4-b779-ac678d8fbaf5.2Ejpeg/750x375/background-color/ffffff/quality/70/en-images-salon-de-l-auto-ces-10-voitures-qui-font-l-evenement-1213126.jpg"
        },
        {
            _id: "4",
            titre: "Learn English in easeaaaaaa",
            date_debut: "27 MAY",
            date_finale: "26 MAY",
            heure_debut: "4.00 pm",
            heure_final: "8.00 pm",
            localisation: "Comilla Bangladesh",
            description: "There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected humour, amr sarata din megla....",
            img: "https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2017.2F05.2F05.2F9588059d-e157-42e4-b779-ac678d8fbaf5.2Ejpeg/750x375/background-color/ffffff/quality/70/en-images-salon-de-l-auto-ces-10-voitures-qui-font-l-evenement-1213126.jpg"
        }
    ]
const reducerEvenement = (state = tabEvenement,action)=>{
    switch(action.type)
    {
        case "ADD_Evenement":
            return (
                state.concat(action.evenement)
            )
        case "REMOVE_Evenement":
            return (
                state.filter((el, index) => el._id !== action._id)
            ) 
        case "ModificationEvenement":
            return state.map((el, index) => {
                if (el._id === action.element._id) {
                    return action.element
                }
                return el
            })
        case 'UPDATE':
            return (
                state = action.update
            )   
        default:
            return state
    }
}
export default reducerEvenement