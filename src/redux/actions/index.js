import {START_GETTING_TABLE_DATA, STOP_GETTING_TABLE_DATA, GET_TABLE_DATA} from "./Types";
import axios from "axios";

export const getTableData=async (dispatch)=>{
  dispatch({
      type: START_GETTING_TABLE_DATA,
      payload: true
  });
    try{
    const request= await axios.get('https://github.com/rsuite/rsuite/blob/master/docs/public/data/users.json');
    const data=request.data;

    if(request.status == 'ok'){
        dispatch({
            type: GET_TABLE_DATA,
            payload: data
        })
     }
    }
    catch (e) {
        dispatch({
            type: STOP_GETTING_TABLE_DATA,
            payload: true
        })
    }
};