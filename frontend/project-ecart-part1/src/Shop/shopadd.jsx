import React, { useState } from "react";
import "./shop.css";
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from "react-bootstrap";
import { Country, State, City } from "country-state-city";
import config from '../config'
import axios from 'axios'

const Shopadd = () => {
  const navigate = useNavigate()
  const [country, setCountry] = useState('')
  const [state, setState] = useState([])
  const [city, setCity] = useState([])
  const [shopfields, setShopfields] = useState({
    Reg_no: '',
    shop_id: '',
    shop_name: '',
    address: '',
    pincode: '',
    contact: '',
    owner: '',
    type: '',
    email: '',
    url: '',
    gst: '',
    turnover: '',
    description: '',
    terms_condition: '',
    status: '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setShopfields((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  // post api

  const addShop = async (e) => {
    e.preventDefault();
    const { Reg_no, shop_id, shop_name, address, pincode, contact, owner, type, email, url, gst, turnover, description, terms_condition, status, image } = shopfields;
    const apiData = { Reg_no, shop_id, shop_name, address, country, state, city, pincode, contact, owner, type, email, url, gst, turnover, description, terms_condition, status, image }

    const configs = {
      "Content-Type": "application/json"
    }
    let response = await axios.post(`${config.URL}/shop_registration`, apiData, configs)
    if (response.status === 400) {
      console.log('err')
    }
    navigate('/shoptab')
  }

  return (
    <div className="shopadd">
      <h2>Shop Registraion from</h2>
      <Form onSubmit={addShop}>
        <Row>
          <Col>
            <Form.Label>Registration Number</Form.Label>
            <Form.Control
              type="text"
              name='Reg_no'
              value={shopfields.Reg_no}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Shop_id</Form.Label>
            <Form.Control
              type="text"
              name='shop_id'
              value={shopfields.shop_id}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Shop_name</Form.Label>
            <Form.Control
              type="text"
              name='shop_name'
              value={shopfields.shop_name}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name='address'
              value={shopfields.address}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Country</Form.Label>
            <select
              className="form-select"
              required
              name='country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </Col>
          <Col>
            <Form.Label>State</Form.Label>
            {country && (
              <select
                className="form-select"
                required
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>City</Form.Label>
            {city && (
              <select
                className="form-select"
                required
                name='city'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">City</option>
                {City &&
                  City.getCitiesOfState(country, state).map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            )}

          </Col>
          <Col>
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              name='pincode'
              value={shopfields.pincode}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              name='contact'
              value={shopfields.contact}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Show_owner</Form.Label>
            <Form.Control
              type="text"
              name='owner'
              value={shopfields.owner}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Shop_type</Form.Label>
            <select
              className="form-select"
              name='type'
              value={shopfields.type}
              onChange={handleChange}
            >
              <option></option>
              <option>Electritions</option>
              <option>Grocery</option>
              <option>General store</option>
              <option>Footwere</option>
            </select>
          </Col>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name='email'
              value={shopfields.email}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              name='url'
              value={shopfields.url}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>GST</Form.Label>
            <Form.Control
              type="text"
              name='gst'
              value={shopfields.gst}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Turn Over</Form.Label>
            <Form.Control
              type="text"
              name='turnover'
              value={shopfields.turnover}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name='description'
              value={shopfields.description}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Term-condition</Form.Label>
            <Form.Control
              type="text"
              name="terms_condition"
              value={shopfields.terms_condition}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Status</Form.Label>
            <select
              className="form-select"
              name="status"
              value={shopfields.status}
              onChange={handleChange}
            >
              <option></option>
              <option>Activated</option>
              <option>pending</option>
            </select>
          </Col>
        </Row>
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="text"
          name='image'
          value={shopfields.image}
          onChange={handleChange}
        />
        <div className="container">
          <div className="row">
            <div className="col">
            </div>
            <div className="col mt-2">
              <Button variant="primary" type="submit" size='md'>
                Submit
              </Button>
            </div>
            <div className="col">
            </div>
          </div>
        </div>

      </Form>
    </div>
  );
}

export default Shopadd;
