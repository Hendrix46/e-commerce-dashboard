import React, {useState} from 'react';
import {Container, Content, Footer, Header} from "rsuite";
import TopHeader from "../../components/Header/Header";
import LeftSideNavbar from "../../components/LeftSideNav/LeftSideNavbar";
import DataTable from "../../components/Table/DataTable";
import ExportTable from "../../components/Table/ExportTable";
import {useTranslation} from "react-i18next";

function TableStatistics(props) {
    const {t}=useTranslation();
    const columnsStatistic=[
        {
            title: t("TableColumns.id"),
            dataKey: 'id',
            width: 20
        },
        {
            title: t("TableColumns.firstName"),
            dataKey: 'firstName',
            width: 100
        },
        {
            title: t("TableColumns.lastName"),
            dataKey: 'lastName',
            width: 100
        },
        {
            title: t("TableColumns.city"),
            dataKey: 'city',
            width: 100
        },
        {
            title: t("TableColumns.companyName"),
            dataKey: 'companyName',
            width: 200
        },
        {
            title: t("TableColumns.email"),
            dataKey: 'email',
            width: 200
        },
        {
            title: t("TableColumns.zipCode"),
            dataKey: 'zipCode',
            width: 150
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

                            {/*<DataTable width={1100} height={800} columns={columnsStatistic} filterValue={20}/>*/}
                            <ExportTable filterValue={10} width={1100} height={800} columns={columnsStatistic}/>
                        </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Container>
            </Container>

        </div>
    );
}

export default TableStatistics;