import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { Button, Row, Col } from 'react-bootstrap';
import config from '../config'

const UserView = () => {
  let navigate = useNavigate()
 let [ data, setData] = useState([]);
 let [ search, setSearch] = useState('');
 let [ filtereduser, setFilteredUser] = useState([]);

 // GET api

  const fetchData = async () => {
   let response = await fetch(`${config.URL}/user`, { method: "GET" });
    let Udata = await response.json();
    setData(Udata.response);
    setFilteredUser(Udata.response);
 }

 // Delete api

//  function deleteUser(user_id){
//     fetch(`http://localhost:5050/user/user/${user_id}`, {
//     method: "DELETE"
// })
// .then((res) =>{
//     if(res.status === 200)
//     alert("user deleted")
// })
// fetchData();
// }

 const columns =[
    {
        name: "User_Id",
     selector: row => row.user_Id,
        sortable: true
    },
    {
        name: "Fullname",
        selector: row=> row.fullname,
        sortable: true
    },
    {
      name: "email",
      selector: row => row.email,
    },
    {
        name: "password",
        selector: row=>row.password
    },
    {
      name: "Dateofjoin",
      selector: row => row.dateofjoin
    },
    {
        name: "Role",
        selector: row=>row.role
    },
    {
        name: "Status",
        selector: row=> row.status
    },
    {
        name: "Action",
      cell: row => { return (<Button varient="primary" onClick={() => navigate('/useredit', { state: data })}><i className="bi bi-pencil"></i></Button>) }
    }
 ]

 useEffect(() =>{
  fetchData();
},[])

useEffect(() => {
  let result = data.filter(value => {
    return value.fullname.toLowerCase().match(search.toLowerCase());
  })
  setFilteredUser(result);
},[search]);
  return (
    <>
    <Row>
        <Col xs={12} md={10}>Users</Col>
          <Col xs={6} md={2}><Button variant="success"><Link to="/useradd" className='text-light text-decoration-none'><i className="bi bi-plus"></i>Add User</Link></Button></Col>
      </Row>
   <DataTable 
   columns={columns}
   data = {filtereduser}
   pagination
   fixedHeader
   fixedHeaderScrollHeight="350px"
   selectableRows
   selectableRowsHighlight
   highlightOnHover
   subHeader
   subHeaderComponent={<input type="search" 
   placeholder="search here" 
   className="w-25 form-control"
   value={search}
   onChange = {(e) => setSearch(e.target.value)}
   />
  }
      />
</>
  )
}

export default UserView