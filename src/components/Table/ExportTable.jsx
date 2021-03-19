import React, {useEffect} from 'react';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import {useDispatch, useSelector} from "react-redux";
import {tableDataSelector} from "../../redux/selectors/TableDataSelector";
import {getTableData} from "../../redux/actions";
import {useTranslation} from "react-i18next";

function ExportTable({width, height, columns, filterValue}) {
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getTableData())
    },[]);
    const tableData= useSelector(tableDataSelector);
    const {t}=useTranslation();
    const dataSet = tableData.filter((v, i) => i < (filterValue ? filterValue : 8));
    return (

        <div className='table-responsive'>
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText={t("Exportable.exportButton")}/>
            <table id="table-to-xls" className='table table-hover'>
               <thead>
               <tr>
                   {(columns != undefined)?
                       (columns.map((column)=>(
                           <th  style={{width: column.width}} key={column.dataKey}>{column.title}</th>
                       ))):
                       null
                   }
               </tr>
               </thead>
                <tbody>
                {dataSet.map((data)=>(
                    <tr  key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.city}</td>
                        <td>{data.companyName}</td>
                        <td>{data.email}</td>
                        <td>{data.zipCode}</td>
                    </tr>
                ))}
                </tbody>


            </table>

        </div>
    );
}

export default ExportTable;