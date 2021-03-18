import {SET_LANGUAGE} from "../actions/Types";

const initialLanguageState={
    language: 'ru'
};


export const languageReducer=(state=initialLanguageState, action)=>{
    const {type, payload}=action;
    if (type === SET_LANGUAGE){
        return{
            ...state,
            language: payload
        }
    }
    else return state
};