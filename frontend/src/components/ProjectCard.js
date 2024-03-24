import { Col } from "react-bootstrap";
import React, { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = githubUrl;
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <h4 className="project-title">{title}</h4>
        <div
          className="proj-txtx"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          <h4
            style={{ animation: isHovered ? "glow 3s infinite alternate" : "" }}
          >
            {title}
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
