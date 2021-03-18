import React, {useState} from 'react';
import {Container, Dropdown, Icon, Nav, Sidebar, Sidenav} from "rsuite";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";



const MyLink = React.forwardRef((props, ref) => {
    const { href, as, ...rest } = props;
    return (
        <Link href={href} as={as} to={href}>
            <Icon name='table'/>
            <p ref={ref} {...rest} />
        </Link>
    );
});

const NavLink = props => <Nav.Item componentClass={MyLink} {...props} />;
function LeftSideNavbar(props) {

    const {t}=useTranslation();
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
                    <Sidenav expanded={expand} defaultOpenKeys={['4']} style={{backgroundColor: '#0E0C28', height: '100vh'}}>
                        <Sidenav.Header>
                            <div onClick={handleToggle}>
                                <p>LOGO Header</p>
                            </div>
                        </Sidenav.Header>
                        <Sidenav.Body>

                            <Nav>
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/statistics">Guide</NavLink>
                                <NavLink href="/components/overview">Components</NavLink>
                                <NavLink href="/tools/palette">Tools</NavLink>
                            </Nav>
                            {/*<Nav>*/}
                            {/*    <Nav.Item componentClass={NavLink} href="/">{t('SideBar.home')}</Nav.Item>*/}
                            {/*   /!*<Link to='/'>*!/*/}
                            {/*   /!*    <Nav.Item  eventKey="1" icon={<Icon icon="dashboard" />}>*!/*/}
                            {/*   /!*        *!/*/}
                            {/*   /!*        *!/*/}
                            {/*   /!*    </Nav.Item>*!/*/}
                            {/*   /!*</Link>*!/*/}
                            {/*    <Link to='/statistics'>*/}
                            {/*        <Nav.Item eventKey="2" icon={<Icon icon="table" />}>*/}
                            {/*            {t('SideBar.statistics')}*/}
                            {/*        </Nav.Item>*/}
                            {/*    </Link>*/}


                            {/*</Nav>*/}
                        </Sidenav.Body>
                    </Sidenav>
                </Sidebar>
            </Container>
        </div>
    );
}

export default LeftSideNavbar;