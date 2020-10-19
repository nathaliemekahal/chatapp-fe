import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import ChatPopBar from "../components/ChatPopBar";
import { animateScroll } from "react-scroll";

class ChatPop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: "",
    };
  }
  componentDidMount = () => {
    this.scrollToBottom();
    let filteredMessages = this.props.msgs.filter(
      (msg) =>
        (msg.from === this.props.username && msg.to === this.props.sender) ||
        (msg.from === this.props.sender && msg.to === this.props.username)
    );
    this.setState({ messages: filteredMessages });
  };

  componentDidUpdate = async (prevProps) => {
    this.scrollToBottom();
    if (
      prevProps.msgs.length !== this.props.msgs.length ||
      prevProps.sender !== this.props.sender
    ) {
      let filteredMessages = this.props.msgs.filter(
        (msg) =>
          (msg.from === this.props.username && msg.to === this.props.sender) ||
          (msg.from === this.props.sender && msg.to === this.props.username)
      );
      console.log(filteredMessages);
      this.setState({ messages: filteredMessages });
    }
  };

  scrollToBottom() {
    animateScroll.scrollToBottom({
      duration: 500,
      containerId: "ContainerElementID",
    });
  }
  render() {
    return (
      <Row className="ChatPop-Main">
        <div className="msgs-container" id="ContainerElementID">
          {this.state.messages &&
            this.state.messages.map((msg, index) => (
              <>
                {msg.from === this.props.username && (
                  <div key={index} className="msg-bubble-sender">
                    {msg.text}
                  </div>
                )}
                {msg.from !== this.props.username &&
                  msg.from === this.props.sender && (
                    <div key={index} className="msg-bubble">
                      {msg.text}
                    </div>
                  )}
              </>
            ))}
        </div>
        <ChatPopBar
          closeChat={this.props.closeChat}
          myFunc={this.props.myFunc}
          sendMessage={this.props.sendMessage}
        />
      </Row>
    );
  }
}

export default ChatPop;
