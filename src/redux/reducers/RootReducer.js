import {combineReducers} from "redux";
import {tableDataReducer} from "./tableDataReducer";

const RootReducer= combineReducers({
    tableData: tableDataReducer
});

export default RootReducer;
