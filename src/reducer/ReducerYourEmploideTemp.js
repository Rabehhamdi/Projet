let emploi ="https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true"
const reducerYourEmploit = (state = emploi, action) => {
    switch (action.type) { 
        case 'UPDATEYourEmploit':
            return (
                state = action.update
            )
        default:
            return state
    }
}
export default reducerYourEmploit