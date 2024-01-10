import React from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Grid, List } from "react-bootstrap-icons";
import NetflixRows from "./NetflixRows";

const NetflixMain = () => {
  return (
    <Container fluid className="px-4">
      {/* Row che contiene i tool*/}
      <Row className="justify-content-between">
        <Col className="d-flex" md={11}>
          <h2 className="mb-4">Movies</h2>
          <div className="btn-group" role="group">
            <div className="ms-4 mt-1">
              <DropdownButton
                title="Genres"
                variant="dark"
                size="sm"
                className="ms-4 mt-1 rounded-0"
                style={{ background: "#221f1f", border: "solid 1px" }}
              >
                <Dropdown.Item href="#harry-potter">Harry Potter</Dropdown.Item>
                <Dropdown.Item href="#lotr">Lord of the Rings</Dropdown.Item>
                <Dropdown.Item href="#avengers">Avengers</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </Col>
        {/* Col delle icone */}
        <Col md={1}>
          <Grid size="1rem" style={{ marginLeft: "6vmin", marginRight: "2vmin" }} />
          <List size="1rem" />
        </Col>
      </Row>
      <div className="mt-3">
        <h4 className="text-start" id="harry-potter">
          Harry Potter
        </h4>
        <NetflixRows searchQuery="harry potter" />
      </div>

      <div className="mt-3">
        <h4 className="text-start" id="lotr">
          Lord Of The Rings
        </h4>
        <NetflixRows searchQuery="lord of the rings" />
      </div>

      <div className="mt-3">
        <h4 className="text-start" id="avengers">
          Avengers
        </h4>
        <NetflixRows searchQuery="avengers" />
      </div>
    </Container>
  );
};

export default NetflixMain;
