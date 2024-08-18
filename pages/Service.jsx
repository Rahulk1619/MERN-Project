import React from "react";
import { useAuth } from "../store/auth";

export const Service = () => {
  const { services = [] } = useAuth();
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
              <img src="/image/About.webp" alt="" width="250" height="150" />
            </div>
            <div className="card-details">
              <div className="grid grid-two-cols-service">
                <p>{curElem.provider}</p>
                <p>{curElem.price}</p>
              </div>
              <h2>{curElem.service}</h2> {/* Ensure this key matches API data */}
              <p>{curElem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
