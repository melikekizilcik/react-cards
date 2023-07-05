import React from "react";

const Course = ({ image, title, description }) => {
  //console.log(props);
  /*const title = props.title;
  const description = props.description;
  console.log(title);
  console.log(description); */

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="kurslarım" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <p className="title is-4">{title}</p>
          </div>

          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Course;
