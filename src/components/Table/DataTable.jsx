import React, {useEffect} from 'react';
import {Panel, Table} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {getTableData} from "../../redux/actions";
import {tableDataSelector} from "../../redux/selectors/TableDataSelector";

const {Column, HeaderCell, Cell}=Table;
function DataTable({width, height}) {

    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getTableData())
    },[]);
    const tableData= useSelector(tableDataSelector);
    console.log(tableData, 'TABLEDATA');
    const dataSet = tableData.filter((v, i) => i < 7);
    return (
        <div>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: width }}>
                <Table height={height} data={dataSet}>
                    <Column width={50} align="center" resizable>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>

                    <Column width={100} resizable>
                        <HeaderCell>First Name</HeaderCell>
                        <Cell dataKey="firstName" />
                    </Column>

                    <Column width={100} resizable>
                        <HeaderCell>Last Name</HeaderCell>
                        <Cell dataKey="lastName" />
                    </Column>

                    <Column width={200} resizable>
                        <HeaderCell>City</HeaderCell>
                        <Cell dataKey="city" />
                    </Column>

                    <Column width={200} resizable>
                        <HeaderCell>Company Name</HeaderCell>
                        <Cell dataKey="companyName" />
                    </Column>
                </Table>
            </Panel>
        </div>
    );
}

export default DataTable;