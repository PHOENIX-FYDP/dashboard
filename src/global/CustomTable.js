import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import CheckBox from "./CheckBox";

const CustomTable = (props) => {
  const [backup, setBackup] = useState([
    {
      uuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      dataCreated: "13/12/22",
      created: true,
      scope: "system",
      TiedtoHSM: "yes",
      backupkey: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      description: "demo description",
    },
  ]);

  return (
    <div>
      {props.screen === "licensing" ? (
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
      ) : null}

      {props.screen === "Backup" ? (
        <Table size="sm" className="table  table-striped ">
          <thead>
            <tr>
              <th>
                <CheckBox active={props.BackupId} />
              </th>
              <th>{props.Created}</th>
              <th>{props.DataCreated}</th>
              <th>{props.Scope}</th>
              <th>{props.TiredToHSM}</th>
              <th>{props.BackupKey}</th>
              <th>{props.Description}</th>
            </tr>
          </thead>
          <tbody>
            {backup?.map((x, index) => {
              return (
                <tr key={index}>
                  <td>
                    <CheckBox active={x.uuid} />
                  </td>
                  <td>
                    <CheckBox />
                  </td>
                  <td>{x.dataCreated}</td>
                  <td>{x.scope}</td>
                  <td>{x.TiedtoHSM}</td>
                  <td>{x.backupkey}</td>
                  <td>{x.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </div>
  );
};

export default CustomTable;
