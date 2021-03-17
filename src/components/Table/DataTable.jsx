import React, {useState} from 'react';
import {Panel, Table} from "rsuite";
import  fakeData from '../../fakeData';
const {Column, HeaderCell, Cell, Pagination , ColumnGroup}=Table;
function DataTable({width, height}) {
    const dataSet = fakeData.filter((v, i) => i < 8);
    const [data, setData]=useState(dataSet);
    return (
        <div>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: width }}>
                <Table height={height} data={data}>
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