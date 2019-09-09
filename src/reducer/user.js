let tabUser = 
        {
            _id: "1",
            name: "User 1",
            email: "email 1",
            role: "1",
            password: "123456"

        } 
const reducerUser = (state = tabUser, action) => {
    switch (action.type) {
        case 'UPDATEUser':
            return (
                state = action.update
            )
        case "ADD_User":
            return (
                state.concat(action.User)
            )
        case "REMOVE_User":
            return (
                state.filter((el, index) => el._id !== action._id)
            )

        default:
            return state
    }
}
export default reducerUser