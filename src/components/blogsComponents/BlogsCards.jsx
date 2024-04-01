import React from "react";
import { Link } from "react-router-dom";

const BlogsCards = ({
  heading,
  description,
  listItems,
  readMoreLink,
  imageUrl,
}) => {
  return (
    <>
      <li data-aos="fade-up" data-aos-duration={500}>
        <div>
          <h5>{heading}</h5>
          <p>{description}</p>
          <div className="list">
            {listItems?.map((elem, i) => {
              return <h4 key={i}>{elem}</h4>;
            })}
          </div>
          <Link className="btn" to={readMoreLink}>
            Read More
          </Link>
        </div>
        <img src={imageUrl} />
      </li>
    </>
  );
};

export default BlogsCards;
