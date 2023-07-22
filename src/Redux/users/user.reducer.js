import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGOUT } from "./user.type"

const intialState = {
    token: null,
    auth: false,
    loading: false,
    error: false
}

export default function userReducer(state=intialState, action){
 
    const {type, payload} = action
    
    switch(type){
 
        case LOGIN_USER_LOADING:{

            return {
                ...state , loading:true
            }
        }

        case LOGIN_USER_SUCCESS:{
            
            return {
                ...state , loading:false, token:payload, auth: true
            }
        }

        case LOGIN_USER_ERROR:{
            return {
                ...state , loading:false, error:true
            }
        }

        case LOGOUT:{
            return intialState
        }

        default:{
            return state
        }

    }

}