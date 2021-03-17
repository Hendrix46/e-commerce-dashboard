import {createSelector} from "reselect";

const NewDataTable=(state)=>state.tableData;

export const tableDataSelector=createSelector(
    NewDataTable,
    (state)=> state.tableData
);