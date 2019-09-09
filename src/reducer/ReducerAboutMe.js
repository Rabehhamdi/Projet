let aboutMe ="xxxxxxxxxxxxxxxxxxx"
const reducerOboutMe = (state = aboutMe, action) => {
    switch (action.type) {
        case "AJOUTE_ABOUT":
            return (
                state.concat(action.ABOUT)
            )
        case "EDIT_ABOUT":
            return (
                state = action.aboutMe
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