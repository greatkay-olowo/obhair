import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import Alert from "../components/alert";

const AdminProductView = (props) => {
  const { id } = props.match.params;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [color, setColor] = useState();
  const [length, setLength] = useState();
  const [price, setPrice] = useState();
  const [frontPage, setFrontPage] = useState();
  const [img, setImg] = useState();
  const [imgID, setImgID] = useState();
  const [alert, setAlert] = useState(false);

  let alertMessage = "";
  useEffect(() => {
    axios.get(`/product/${id}`).then((product) => {
      const data = product.data.Message;
      setName(data.name);
      setCategory(data.category);
      setColor(data.color);
      setLength(data.length);
      setPrice(data.price);
      setFrontPage(data.frontPage);
      setImg(data.image);
      setImgID(data.imageID);
    });
  }, [id]);
  function closeModal() {
    setIsOpen(false);
    window.location = "/admin/products";
  }
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const saveProduct = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      category: category,
      color: color,
      length: length,
      price: price,
      frontPage: frontPage,
      img: img,
      imgID: imgID,
    };

    axios.put(`/product/${id}`, data).then((res) => {
      if (res.data.Status === "success") {
        window.location = "/admin/products";
      } else {
        setAlert(true);
        alertMessage = res.data.Message;
      }
    });
  };

  const customStyles = {
    content: {
      position: "absolute",
      top: "50px",
      left: "50px",
      right: "50px",
      bottom: "50px",
      // marginRight: "-50%",
      height: "650px",
      weight: "400px",
      margin: "0 auto",
      // transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("body");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login"
    >
      <div className=" col-lg-4 col-md-6 col-sm-12 mt-5 m-auto">
        <div className="text-center">
          <button onClick={closeModal} className="btn btn-danger btn-sm">
            close
          </button>
        </div>

        {alert && <Alert>{alertMessage}</Alert>}
        <form className="m-3">
          <label>
            <strong>Name</strong>
          </label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Category</strong>
            </label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Straight Hair">Straight Hair</option>
              <option value="Curly Hair">Curly Hair</option>
              <option value="Eye Lash">Eye Lash</option>
              <option value="Glue">Glue</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <strong>Price</strong>
            </label>
            <input
              type="text"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Colour</strong>
            </label>
            <input
              type="text"
              className="form-control"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Length</strong>
            </label>
            <input
              type="text"
              className="form-control"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              <strong>Show on the front page?</strong>
            </label>
            <select
              className="form-control"
              value={frontPage}
              onChange={(e) => setFrontPage(e.target.value)}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>Add product image</label>
            <input
              type="text"
              className="form-control"
              value={imgID}
              onChange={(e) => {
                setImg(
                  "https://drive.google.com/uc?export=view&id=" + e.target.value
                );
                setImgID(e.target.value);
              }}
            />
          </div>
          <div>
            <img src={img} alt={name} className="mb-1" />
          </div>

          <button
            className="btn btn-primary btn-sm col-12"
            onClick={saveProduct}
          >
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AdminProductView;
