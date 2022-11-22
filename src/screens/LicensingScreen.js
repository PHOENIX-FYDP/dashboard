import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import CustomTable from "../global/CustomTable";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CustomButton from "../global/CustomButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LicensingScreen = () => {
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
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="nav nav-pills mb-3"
        >
          <Tab eventKey="features" title="Features">
            <Row>
              <Col className="text-end">
                <CustomButton btnName={"Add License"} size={"sm"} />
              </Col>
            </Row>

            <CustomTable
              feature={"Feature"}
              state={"State"}
              expiration={"Expiration"}
            />
          </Tab>
          <Tab eventKey="lockcolors" title="Lock Colors"></Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default LicensingScreen;
