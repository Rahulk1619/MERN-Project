import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
export const Service = () => {
  const { services = [], user } = useAuth();
  console.log('Services:', services); // Log services

  if (!Array.isArray(services) || services.length === 0) {
    console.log('No services available');  // Debug log
    return <p>No services available</p>;
  }

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container1">
        {services.map((curElem, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={curElem.image} alt={`${curElem.service} image`} />
            </div>
            <div className="card-details">
              <div className="grid grid-two-cols-service">
                <p>{curElem.provider}</p>
                <p>{curElem.price}</p>
              </div>
              <h2>{curElem.service}</h2>
              <p>{curElem.description}</p>
              {user ? (
                <a className="action" href={curElem.link} target="_blank" rel="noopener noreferrer">
                  Find out more
                  <span aria-hidden="true">→</span>
                </a>
              ) : (
                <Link to="/login" className="login-prompt">
                  Please log in to access the course link
                </Link>              
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
