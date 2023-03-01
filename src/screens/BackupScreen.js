import React, { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CheckBox from "../global/CheckBox";
import CustomButton from "../global/CustomButton";
import CustomTable from "../global/CustomTable";
import PieChartWithCustomization from "../views/pie & funnel charts/Pie Chart with Customization";

const BackupScreen = () => {
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
            <h5>Backups</h5>
          </Col>
        </Row>

        <Row>
          <Col className="text-lg-end">
            <CustomButton
              btnName={"Create Backup"}
              size={"sm"}
              button={"Custom"}
            />
            <CustomButton
              btnName={"Update Backup"}
              size={"sm"}
              button={"Custom"}
            />
          </Col>
        </Row>

        <CustomTable
          BackupId={"Backup Id"}
          Created={"Created"}
          DataCreated={"Data Created"}
          Scope={"Scope"}
          TiredToHSM={"Tired To HSM"}
          BackupKey={"Backup Key"}
          Description={"Description"}
          screen={"Backup"}
        />

        <Row>
          <Col>
            <PieChartWithCustomization />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BackupScreen;
