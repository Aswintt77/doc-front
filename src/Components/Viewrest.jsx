import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
 
} from 'mdb-react-ui-kit';
import RestReview from './RestReview';
import './Viewrest.css'

function Viewrest() {

  const [docDetails,setDocDetails]=useState([])
  //useParams - used to get path parameters from the url
  // const paraId = useParams()
  // console.log(paraId.id); //object ->id=3
//destructure
const {id} = useParams()
console.log(id);

  //API call to get details of the particular restaurant using path parameter
  const base_url='https://doc-back-wzau.onrender.com/doctors'
  const fetchDoc=async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result);
    setDocDetails(result.data)
  }
  console.log(docDetails);
useEffect(()=>{
  fetchDoc()
},[])
  return (<div className='mainee'>
     <div className=' container d-center ' style={{marginRight:'50px', paddingBottom:'50px',paddingTop:'50px'}}>
<MDBCard className='box1' style={{height:'650px', width:'1200px', boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
      <MDBCardBody>
        <div style={{display:'flex', marginBottom:'100px'}}>
          <div>
      <MDBCard   style={{width:'400px', height:'200px', marginLeft:'100px', marginTop:'50px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',}}>
      <MDBCardBody className='card text-center'>
        <MDBCardTitle><h1 className='text text-primary'>{docDetails.hospital}</h1></MDBCardTitle>
        <MDBCardSubTitle><h2>{docDetails.name}</h2></MDBCardSubTitle>
        <MDBCardText>
        <h3> Phone : {docDetails.phone}</h3>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </div>
   <div>
      <p style={{marginLeft:'200px', marginTop:'50px', fontSize:'20px'}}>
        <i class="fa-solid fa-location-dot"></i> {docDetails.address} <br/>
        <i class="fa-solid fa-clock"></i> {docDetails.available_hours} <br />
        <i class="fa-solid fa-envelope"></i>  {docDetails.email} <hr />
        Available Days : <br />
        {docDetails.available_days?.join(' | ')}
      </p>
      </div>
      </div>
    <hr />
    <section style={{marginTop:'30px', marginLeft:'10px', paddingBottom:'30px'}}> <p style={{fontSize:'20px'}}>
<RestReview  re={docDetails.reviews}/></p>
    </section>
        
      </MDBCardBody>
    </MDBCard>
   
    </div>
    </div>
   
  )
}

export default Viewrest