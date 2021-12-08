const userReducer=(state='',action)=>{
    // console.log("ff")
    switch(action.type){
        case "ADD_USER":
            // console.log('========',state,'=====',action)
            return {
                ...state,
                items:[...state.items,action.payload]
            }
            case 'DELETE_USER':
                console.log(state,'=====',action)
                return{
                    ...state,
                    items:state.items.filter((user)=>user.id != action.payload)
                }
            default:
                return state
    }
   
}

export default userReducer