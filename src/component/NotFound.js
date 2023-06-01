import React, { useEffect } from "react";
import "../style/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = ({ hideHeaderAndFooter, showHeaderAndFooter }) => {
  useEffect(() => {
    hideHeaderAndFooter();
    return () => {
      showHeaderAndFooter();
    };
  }, [hideHeaderAndFooter, showHeaderAndFooter]);

  const handleBack = () => {
    showHeaderAndFooter();
  };

  return (
    <div className="notFound">
      <p className="error">Page not found 404!</p>
      <Link to="/" onClick={handleBack}><button className="buttonBack">Back</button></Link>
    </div>
  );
};

export default NotFound;
