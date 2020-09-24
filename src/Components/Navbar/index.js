import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSection, Logo , LogoText ,UlList , ListItem
,Anchor , NavbarInput , NavbarLabel} from './style.js';



const Navbar = () => {
  return (
    <NavbarSection>
    <div className="container">
            <Logo>
                    <LogoText>Lorem Ip.</LogoText>
            </Logo>

            <NavbarInput type="checkbox" name="" id="nav"/>
            <NavbarLabel htmlFor="nav"></NavbarLabel>

            <UlList>
            
                <ListItem><Anchor herf="#">Home</Anchor></ListItem>
                <ListItem><Anchor href="#service">Services</Anchor></ListItem>
                <ListItem><Anchor href="#portfolio">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#about">About Us</Anchor></ListItem>
                <ListItem><Anchor href="#team">Team</Anchor></ListItem>
                <ListItem><Anchor herf="#contact">Conatct</Anchor></ListItem>
            </UlList>
    </div>
    </NavbarSection>

  );
}

export default Navbar;
