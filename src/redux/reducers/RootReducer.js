import {combineReducers} from "redux";
import {tableDataReducer} from "./tableDataReducer";
import {lineChartDataReducer} from "./lineChartDataReducer";

const RootReducer= combineReducers({
    tableData: tableDataReducer,
    lineChartData: lineChartDataReducer
});

export default RootReducer;
