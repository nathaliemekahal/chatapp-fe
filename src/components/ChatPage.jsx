import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FormControl } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import ChatPop from "../components/ChatPop";
import io from "socket.io-client";
import uniqid from "uniqid";

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      username: this.props.match.params.Username,
      msg: "",
      msgs: [],
    };
  }
  componentDidMount = async () => {
    let response = await fetch("http://localhost:3007/users");
    let users = await response.json();
    let filteredUsers = users.filter(
      (user) => user.username !== this.state.username
    );
    this.setState({ users: filteredUsers });
    const connOpt = {
      transports: ["websocket"],
    };
    this.socket = io("http://localhost:3007", connOpt);
    this.socket.on("message", (msg) => {
      this.setState({ msgs: this.state.msgs.concat(msg) });
    });
  };
  // Join room

  joinRoom = (opponent) => {
    let id = uniqid();
    this.socket.emit("joinRoom", {
      username: this.state.username,
      roomid: id,
      opponent,
    });
  };
  sendMessage = () => {
    this.socket.emit("chatmessage", {
      text: this.state.msg,
    });
    this.setState({ msg: "" });
  };
  receiveMsg = (msg) => {
    this.setState({ msg });
  };

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
          <div className="d-flex justify-content-end align-items-center">
            <Col md={6} className="clearchat-btn">
              CLEAR CHAT
            </Col>
            <Col md={5} className="ml-3 more-btn">
              {" "}
              MORE
            </Col>
          </div>
        </Row>
        <Row md={2} className="justify-content-between mt-4">
          <Col className="users" md={4}>
            <div className="userli-wrapper">
              {this.state.users &&
                this.state.users.map((user) => (
                  <div className="userli mb-3">
                    <img
                      className="userprofile"
                      src="/profile.svg"
                      width="50px"
                    />
                    <div
                      className="userInfo"
                      onClick={() => this.joinRoom(user.username)}
                    >
                      {user.name}
                    </div>
                  </div>
                ))}
            </div>
          </Col>
          <Col md={7} className="ChatPop-wrapper-col">
            <ChatPop
              myFunc={this.receiveMsg}
              sendMessage={this.sendMessage}
              msgs={this.state.msgs}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChatPage;
