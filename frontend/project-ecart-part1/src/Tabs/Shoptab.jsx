import React from "react";
import {Tabs, Tab} from 'react-bootstrap'
import Shopadd from "../Shop/shopadd";
import Shopview from "../Shop/shopview";

const Shoptab = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Shopadd />
      </Tab>
      <Tab eventKey="profile" title="View">
        <Shopview />
      </Tab>
    </Tabs>
  );
}

export default Shoptab;
