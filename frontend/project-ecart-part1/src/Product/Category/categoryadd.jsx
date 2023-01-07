import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import config from '../../config'

const Categoryadd = () => {

  const navigate = useNavigate()
  const [addcategory, setAddcategory] = useState({
    category_id: '',
    category_name: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setAddcategory((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  // post api

  const addCategory = async (e) => {
    e.preventDefault()

    const { category_id, category_name } = addcategory;
    const apiData = { category_id, category_name }

    let configs = {
      'Content-Type': 'application/json'
    }
    let response = await axios.post(`${config.URL}/product_category`, apiData, configs)
    if (response.status === 400) {
      console.log('err')
    }
    navigate('/categorytab')
  }

  return (
    <div className='addcategory'>
      <h1>Category from</h1>
      <Form onSubmit={addCategory}>
        <Form.Label>Category_id</Form.Label>
        <Form.Control type="text" name='category_id' value={addcategory.category_id} onChange={handleChange} />

        <Form.Label>Category_name</Form.Label>
        <Form.Control type="text" name='category_name' value={addcategory.category_name} onChange={handleChange} />
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
  )
}

export default Categoryadd