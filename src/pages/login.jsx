import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const Login = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const customStyles = {
    content: {
      position: "absolute",
      top: "50px",
      left: "50px",
      right: "50px",
      bottom: "50px",
      // marginRight: "-50%",
      height: "400px",
      weight: "100px",
      margin: "0 auto",
      // transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("body");

  // var subtitle;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login"
    >
      <div className="text-center col-lg-4 col-md-6 col-sm-12 mt-5 m-auto">
        <button onClick={closeModal} className="btn btn-danger btn-sm">
          close
        </button>
        <form
          className="form-signin"
          style={{ height: "50vh", marginTop: "2rem" }}
        >
          <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <br />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Ok
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
