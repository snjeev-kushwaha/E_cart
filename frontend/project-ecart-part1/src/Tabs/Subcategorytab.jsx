import React from "react";
import {Tabs, Tab} from 'react-bootstrap'
import Subcategoryadd from '../Product/Subcategory/subcategoryadd';
import Subcategoryview from "../Product/Subcategory/subcategoryview";

const Subcategorytab = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Subcategoryadd />
      </Tab>
      <Tab eventKey="profile" title="View">
        <Subcategoryview />
      </Tab>
    </Tabs>
  );
}

export default Subcategorytab;
