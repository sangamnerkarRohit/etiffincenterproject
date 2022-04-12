import React from "react";
import { Card } from "react-bootstrap";


const CustomerCare = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Customer Care</Card.Header>
        <Card.Body>
          <Card.Title>Contact Number</Card.Title>
          <Card.Text>
            mob-No : 9995566556/5564887844<br></br>
            email Id : xyz@gmail.com
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Have a good day</Card.Footer>
      </Card>
    </div>
  );
};

export default CustomerCare;
