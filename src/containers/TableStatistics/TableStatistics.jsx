import React, {useState} from 'react';
import {Container, Content, Footer, Header} from "rsuite";
import TopHeader from "../../components/Header/Header";
import LeftSideNavbar from "../../components/LeftSideNav/LeftSideNavbar";
import DataTable from "../../components/Table/DataTable";
import ExportTable from "../../components/Table/ExportTable";

function TableStatistics(props) {
    const columnsStatistic=[
        {
            title: 'Id',
            dataKey: 'id',
            width: 50
        },
        {
            title: 'First Name',
            dataKey: 'firstName',
            width: 100
        },
        {
            title: 'Last Name',
            dataKey: 'lastName',
            width: 100
        },
        {
            title: 'City',
            dataKey: 'city',
            width: 100
        },
        {
            title: 'Company',
            dataKey: 'companyName',
            width: 200
        },
        {
            title: 'Email',
            dataKey: 'email',
            width: 200
        },
        {
            title: 'Zip Code',
            dataKey: 'zipCode',
            width: 200
        },

    ];
    const [activeKey, setActiveKey]=useState(null);
    const handleSelect=(eventKey)=> {
        setActiveKey(eventKey)
    };
    return (
        <div className="App">
            <Container>
                <Container>
                    <Header>
                        <TopHeader appearance="inverse" activeKey={activeKey} onSelect={handleSelect} />
                    </Header>
                    <LeftSideNavbar/>
                    <Content style={{marginLeft: 200, marginTop: 70}}>
                        <div >

                            <DataTable width={1100} height={800} columns={columnsStatistic} filterValue={20}/>
                            <ExportTable/>
                        </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Container>
            </Container>

        </div>
    );
}

export default TableStatistics;