import React, { Component } from "react";
import { Row } from "react-bootstrap";
import ChatPopBar from "../components/ChatPopBar";

class ChatPop extends Component {
  render() {
    return (
      <Row className="ChatPop-Main">
        <ChatPopBar />
      </Row>
    );
  }
}

export default ChatPop;
