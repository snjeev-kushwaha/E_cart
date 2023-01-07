import React from "react";
import {Tabs, Tab} from 'react-bootstrap'
import OfferAdd from "../Offer/Offersadd";
import Offerview from "../Offer/Offerview";
const Offertab = () => {
  return (
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Add">
          <OfferAdd />
        </Tab>
        <Tab eventKey="profile" title="View">
          <Offerview />
        </Tab>
      </Tabs>
  );
}

export default Offertab;
