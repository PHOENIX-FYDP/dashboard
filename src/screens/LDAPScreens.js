import React from "react";
import { useEffect } from "react";
import { Col, Pagination, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CustomButton from "../global/CustomButton";
import CustomTable from "../global/CustomTable";

const LDAPScreens = () => {
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
        <Row>
          <Col className="text-lg-start" lg={12}>
            <h5>LDAP Configuration</h5>
          </Col>
        </Row>

        <Row>
          <Col className="text-lg-end">
            <CustomButton btnName={"BIND LDAP"} size={"sm"} button={"Custom"} />
          </Col>
        </Row>

        <CustomTable
          Domain={"Domain"}
          Server={"Server"}
          RootDIN={"Root DIN"}
          BindDN={"Bind DN"}
          SearchFilter={"Search Filter"}
          LoginName={"Login Name"}
          UniqueID={"Unique ID"}
          screen={"LDAP"}
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
            <h6>1 LDAP Server</h6>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LDAPScreens;
