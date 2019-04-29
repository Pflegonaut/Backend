import React from 'react';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const navbar = () => {
  return (
    <div className="Navbar">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="Eingabe.php" >
    <img src="" alt="" width="30" height="40" className="d-inline-block align-top"></img>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="Pflegonaut-navbar" />

    <Navbar.Collapse id="Pflegonaut-navbar">
    <Nav className="mr-auto">


    <NavDropdown title="Eingabe" id="basic-nav-dropdown">
    <NavDropdown.Item href="/FrageEingabe">Frage</NavDropdown.Item>
    <NavDropdown.Item href="/ArtikelEingabe">Artikel</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Bearbeiten" id="basic-nav-dropdown">
    <NavDropdown.Item href="/BearbeitenFrage">Frage</NavDropdown.Item>
    <NavDropdown.Item href="/BearbeitenArtikel">Artikel</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Kontrollieren" id="basic-nav-dropdown">
    <NavDropdown.Item href="/KontrollierenFrage">Frage</NavDropdown.Item>
    <NavDropdown.Item href="/KontrollierenArtikel">Artikel</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Verlauf" id="basic-nav-dropdown">
    <NavDropdown.Item href="/FrageVerlauf">Frage</NavDropdown.Item>
    <NavDropdown.Item href="/VerlaufArtikel">Artikel</NavDropdown.Item>
    </NavDropdown>

    {/* Todo: use LinkContainer, rerender instead of reload */}

    <Form inline>
    <FormControl type="text" placeholder="Inhalt..." className=" mr-sm-2" />
    <Button type="submit" variant="outline-info">suchen</Button>
    </Form>
    </Nav>

    </Navbar.Collapse>

    <Navbar.Collapse className="justify-content-end">

    <Image src="https://picsum.photos/200/150/?random" roundedCircle fluid style={{ width: '40px', height: '40px' }}/>

    <Navbar.Text>
    <a href="#login">Mark Otto</a>
    </Navbar.Text>
    </Navbar.Collapse>

    </Navbar>

    <Navbar>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
    </Navbar.Collapse>
    </Navbar>
    </div>

  )
};

export default navbar;
