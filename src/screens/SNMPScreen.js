import React from "react";
import { useEffect } from "react";
import { Col, Pagination, Row, Tab, Tabs } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CustomButton from "../global/CustomButton";
import CustomTable from "../global/CustomTable";

const SNMPScreen = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    var headerHeight = document.getElementById("myDiv").clientHeight;
    document.getElementById("lcontent").style.height = headerHeight + 20 + "px";
  });
  return (
    <div>
      <div className="l-header">
        <Sidebar />
      </div>
      <div id="lcontent"></div>
      <div className="container">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Users" title="Users">
            <Row>
              <Col className="text-lg-start" lg={12}>
                <h5>SNMP Configuration</h5>
              </Col>
            </Row>

            <Row>
              <Col className="text-lg-end">
                <CustomButton
                  btnName={"Create SNMP User"}
                  size={"sm"}
                  button={"Custom"}
                />
              </Col>
            </Row>

            <CustomTable
              Name={"Name"}
              SecurityLevel={"Security Level"}
              AuthProtocol={"Auth Protocol"}
              PrivacyProtocol={"Privacy Protocol"}
              MIBAccesses={"MIB Accesses"}
              ReadWrite={"Read/Write"}
              Action={"Action"}
              screen={"SNMP"}
            />

            <Row className="justify-content-end">
              <Col
                className="text-end d-flex justify-content-lg-center justify-content-center"
                lg={8}
                sm={12}
              >
                <Pagination>{items}</Pagination>
              </Col>
              <Col className="text-lg-end" lg={2} sm={12}>
                <h6>1 SNMP Users</h6>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Communities" title="Communities"></Tab>
          <Tab eventKey="Management Stations" title="Management Stations"></Tab>
          <Tab eventKey="SNMP Info" title="SNMP Info"></Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default SNMPScreen;
