import { Bell, PersonCircle, Search } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function NavActions() {
  return (
    <Nav>
      <Nav.Item>
        <Search color="white" size="1rem" style={{ marginRight: "3vmin" }} />
      </Nav.Item>
      <Nav.Item>
        <span style={{ textTransform: "uppercase", marginRight: "3vmin" }}>kids</span>
      </Nav.Item>
      <Nav.Item>
        <Bell color="white" size="1rem" style={{ marginRight: "3vmin" }} />
      </Nav.Item>
      <Nav.Item>
        <PersonCircle color="white" size="1rem" style={{ marginRight: "3vmin" }} />
      </Nav.Item>
    </Nav>
  );
}

export default NavActions;
