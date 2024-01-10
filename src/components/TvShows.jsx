import React from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Grid, List } from "react-bootstrap-icons";
import NetflixRows from "./NetflixRows";

const TvShows = () => {
  return (
    <Container fluid className="px-4">
      {/* Row che contiene i tool*/}
      <Row className="justify-content-between">
        <Col className="d-flex mt-3" md={11}>
          <h2 className="mb-4">More Tv shows are coming...</h2>
        </Col>
        {/* Col delle icone */}
        <Col md={1}>
          <Grid size="1rem" style={{ marginLeft: "6vmin", marginRight: "2vmin" }} />
          <List size="1rem" />
        </Col>
      </Row>
      <div className="mt-3">
        <h4 className="text-start" id="tba">
          tba
        </h4>
      </div>
    </Container>
  );
};

export default TvShows;
