import {GET_LINE_CHART_DATA, START_GETTING_LINE_CHART_DATA, STOP_GETTING_LINE_CHART_DATA} from "../actions/Types";

const initialState={
    lineChartData:[],
    isLoading: true
};


export const lineChartDataReducer=(state=initialState , action)=>{
    const {type, payload}= action;
    switch (type) {
        case START_GETTING_LINE_CHART_DATA:
            return{
                ...state,
                isLoading: payload
            };
        case STOP_GETTING_LINE_CHART_DATA:
            return {
                ...state,
                isLoading: payload
            };
        case GET_LINE_CHART_DATA:
            console.log(payload, 'PAYLOAD');
            return {
                ...state,
                lineChartData: payload,
                isLoading: false
            };
        default: return  state
    }
};