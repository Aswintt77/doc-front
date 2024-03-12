import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './RestCard.css'

function Restcard({ doctors }) {
  console.log(doctors);
  return (


    <div>

      <MDBCard className='my-4 mx-3 text-center' style={{ height: '220px' }} >

        <MDBCardBody>
          <MDBCardTitle><b>{doctors.hospital}</b></MDBCardTitle>
          <MDBCardText>
            {doctors.name}
          </MDBCardText>
          <MDBCardText>
            <strong>{doctors.specialty}</strong>
          </MDBCardText>
          <MDBCardText>
            <i class="fa-solid fa-star " style={{ color: 'gold' }}></i>{doctors.rating}
          </MDBCardText>
          <Link to={`view/${doctors.id}`} style={{ textDecoration: 'none' }}>
            <MDBBtn className='btn btn-sm' href='#' style={{}}>MORE DETAILS</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </div >



  )
}

export default Restcard