import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-5">
      <div className="container text-center">
        <h2 className="text-uppercase fw-bold" style={{ color: "#9FE2BF" }}>
          Stay With Us
        </h2>
        <p className="text-secondary">Experience luxury and comfort at our hotel.</p>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="#" className="text-decoration-none" style={{ color: "#9FE2BF" }}>
            About Us
          </a>
          <a href="#" className="text-decoration-none" style={{ color: "#9FE2BF" }}>
            Rooms
          </a>
          <a href="#" className="text-decoration-none" style={{ color: "#9FE2BF" }}>
            Contact
          </a>
        </div>

        <hr className="border-secondary my-3" />

        <p className="text-muted small">&copy; 2025 Hotel Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
