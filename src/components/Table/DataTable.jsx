import React, {useEffect} from 'react';
import {Panel, Table} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {getTableData} from "../../redux/actions";
import {tableDataSelector} from "../../redux/selectors/TableDataSelector";

const {Column, HeaderCell, Cell}=Table;
function DataTable({width, height, columns, filterValue}) {

    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getTableData())
    },[]);
    const tableData= useSelector(tableDataSelector);

    const dataSet = tableData.filter((v, i) => i < (filterValue ? filterValue : 8));

    return (
        <div>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: width }}>
                <Table height={height} data={dataSet}>
                    {(columns != undefined)?
                        (columns.map((column)=>(
                            <Column key={column.dataKey} width={column.width} align="center" resizable>
                                <HeaderCell>{column.title}</HeaderCell>
                                <Cell dataKey={column.dataKey} />
                            </Column>
                        ))):
                        null
                    }
                </Table>
            </Panel>
        </div>
    );
}

export default DataTable;