import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const navigateToCluster = () => {
    navigate({
      pathname: "/cluster",
    });
  };

  const navigateToLicensing = () => {
    navigate({
      pathname: "/Licensing",
    });
  };

  const navigateToInterfaces = () => {
    navigate({
      pathname: "/interfaces",
    });
  };

  const navigateToService = () => {
    navigate({
      pathname: "/services",
    });
  };

  const navigateToBackup = () => {
    navigate({
      pathname: "/backup",
    });
  };

  const navigateToHome = () => {
    navigate({
      pathname: "/",
    });
  };



  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="navbar navbar-dark bg-dark fixed-top"
          id="myDiv"
        >
          <Container fluid>
            <Navbar.Brand href="#">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="offcanvas offcanvas-end text-bg-dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dashboard
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={navigateToHome}>Back To Home </Nav.Link>
                  <Nav.Link onClick={navigateToLicensing}>Licensing</Nav.Link>
                  <NavDropdown
                    title="Vulnerability Assessment"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {/* <NavDropdown.Item href="#Properties">
                      Properties
                    </NavDropdown.Item> */}
                    <NavDropdown.Item onClick={navigateToCluster}>
                      Vulnerability Report
                    </NavDropdown.Item>

                    <NavDropdown.Item onClick={navigateToInterfaces}>
                      Data Visualizer
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="#HSMs">HSMs</NavDropdown.Item>
                    <NavDropdown.Item href="#NTPs">NTPs</NavDropdown.Item> */}
                    <NavDropdown.Item onClick={navigateToService}>
                      Services
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Alerts"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#SNMP">SNMP</NavDropdown.Item>
                    <NavDropdown.Item href="#SMPT">SMPT</NavDropdown.Item>

                    <NavDropdown.Item href="#Syslog">Syslog</NavDropdown.Item>
                  </NavDropdown>

                  {/* <NavDropdown
                    title="Policies"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}

                  <NavDropdown
                    title="Identity Providers"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* <NavDropdown
                    title="Backups"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link onClick={navigateToBackup}>Backups</Nav.Link>

                  {/* <Nav.Link href="#action1">Domains</Nav.Link> */}
                  <Nav.Link href="#action1">Logs</Nav.Link>
                  {/* <Nav.Link href="#action1">Schedules</Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Sidebar;
