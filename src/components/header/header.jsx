import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import '../../css/Header.css'
import Mario from '../../images/mario.gif';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar className="nghead" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle className="menutitle" nav caret>Choisissez votre difficulté</DropdownToggle>
                            <DropdownMenu right className="textmenu">
                                <DropdownItem className="drophead"><NavLink className="News" href="/news">News</NavLink></DropdownItem>
                                <DropdownItem className="drophead">Tests</DropdownItem>
                                <DropdownItem className="drophead">Trucs et astuces</DropdownItem>
                                <DropdownItem className="drophead">Blog</DropdownItem>
                                <DropdownItem className="drophead">Forum?</DropdownItem>
                                <DropdownItem className="drophead">Liens</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <img className="mario" src={Mario} alt="" />
                    <NavbarBrand className="navtitle" href="/">New Game Plus</NavbarBrand>
                    <NavbarText>
                        <a className="nes-btn" href="/">
                            <i className="nes-icon nes-avatar is-small star" /><a className="titleyt" href="/">Mon compte</a>
                        </a>
                        <a className="nes-btn" href="https://www.twitch.com/">
                            <i className="nes-icon twitch is-small" /><a className="titleyt" href="/">Twitch</a>
                        </a>
                        <a className="nes-btn" href="https://www.youtube.com/user/MrOhzora">
                            <i className="nes-icon youtube is-small" /><a className="titleyt" href="/">Youtube</a>
                        </a>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;


