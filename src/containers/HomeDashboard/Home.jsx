import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getLineChartData} from "../../redux/actions";
import {lineChartDataSelector} from "../../redux/selectors/LineChartDataSelector";
import {Container, Content, Divider, Footer, Header} from "rsuite";
import TopHeader from "../../components/Header/Header";
import LeftSideNavbar from "../../components/LeftSideNav/LeftSideNavbar";
import LineChartCard from "../../components/ChartCards/LineChartCard";
import DataTable from "../../components/Table/DataTable";
import AreaChartCard from "../../components/ChartCards/AreaChartCard";
import PieChartCard from "../../components/ChartCards/PieChartCard";
import BarChartCard from "../../components/ChartCards/BarChartCard";
import {useTranslation} from "react-i18next";

function Home(props) {
    const dispatch =useDispatch();
    const {t}=useTranslation();
    const [activeKey, setActiveKey]=useState(null);
    const handleSelect=(eventKey)=> {
        setActiveKey(eventKey)
    };

    useEffect(()=>{
        dispatch(getLineChartData())
    },[]);
    const columsFirst=[
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

    ];
    const columsSecond=[
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
        }
    ];
    const lineChartData=useSelector(lineChartDataSelector);
    return (
        <div className="App">
            <Container>

                <Container>
                    <Header>
                        <TopHeader appearance="inverse" activeKey={activeKey} onSelect={handleSelect} />
                    </Header>
                    <LeftSideNavbar/>
                    <Content style={{marginLeft: 200, marginTop: 70}}>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <LineChartCard width={280} height={180} data={lineChartData} title={'Total Revenue'} summary={'12994$'} percentage={5.84} />
                            <LineChartCard width={280} height={180} data={lineChartData} title={'Affiliate Revenue'} summary={'12994$'} percentage={5.84}/>
                            <LineChartCard width={280} height={180} data={lineChartData} title={'Refunds'} summary={'0.00'} />
                            <LineChartCard width={280} height={180} data={lineChartData} title={'Avg. Revenue Per User'} summary={'12994$'} percentage={-2.03}/>
                        </div>
                        <Divider/>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <DataTable width={855} height={360} columns={columsFirst} filterValue={7}
                                       />
                            <AreaChartCard height={360} width={280} data={lineChartData}/>
                        </div>
                        <Divider/>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <PieChartCard height={300} width={300} />
                            <BarChartCard width={500} height={300} data={lineChartData}/>
                            <DataTable width={300} height={300} columns={columsSecond} filterValue={6}/>
                        </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Container>
            </Container>

        </div>
    );
}

export default Home;