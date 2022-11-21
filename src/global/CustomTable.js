import React from "react";
import Table from "react-bootstrap/Table";
import CheckBox from "./CheckBox";

const CustomTable = (props) => {
  return (
    <Table size="sm" className="table  table-striped">
      <thead>
        <tr>
          <th>{props.feature}</th>
          <th>{props.state}</th>
          <th>{props.expiration}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CCKM</td>
          <td>
            <CheckBox active={"Active"} />
          </td>
          <td>Otto</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomTable;
