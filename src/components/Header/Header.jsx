import React from 'react';
import {Dropdown, Icon, Nav, Navbar} from "rsuite";
import {useDispatch} from "react-redux";
import {setLanguage} from "../../redux/actions";
import i18n from '../../i18n/i18n';

function TopHeader({ onSelect, activeKey, ...props }) {
    const dispatch=useDispatch();
    const onSelectLang = (eventKey, event) => {
        dispatch(setLanguage(eventKey));
        i18n.changeLanguage(eventKey);
    };
    return (
        <Navbar {...props}
                style={{width: '100%',position:'fixed', zIndex: 999, backgroundColor: '#0E0C28'}}
        >
            <Navbar.Body>
                <Nav onSelect={onSelect} activeKey={activeKey} pullRight>

                    <Nav.Item eventKey="2">News</Nav.Item>
                    <Nav.Item eventKey="3">Products</Nav.Item>
                    <Dropdown title="Language" onSelect={onSelectLang}>
                        <Dropdown.Item eventKey="uz">Uzbek</Dropdown.Item>
                        <Dropdown.Item eventKey="ru">Russian</Dropdown.Item>
                        <Dropdown.Item eventKey="en">English</Dropdown.Item>
                    </Dropdown>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
}

export default TopHeader;