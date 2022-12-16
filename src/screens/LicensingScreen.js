import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import CustomTable from "../global/CustomTable";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CustomButton from "../global/CustomButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

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
            <Row className="pb-2">
              <Col
                className="p-0 border border-top-0 "
                lg={3}
                md={3}
                sm={6}
                xs={12}
              >
                <div className="bg-primary pt-2"></div>
                <div className="p-2">9 Total Features</div>
              </Col>

              <Col
                className="p-0 border border-top-0 "
                lg={3}
                md={3}
                sm={6}
                xs={12}
              >
                <div className="bg-danger pt-2"></div>
                <div className="p-2">0 Expired</div>
              </Col>

              <Col
                className="p-0 border border-top-0 "
                lg={3}
                md={3}
                sm={6}
                xs={12}
              >
                <div className="bg-warning pt-2"></div>
                <div className="p-2">0 Warning</div>
              </Col>

              <Col
                className="p-0 border border-top-0 "
                lg={3}
                md={3}
                sm={6}
                xs={12}
              >
                <div className="bg-success pt-2"></div>
                <div className="p-2">9 Active</div>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Search" size="sm" />
                </Form.Group>
              </Col>
              <Col className="text-end" lg={6} md={6} sm={12} xs={12}>
                <CustomButton btnName={"Add License"} size={"sm"} />
              </Col>
            </Row>

            <div>
              <Row>
                <Col className="text-start">
                  <p>9 Total Features</p>
                </Col>
              </Row>
              <CustomTable
                feature={"Feature"}
                state={"State"}
                expiration={"Expiration"}
                screen={"licensing"}
              />
            </div>
          </Tab>
          <Tab eventKey="lockcolors" title="Lock Colors"></Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default LicensingScreen;
