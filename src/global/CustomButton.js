import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = (props) => {
  return (
    <>
      <Button
        style={{ borderRadius: "20px", width: "12%", marginBottom: "10px" }}
        variant="outline-primary"
        size={props.size}
      >
        {props.btnName}
      </Button>
    </>
  );
};

export default CustomButton;
