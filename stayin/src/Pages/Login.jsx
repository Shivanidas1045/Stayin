import React,{useState} from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    // Simulating successful login
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/"); // Redirect to homepage after closing modal
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
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
          <button type="submit" className="btn w-100 mb-2" style={{ backgroundColor: "#9FE2BF", color: "black" }}>
  Login
</button>

            
          <p className="text-center text-muted">If you have an account, log in using your email and password.</p>
          <button type="button" className="btn w-100" style={{ backgroundColor: "#9FE2BF" }} onClick={() => navigate("/register")}>
            Register
          </button>
        </form>
      </div>

      {/* Bootstrap Modal for Success Message */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login Successful</h5>
              </div>
              <div className="modal-body">
                <p>Welcome back! You have successfully logged in.</p>
              </div>
              <div className="modal-footer">
                <button className="btn" style={{backgroundColor:'#9FE2BF',color:'white'}} onClick={closeModal}>OK</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bootstrap backdrop effect */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Login;
