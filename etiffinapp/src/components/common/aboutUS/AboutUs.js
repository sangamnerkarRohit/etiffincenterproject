import React from "react";
import { Card } from "react-bootstrap";


const AboutUS = () => {
  return (
    <div>
      <Card>
        <Card.Header>About Us</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              We exist to connect local tiffin Centers to their customer through great online portal.
              find the best tiffin center in the area”
              .{" "}
            </p>
            <footer className="blockquote-footer">
              Created By :  <cite title="Source Title">Rohit and Rushabh</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutUS;