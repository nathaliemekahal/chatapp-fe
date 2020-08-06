import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export class HomePage extends Component {
  render() {
    return (
      <Container>
        <Row className="homePage-row">
          <Col md={5} className="homepage-class">
            <Row className="addUser-class">
              <div className="addUser-icon">
                {" "}
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-person-plus-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fontSize: "24rem",
                    opacity: "0.8",
                    color: "#DC653B ",
                    fontSize: "12rem ",
                  }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M13 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"
                  />
                </svg>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
