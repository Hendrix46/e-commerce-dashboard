import {GET_TABLE_DATA, START_GETTING_TABLE_DATA, STOP_GETTING_TABLE_DATA} from "./Types";
import firebase from "../../firebaseConfig";

export const getTableData=()=>async (dispatch)=>{
  dispatch({
      type: START_GETTING_TABLE_DATA,
      payload: true
  });
    try {
        await firebase
            .database()
            .ref()
            .on('value', (snapshot)=>{
                let dataSet=[];
                snapshot.forEach(data=>{
                    const dataVal=data.val();
                    dataSet.push({
                        ...dataVal
                    });

                });
                if (dataSet){
                    dispatch({
                        type: GET_TABLE_DATA,
                        payload: dataSet
                    })
                }
            })

    }
    catch (e) {
        dispatch({
            type: STOP_GETTING_TABLE_DATA,
            payload: true
        })
    }
};