import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { dataReducer } from "./reducer/dataReducer"

const rootreducer = combineReducers({
    allData: dataReducer
})

const userlocalStorageData = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : null

const intialValue = {
    auth: {
        login: userlocalStorageData
    }
}

const store = createStore(
    rootreducer,
    intialValue,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store