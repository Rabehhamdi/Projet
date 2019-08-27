let tabEmploidetemp =
    [
        {
            _id: 1,
            niveaux: "niveaux 1",
            pdf: "https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true"

        },
        {
            _id: 2,
            niveaux: "niveaux 2",
            pdf: "https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true"

        },
        {
            _id: 3,
            niveaux: "niveaux 3",
            pdf: "https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true"

        },
        {
            _id: 4,
            niveaux: "niveaux 4",
            pdf: "https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true"

        }

    ]
const reduxEmploidetemp =(state=tabEmploidetemp , action)=>{
    switch(action.type){
        case 'UPDATEEmploidetemp':
            return (
                state = action.update
            )
        case "ADD_Emploidetemp" :{
            return state.concat(action.emploi)
        }
        case "REMOVE_Emploidetemp":{
            return state.filter((el, index) => el._id !== action._id )
        }
        default :
            return state
    }
}
export default reduxEmploidetemp