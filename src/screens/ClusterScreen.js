import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CustomButton from "../global/CustomButton";
import CustomTable from "../global/CustomTable";
import DoughnutChart from "../views/pie & funnel charts/Doughnut Chart";

const ClusterScreen = () => {
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
            <h5>Cluster Configuration</h5>
          </Col>
        </Row>

        <Row>
          <Col className="text-lg-end">
            <CustomButton
              btnName={"Manage cluster"}
              size={"sm"}
              button={"Custom"}
            />
          </Col>
        </Row>

        <CustomTable
          Host={"Host"}
          Port={"Port"}
          NodeID={"Node ID"}
          StatusCode={"Status Code"}
          Status={"Status"}
          screen={"Cluster"}
        />

        <Row>
          <Col className="text-lg-end">
            <h6>No Cluster Nodes</h6>
          </Col>
        </Row>

        <Row>
          <Col>
            <DoughnutChart />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ClusterScreen;
