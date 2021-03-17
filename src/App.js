import React, {useState} from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import LeftSideNavbar from "./components/LeftSideNav/LeftSideNavbar";
import {Container, Content, Divider, Footer, Header} from "rsuite";
import TopHeader from "./components/Header/Header";
import LineChartCard from "./components/ChartCards/LineChartCard";
import DataTable from "./components/Table/DataTable";
import AreaChartCard from "./components/ChartCards/AreaChartCard";
import PieChartCard from "./components/ChartCards/PieChartCard";
import BarChartCard from "./components/ChartCards/BarChartCard";


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    }
];


function App() {
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
                       <div style={{display:'flex', justifyContent:'space-between'}}>
                           <LineChartCard width={280} height={180} data={data} title={'Total Revenue'} summary={'12994$'}/>
                           <LineChartCard width={280} height={180} data={data}/>
                           <LineChartCard width={280} height={180} data={data}/>
                           <LineChartCard width={280} height={180} data={data}/>

                       </div>
                    <Divider/>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <DataTable width={855} height={360}/>
                            <AreaChartCard height={360} width={280} data={data}/>
                        </div>
                    <Divider/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <PieChartCard height={300} width={300} />
                        <BarChartCard width={500} height={300} data={data}/>
                        <DataTable width={300} height={300} />
                    </div>
                </Content>
                <Footer>Footer</Footer>
            </Container>
        </Container>

    </div>
  );
}

export default App;
