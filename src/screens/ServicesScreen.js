import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CustomButton from "../global/CustomButton";
import CustomTable from "../global/CustomTable";

const ServicesScreen = () => {
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
            <h5>System Services</h5>
          </Col>
        </Row>

        <CustomTable
          Service={"Service"}
          Action={"false"}
          screen={"SystemService"}
        />

        <Row>
          <Col className="text-lg-start">
            <span>
              <CustomButton
                btnName={"System Restart"}
                size={"sm"}
                button={"System Restart"}
              />
              <figcaption className="blockquote-footer mt-1">
                The system will be unavailable during restart!
              </figcaption>
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServicesScreen;
