const userReducer=(state='',action)=>{
    // console.log("ff")
    switch(action.type){
        case "ADD_USER":
            // console.log('========',state,'=====',action)
            return {
                ...state,
                items:[...state.items,action.payload]
            }
            default:
                return state
    }
   
}

export default userReducer