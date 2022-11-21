import React from "react";
import Form from "react-bootstrap/Form";
const CheckBox = (props) => {
  return (
    <div>
      <Form.Check inline label={props.active} name="group1" />
    </div>
  );
};

export default CheckBox;
