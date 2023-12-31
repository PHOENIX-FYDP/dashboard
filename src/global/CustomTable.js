import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import CheckBox from "./CheckBox";
import CustomButton from "./CustomButton";

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

  const [demo, setDemo] = useState([
    {
      Name: "kmip",
      NIC: "all",
      Type: "kmip",
      Port: "5969",
      Mode: "N/A",
      ULIC: "CN",
      SCA: "ca.pem:MySQL_Server_suffix_Auto_Generated_CA_Certificate",
    },
  ]);

  const [cluster, setCluster] = useState([
    {
      Host: "Host",
      Port: "Port",
      NodeID: "NodeID",
      StatusCode: "StatusCode",
      Status: "Status",
    },
  ]);

  const [service, setService] = useState([
    {
      Service: "nae",
      Action: false,
    },
  ]);

  const [syslogData, setSyslogData] = useState([
    {
      SHName: "192.168.72.45",
      Port: "514",
      Transport: "UDP",
      LogFormat: "PlainMessage",
    },
  ]);

  const [snmp, setSnmp] = useState([
    {
      Name: "SNMP User",
      SecurityLevel: "authPriv",
      AuthProtocol: "SHA-512",
      PrivacyProtocol: "AES-256",
      MIBAccesses: "Enterprise,Standard",
      ReadWrite: "Read Only",
    },
  ]);

  const [ldap, setLdap] = useState([
    {
      Domain: "demo.lab",
      Server: "Idap://192.168.72.45",
      RootDIN: "cn=Users,dc=demo,dc=lab",
      BindDN: "cn=Administrator,cn=User,dc=demo,dc=lab",
      SearchFilter: "",
      LoginName: "cn",
      UniqueID: "cn",
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

      {props?.screen === "Backup" ? (
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

      {props?.screen === "Interface" ? (
        <Table size="sm" className="table  table-striped ">
          <thead>
            <tr>
              <th>{props.Name}</th>
              <th>{props.NIC}</th>
              <th>{props.Type}</th>
              <th>{props.Port}</th>
              <th>{props.Mode}</th>
              <th>{props.ULIC}</th>
              <th>{props.SCA}</th>
            </tr>
          </thead>
          <tbody>
            {demo?.map((x, index) => {
              return (
                <tr key={index}>
                  <td>{x.Name}</td>
                  <td>{x.NIC}</td>
                  <td>{x.Type}</td>
                  <td>{x.Port}</td>
                  <td>{x.Mode}</td>
                  <td>{x.ULIC}</td>
                  <td>{x.SCA}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}

      {props?.screen === "Cluster" ? (
        <Table size="sm" className="table  table-striped ">
          <thead>
            <tr>
              <th>{props.Host}</th>
              <th>{props.Port}</th>
              <th>{props.NodeID}</th>
              <th>{props.StatusCode}</th>
              <th>{props.Status}</th>
            </tr>
          </thead>
          <tbody>
            {cluster?.map((x, index) => {
              return (
                <tr key={index}>
                  <td>{x.Host}</td>
                  <td>{x.Port}</td>
                  <td>{x.NodeID}</td>
                  <td>{x.StatusCode}</td>
                  <td>{x.Status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}

      {props?.screen === "SystemService" ? (
        <Table size="sm" className="table  table-striped ">
          <thead>
            <tr>
              <th>{props.Service}</th>
              <th>{props.Action}</th>
            </tr>
          </thead>
          <tbody>
            {service?.map((x, index) => {
              return (
                <tr key={index}>
                  <td>{x.Service}</td>
                  <td>
                    <CustomButton
                      btnName={"Restart"}
                      size={"sm"}
                      button={"Restart"}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}

      {props?.screen === "Syslog" ? (
        <Table size="sm" className="table  table-striped ">
          <thead>
            <tr>
              <th>{props.SHName}</th>
              <th>{props.Port}</th>
              <th>{props.Transport}</th>
              <th>{props.LogFormat}</th>
            </tr>
          </thead>
          <tbody>
            {syslogData?.map((x, index) => {
              return (
                <tr key={index}>
                  <td>{x.SHName}</td>
                  <td>{x.Port}</td>
                  <td>{x.Transport}</td>
                  <td>{x.LogFormat}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}

      {props?.screen === "SNMP" ? (
        <Table size="sm" className="table  table-striped ">
          <thead>
            <tr>
              <th>{props.Name}</th>
              <th>{props.SecurityLevel}</th>
              <th>{props.AuthProtocol}</th>
              <th>{props.PrivacyProtocol}</th>
              <th>{props.MIBAccesses}</th>
              <th>{props.ReadWrite}</th>
              <th>{props.Action}</th>
            </tr>
          </thead>
          <tbody>
            {snmp?.map((x, index) => {
              return (
                <tr key={index}>
                  <td>{x.Name}</td>
                  <td>{x.SecurityLevel}</td>
                  <td>{x.AuthProtocol}</td>
                  <td>{x.PrivacyProtocol}</td>
                  <td>{x.MIBAccesses}</td>
                  <td>{x.ReadWrite}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}

      {props?.screen === "LDAP" ? (
        <Table size="sm" className="table  table-striped ">
          <thead>
            <tr>
              <th>{props.Domain}</th>
              <th>{props.Server}</th>
              <th>{props.RootDIN}</th>
              <th>{props.BindDN}</th>
              <th>{props.SearchFilter}</th>
              <th>{props.LoginName}</th>
              <th>{props.UniqueID}</th>
            </tr>
          </thead>
          <tbody>
            {ldap?.map((x, index) => {
              return (
                <tr key={index}>
                  <td>{x.Domain}</td>
                  <td>{x.Server}</td>
                  <td>{x.RootDIN}</td>
                  <td>{x.BindDN}</td>
                  <td>{x.SearchFilter}</td>
                  <td>{x.LoginName}</td>
                  <td>{x.UniqueID}</td>
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
