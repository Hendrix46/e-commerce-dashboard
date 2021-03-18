import {combineReducers} from "redux";
import {tableDataReducer} from "./tableDataReducer";
import {lineChartDataReducer} from "./lineChartDataReducer";
import {languageReducer} from "./languageReducer";

const RootReducer= combineReducers({
    tableData: tableDataReducer,
    lineChartData: lineChartDataReducer,
    language: languageReducer
});

export default RootReducer;
