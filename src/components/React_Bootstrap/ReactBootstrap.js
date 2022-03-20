import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ReactBootstrap = () => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          quibusdam non iure accusantium nemo! Aliquam.
        </Card.Text>
        <Button>Learn more</Button>
      </Card.Body>
    </Card>
  );
};

export default ReactBootstrap;
