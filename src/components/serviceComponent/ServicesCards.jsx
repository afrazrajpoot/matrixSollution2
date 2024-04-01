import React from "react";
import { Link } from "react-router-dom";

const ServicesCards = ({ title, description, subservices, link, image }) => {
  return (
    <>
      <ul>
        <li data-aos="fade-up" data-aos-duration={500}>
          <div>
            <h5>{title}</h5>
            <p>{description}</p>
            <div className="list">
              {subservices?.map((elem, i) => {
                return <h4 key={i}>{elem}</h4>;
              })}
            </div>
            <Link className="btn" to={link}>
              Read More
            </Link>
          </div>
          <img src={image} />
        </li>
       
      </ul>
    </>
  );
};

export default ServicesCards;
