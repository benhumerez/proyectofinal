import React, { useState } from 'react';
import icono from '../build/img/logo1.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" {...args}>
      <NavbarBrand href="/App">
          <img src={icono} alt="Logo" style={{ height: '85px', width: '100px'}} />
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/noticias">NOTICIAS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tienda">TIENDA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/temporada">TEMPORADA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/historia">HISTORIA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/fans">FANS</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;