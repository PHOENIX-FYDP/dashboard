import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CustomButton from "../global/CustomButton";
import CustomTable from "../global/CustomTable";

const SyslogScreen = () => {
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
            <h5>Syslog Settings</h5>
          </Col>
        </Row>

        <CustomTable
          SHName={"Server Hostname or IP Address"}
          Port={"Port"}
          Transport={"Transport"}
          LogFormat={"Log Format"}
          screen={"Syslog"}
        />

        <Row>
          <Col className="text-lg-start">
            <CustomButton
              btnName={"New Syslog Server"}
              size={"sm"}
              button={"New Syslog Server"}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SyslogScreen;
