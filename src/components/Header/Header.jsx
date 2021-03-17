import React from 'react';
import {Dropdown, Icon, Nav, Navbar} from "rsuite";


function TopHeader({ onSelect, activeKey, ...props }) {
    return (
        <Navbar {...props}
                style={{width: '100%',position:'fixed', zIndex: 999, backgroundColor: '#0E0C28'}}
        >
            <Navbar.Body>
                <Nav onSelect={onSelect} activeKey={activeKey} pullRight>
                    <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                        Home
                    </Nav.Item>
                    <Nav.Item eventKey="2">News</Nav.Item>
                    <Nav.Item eventKey="3">Products</Nav.Item>
                    <Dropdown title="About">
                        <Dropdown.Item eventKey="4">Company</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Team</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
                    </Dropdown>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
}

export default TopHeader;