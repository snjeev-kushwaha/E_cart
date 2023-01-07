import React from "react";
import {Tabs, Tab} from 'react-bootstrap'
import Categoryadd from "../Product/Category/categoryadd";
import Categoryview from "../Product/Category/categoryview";

const Productcategorytab = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Categoryadd />
      </Tab>
      <Tab eventKey="profile" title="View">
        <Categoryview />
      </Tab>
    </Tabs>
  );
}

export default Productcategorytab;
