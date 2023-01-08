import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = (props) => {
  return (
    <>
      {props?.button === "Custom" ? (
        <Button
          style={{ borderRadius: "20px", width: "120px" }}
          variant="outline-primary"
          size={props.size}
        >
          {props.btnName}
        </Button>
      ) : null}

      {props?.button === "Restart" ? (
        <Button style={{ width: "100px" }} variant="danger" size={props.size}>
          {props.btnName}
        </Button>
      ) : null}

      {props?.button === "System Restart" ? (
        <Button style={{ width: "150px" }} variant="danger" size={props.size}>
          {props.btnName}
        </Button>
      ) : null}

      {props?.button === "New Syslog Server" ? (
        <Button style={{ width: "150px" }} variant="primary" size={props.size}>
          {props.btnName}
        </Button>
      ) : null}
    </>
  );
};

export default CustomButton;
