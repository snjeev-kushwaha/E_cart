import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap';
import './user.css';
import axios from 'axios';
import config from '../config';

const UserManagement = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    dateofjoin: '',
    role: '',
    status: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const submitUser = async (e) => {
    e.preventDefault()
    const { fullname, dateofjoin, email, password, role, status } = user
    const apiData = { fullname, dateofjoin, email, password, role, status }

    const configs = {
      "Content-Type": "application/json"
    }
    const response = await axios.post(`${config.URL}/user`, apiData, configs)
    if (response.status === 400) {
      console.log("err")
    }
    navigate('/usertab')
  }

  return (
    <>
      <div className='user'>
        <h4>User Management From</h4>
        <Form onSubmit={submitUser}>
          <Form.Label>Full_name</Form.Label>
          <Form.Control type="text" name='fullname' value={user.fullname} onChange={handleChange} />
          <Row>
            <Col><Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' value={user.email} onChange={handleChange} /></Col>
            <Col><Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' value={user.password} onChange={handleChange} /></Col>
          </Row>
          <Row>
            <Col><Form.Label>Date of join</Form.Label>
              <Form.Control type="date" name='dateofjoin' value={user.dateofjoin} onChange={handleChange} /></Col>
            <Col><Form.Label>Role</Form.Label>
              <select
                className="form-select"
                name='role'
                value={user.role}
                onChange={handleChange}
              >
                <option></option>
                <option>Admin</option>
                <option>Business</option>
                <option>User</option>
              </select>
            </Col>
          </Row>
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" name='status' value={user.status} onChange={handleChange} />
          <div className="container">
            <div className="row">
              <div className="col">

              </div>
              <div className="col">
                <Button className='mt-2' variant="primary" type="submit" size="md">
                  Submit
                </Button>
              </div>
              <div className="col">

              </div>
            </div>
          </div>

        </Form>
      </div>
    </>
  )
}
export default UserManagement