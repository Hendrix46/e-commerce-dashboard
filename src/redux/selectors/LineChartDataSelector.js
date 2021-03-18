import {createSelector} from "reselect";

const NewLineChartData=(state)=>state.lineChartData;

export const lineChartDataSelector=createSelector(
    NewLineChartData,
    (state)=>state.lineChartData
);