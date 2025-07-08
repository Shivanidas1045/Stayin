import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Bootstrap modal

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // State for popup
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setShowModal(true); // Show popup after signup
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 mt-5">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%"}}>
        <h2 className="text-center mb-4">Welcome!</h2>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn text-dark w-100" style={{ backgroundColor: "#9FE2BF" }}>
            Register
          </button>
          <p className="text-center text-muted mt-3">If you have an account, log in using your email and password.</p>
          <button type="button" className="btn w-100" style={{ backgroundColor: "#9FE2BF" }} onClick={() => navigate("/login")}>
            Login
          </button>
        </form>
      </div>

      {/* Bootstrap Modal for Success Message */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body className="text-center">
          <h5>Registeration Complete🎉</h5>
          <p>You have succesfully Registered!.</p>
          <Button style={{color:'white',backgroundColor:'#9FE2BF'}} onClick={closeModal}>
            OK
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Register;
