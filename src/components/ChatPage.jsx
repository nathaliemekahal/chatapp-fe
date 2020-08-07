import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FormControl } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

class ChatPage extends Component {
  render() {
    return (
      <Container>
        <Row md={3} className="justify-content-between mt-5">
          {" "}
          <Col md={4} style={{ width: "80px", padding: "0" }}>
            <div id="search">
              <FiSearch />
              <input
                placeholder="SEARCH"
                type="text"
                id="searchBar"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
          <div className="d-flex justify-content-end">
            <Col
              md={4}
              style={{ backgroundColor: "pink", width: "80px", height: "80px" }}
            ></Col>
            <Col
              md={4}
              className="ml-3"
              style={{
                backgroundColor: "white",
                width: "80px",
                height: "80px",
              }}
            ></Col>
          </div>
        </Row>
        <Row md={2} className="justify-content-between mt-4">
          <Col
            className="users"
            md={4}
            style={{ width: "80px", height: "80px" }}
          ></Col>
          <Col
            md={7}
            style={{ backgroundColor: "yellow", width: "80px", height: "80px" }}
          ></Col>
        </Row>
      </Container>
    );
  }
}

export default ChatPage;
