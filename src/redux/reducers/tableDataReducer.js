import {GET_TABLE_DATA, START_GETTING_TABLE_DATA, STOP_GETTING_TABLE_DATA} from "../actions/Types";

const initialState={
    tableData:[],
    isLoading: true
};


export const tableDataReducer=(state=initialState , action)=>{
    const {type, payload}= action;
    switch (type) {
        case START_GETTING_TABLE_DATA:
            return{
                ...state,
                isLoading: payload
            };
        case STOP_GETTING_TABLE_DATA:
            return {
                ...state,
                isLoading: payload
            };
        case GET_TABLE_DATA:
            // console.log(payload, 'PAYLOAD')
            return {
                ...state,
                tableData: payload,
                isLoading: false
            };
        default: return  state
    }
};