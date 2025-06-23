import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <small>All rights reserved &copy; WalletWizard</small>
      </footer>

      <style>{`
        .footer {
          width: 100%;
          background-color: #1f1f1f;
          color: white;
          text-align: center;
          padding: 1rem 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
