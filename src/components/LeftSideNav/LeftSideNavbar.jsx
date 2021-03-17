import React, {useState} from 'react';
import {Container, Dropdown, Icon, Nav, Sidebar, Sidenav} from "rsuite";

function LeftSideNavbar(props) {
    const [expand, setexpand] = useState(true);
    const handleToggle=()=> {
        setexpand(!expand)
    };
    return (
        <div className="show-fake-browser sidebar-page">
            <Container style={{height:'100vh', position:'fixed', marginTop:55}}>
                <Sidebar
                    style={{ display: 'flex', flexDirection: 'column', }}
                    width={expand ? 190 : 56}
                    collapsible
                >
                    <Sidenav expanded={expand} defaultOpenKeys={['4']} style={{backgroundColor: '#0E0C28'}}>
                        <Sidenav.Header>
                            <div onClick={handleToggle}>
                                <p>LOGO Header</p>
                            </div>
                        </Sidenav.Header>
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                    User Group
                                </Nav.Item>
                                <Nav.Item eventKey="3" icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Item eventKey="4" icon={<Icon icon="group" />}>
                                    User Group
                                </Nav.Item>
                                <Nav.Item eventKey="5" icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Item eventKey="6" icon={<Icon icon="group" />}>
                                    User Group
                                </Nav.Item>
                                <Nav.Item eventKey="7" icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Item eventKey="8" icon={<Icon icon="group" />}>
                                    User Group
                                </Nav.Item>
                                <Nav.Item eventKey="9" icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Item eventKey="10" icon={<Icon icon="group" />}>
                                    User Group
                                </Nav.Item>
                                <Nav.Item eventKey="11" icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>

                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </Sidebar>
            </Container>
        </div>
    );
}

export default LeftSideNavbar;