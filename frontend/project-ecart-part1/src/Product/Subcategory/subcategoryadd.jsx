import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import './subcategory.css';
import config from '../../config';
import axios from 'axios';

const Subcategoryadd = () => {
  const navigate = useNavigate()
  const [categoryData, setCategoryData] = useState([]);
  const [subcatData, setSubcatData] = useState({
    category_id: '',
    sub_category_id: '',
    sub_category_name: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSubcatData((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  // post api
  const addSubcategory = async (e) => {
    e.preventDefault()
    const { category_id, sub_category_id, sub_category_name } = subcatData;
    const apiData = { category_id, sub_category_id, sub_category_name }
    let configs = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    let response = await axios.post(`${config.URL}/product_subcategory`, apiData, configs)
    if (response.status === 400) {
      console.log("err")
    }
    else {
      navigate('/subcategorytab')
    }
  }

  // get api category id

  async function displayCategory() {
    let res = await fetch(`${config.URL}/product_subcategory/sub_catname`);
    let Udata = await res.json();
    setCategoryData(Udata.response);
  }
  useEffect(() => {
    displayCategory();
  }, [])

  return (
    <div className='subcategory'>
      <h1>Subcategory Form</h1>
      <Form onSubmit={addSubcategory}>
        <Form.Label>CategoryName</Form.Label>
        <select className="form-select" type="text" placeholder='categoryname' name='category_id' value={subcatData.category_id} onChange={handleChange}>
          <option value="">--select category--</option>
          {
            categoryData.map((item, index) => {
              console.log(categoryData, 'subdata')
              return (
                <option key={index} vlaue={item.category_id}>{item.category_name}</option>
              )
            })
          }
        </select>

        <Form.Label>SubCategory_id</Form.Label>
        <Form.Control type="text" name='sub_category_id' value={subcatData.sub_category_id} onChange={handleChange} />

        <Form.Label>SubCategory_Name</Form.Label>
        <Form.Control type="text" name="sub_category_name" value={subcatData.sub_category_name} onChange={handleChange} />
        <div className="container">
          <div className="row">
            <div className="col">
            </div>
            <div className="col mt-2">
              <Button variant="primary" type='submit' size='md'>
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

export default Subcategoryadd