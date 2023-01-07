import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import UserManagement from '../Usermanagement/UserAdd';
import UserView from '../Usermanagement/UserView';

const Usertab = () => {
  return (
    <>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Add">
           <UserManagement />
          </Tab>
          <Tab eventKey="profile" title="View">
          <UserView/>
          </Tab>
        </Tabs>
    </>
  )
}

export default Usertab;