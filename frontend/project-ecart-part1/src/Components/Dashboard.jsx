import React, { useState, useEffect } from "react";
import "./dashboard1.css";
import { Table, Row, Col } from "react-bootstrap";
import { Progress } from "antd";
import "antd/dist/antd.css";
import config from '../config'

function Dashboard() {
  const [offer, setOffer] = useState([]);
  const [user, setUser] = useState([]);
  const [category, setCategory] = useState([]);
  const [shop, setShop] = useState([]);
  // [users, setUsers] = useState([]);
  // [shop, setShop] = useState([]);

  // offer get api
  async function displayOffer() {
    let response = await fetch(`${config.URL}/offer`, {
      method: "GET",
    });
    let Udata = await response.json();
    setOffer(Udata.response);
  }

  // user get api
  async function fetchData() {
    let response = await fetch(`${config.URL}/user`, {
      method: "GET",
    });
    let Udata = await response.json();
    setUser(Udata.response);
  }

  // category get api
  async function displayCategory() {
    let res = await fetch(
      `${config.URL}/product_category`,
      { method: "GET" }
    );
    let Udata = await res.json();
    setCategory(Udata.response);
  }
  // shop get api
  async function displayShop() {
    let response = await fetch(
      `${config.URL}/shop_registration`,
      { method: "GET" }
    );
    let Udata = await response.json();
    setShop(Udata.response);
  }

  useEffect(() => {
    fetchData();
    displayOffer();
    displayShop();
    displayCategory();
  }, []);

  return (
    <>
      {/* <div className="container">
      <div className="content">
        <div className="cards">
          <div className="card">
            <div className="box">
              <h3>{user.length}</h3>
              <h3>Users</h3>
            </div>
            <div className="icon-case">
              <i className="bi bi-receipt-cutoff"></i>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <h3>{offer.length}</h3>
              <h3>Offers</h3>
            </div>
            <div className="icon-case">
              <i className="bi bi-bank"></i>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <h3>{category.length}</h3>
              <h3>Category</h3>
            </div>
            <div className="icon-case">
              <i className="bi bi-bag-plus-fill"></i>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <h3>{subcategory.length}</h3>
              <h3>Subcategory</h3>
            </div>
            <div className="icon-case">
              <i className="bi bi-basket"></i>
            </div>
          </div>
        </div>
        <div className="content-2">
          <div className="recent-payments">
            <div className="title">
              <h2>Recent Users</h2>
              <a href="#" className="btn btn-success">
                View All
              </a>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Password</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {user.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.user_Id}</td>
                      <td>{item.fullname}</td>
                      <td>{item.password}</td>
                      <td>{item.dept}</td>
                      <td>{item.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="new-students">
            <div className="title">
              <h2>Recent Product</h2>
              <a href="#" className="btn btn-success">
                View All
              </a>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Cid</th>
                  <th>C_Name</th>
                </tr>
              </thead>
              <tbody>
                {category.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.category_id}</td>
                      <td>{item.category_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> */}

      <div
        className="container text-center"
        style={{
          position: "relative",
          backgroundColor: "#f1f1f1",
          padding: "20px",
        }}
      >
        <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <div className="p-3 border bg-light">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 pt-3">
                    <img
                      src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{user.length}</h5>
                      <p className="card-text">
                        <small className="text-muted">Users</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 pt-3">
                    <img
                      src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{offer.length}</h5>
                      <p className="card-text">
                        <small className="text-muted">Offers</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 pt-3">
                    <img
                      src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{category.length}</h5>
                      <p className="card-text">
                        <small className="text-muted">Category</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 pt-3">
                    <img
                      src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{shop.length}</h5>
                      <p className="card-text">
                        <small className="text-muted">Shops</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Row style={{paddingTop:"20px"}}>
          <Col sm={8}>
            <Progress percent={30} status="active" />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
          </Col>
          <Col sm={4}></Col>
        </Row>
        <div className="row g-1 pt-2">
          <div className="col-7">
            <div
              className="p-3 border bg-light"
              style={{ overflowX: "hidden", overflowY: "scroll" }}
            >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.user_Id}</td>
                        <td>{item.fullname}</td>
                        <td>{item.password}</td>
                        <td>{item.dept}</td>
                        <td>{item.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col-3">
            <div className="p-3 border bg-light"
            style={{ overflowX: "hidden", overflowY: "scroll" }}
            >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Category ID</th>
                    <th>Category Name</th>
                  </tr>
                </thead>
                <tbody>
                  {category.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.category_id}</td>
                        <td>{item.category_name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
