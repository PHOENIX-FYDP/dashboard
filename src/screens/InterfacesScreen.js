import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CustomButton from "../global/CustomButton";
import CustomTable from "../global/CustomTable";
import BarChart from "../views/column charts/Bar Chart";

const InterfacesScreen = () => {
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
            <h5>Interface Configuration</h5>
          </Col>
        </Row>

        <Row>
          <Col className="text-lg-end">
            <CustomButton
              btnName={"Add Interface"}
              size={"sm"}
              button={"Custom"}
            />
          </Col>
        </Row>

        <CustomTable
          Name={"Name"}
          NIC={"NIC"}
          Type={"Type"}
          Port={"Port"}
          Mode={"Mode"}
          ULIC={"Username Location In Certificate"}
          SCA={"Server Certificate Autogen"}
          screen={"Interface"}
        />

        <Row>
          <Col>
            <BarChart />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InterfacesScreen;
