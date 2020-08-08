import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import ChatPopBar from "../components/ChatPopBar";

class ChatPop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Row className="ChatPop-Main">
        <div className="msgs-container">
          {this.props.msgs &&
            this.props.msgs.map((msg, index) => (
              <div key={index} className="msg-bubble">
                {msg.text}
              </div>
            ))}
        </div>
        <ChatPopBar
          myFunc={this.props.myFunc}
          sendMessage={this.props.sendMessage}
        />
      </Row>
    );
  }
}

export default ChatPop;
