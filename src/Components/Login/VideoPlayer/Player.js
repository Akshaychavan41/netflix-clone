import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
class Player extends Component {
  render() {
    const { open, toggleModal, url } = this.props;
    return (
      <Modal
        open={open}
        onClose={toggleModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "60%",
            padding: "unset",
            margin: "auto",
          },
          closeButton: {
            background: "grey",
            color: "white",
          },
        }}
        center
      >
        <ReactPlayer url={url} width="100%" height="calc(100vh - 100px)" />
      </Modal>
    );
  }
}

export default Player;
