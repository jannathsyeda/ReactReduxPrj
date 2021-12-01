import {createStore,combineReducers} from 'redux'
import userReducer from './Reducer/UserReducer'
import studentReducer from './Reducer/StudentReducer'
import {composerWithDevTools} from 'redux-devtools-extension'
const mainReducer= combineReducers({
    user:userReducer,
    student:studentReducer
})

const commonData={
    user:{
        items:[
            {
                id:1,
                name:'demo',
                email:'demo@gmail.com',
                phone:'01928276'

            },
            {
                id:2,name:'test',
                email:'test@gmail.com',
                phone:'011928276'
            },
            {
                id:3,name:'tdemo',
                email:'tdemo@gmail.com',
                phone:'11928276'
            },
            {
                id:4,name:'dtdemo',
                email:'ddemo@gmail.com',
                phone:'0011928276'
            }
        ]
    },
    student:{
        studentId:123,
        marks:90
    }
}

const store = createStore(mainReducer,commonData,composerWithDevTools)
export default store