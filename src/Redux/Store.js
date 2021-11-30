import {createStore,combineReducers} from 'redux'
import userReducer from './Reducer/UserReducer'
import studentReducer from './Reducer/StudentReducer'

const mainReducer= combineReducers({
    user:userReducer,
    student:studentReducer
})

const commonData={
    user:{
        items:[
            {
                id:1,name:'demo'
            },
            {
                id:2,name:'test'
            }
        ]
    }
}