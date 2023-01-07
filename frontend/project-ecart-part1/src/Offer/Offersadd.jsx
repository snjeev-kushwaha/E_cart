import React, { useState } from 'react';
import './offer.css';
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import config from '../config'

const OfferAdd = () => {
  const navigate = useNavigate()
  const [offerinfo, setOfferinfo] = useState({
    offer_id: '',
    coupan_code: '',
    From_date: '',
    to_date: '',
    discountPersentage: '',
    flat_discount: '',
    valid_in: '',
    additional_offers: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfferinfo((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  // post api

  const addOffer = async (e) => {
    e.preventDefault()
    const { offer_id, coupan_code, From_date, to_date, discountPersentage, flat_discount, valid_in, additional_offers } = offerinfo;
    const apiData = { offer_id, coupan_code, From_date, to_date, discountPersentage, flat_discount, valid_in, additional_offers }

    const configs = {
      "Content-Type": "application/json"
    }
    let response = await axios.post(`${config.URL}/offer`, apiData, configs)
    if (response.status === 400) {
      console.log('err')
    }
    navigate('/offertab')
  }

  return (
    <div className='addoffer'>
      <h1>Add Offer</h1>
      <Form onSubmit={addOffer}>
        <Form.Label>Offer_Id</Form.Label>
        <Form.Control type="text" name='offer_id' value={offerinfo.offer_id}
          onChange={handleChange} />
        <Form.Label>Coupan_Code</Form.Label>
        <Form.Control type="text" name='coupan_code' value={offerinfo.coupan_code} onChange={handleChange} />
        <Row>
          <Col><Form.Label>From_date</Form.Label>
            <Form.Control type="date" name='From_date' value={offerinfo.From_date} onChange={handleChange} /></Col>
          <Col><Form.Label>To_date</Form.Label>
            <Form.Control type="date" name='to_date' value={offerinfo.to_date} onChange={handleChange} /></Col>
        </Row>
        <Row>
          <Col><Form.Label>Discount Persentage</Form.Label>
            <Form.Control type="text" name='discountPersentage' value={offerinfo.discountPersentage} onChange={handleChange} /></Col>
          <Col><Form.Label>Flat Discount</Form.Label>
            <Form.Control type="text" name='flat_discount' value={offerinfo.flat_discount} onChange={handleChange} /></Col>
        </Row>
        <Form.Label>Valid_In</Form.Label>
        <select class="form-select" name='valid_in' value={offerinfo.valid_in} onChange={handleChange}>
          <option></option>
          <option>All India</option>
          <option>Indore</option>
          <option>Bhopal</option>
          <option>Jabalpur</option>
        </select>
        <Form.Label>Additional Offers</Form.Label>
        <Form.Control type="text" name='additional_offers' value={offerinfo.additional_offers} onChange={handleChange} />
        <div className="container">
          <div className="row">
            <div className="col">
            </div>
            <div className="col mt-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <div className="col">
            </div>
          </div>
        </div>

      </Form>
    </div>
  )
}

export default OfferAdd