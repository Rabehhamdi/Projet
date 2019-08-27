let about ="xxxxxxxxxxxxxxxxxxx"
const reducerOboutMe = (state = about, action) => {
    switch (action.type) {
        case "EDIT_ABOUT":
            return (
                state = action.newAbout
            )  
        case 'UPDATEABOUT':
            return (
                state = action.update
            ) 
        default:
            return state
    }
}
export default reducerOboutMe