import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';


export default function MyCard(props) {

  
    
  


  return (
    <Col md={4} sm={12} className="mb-3">
    <Card className='d-flex justify-content-center align-items-center mt-5 card'>
      <div >
      <a href='#'className='d-flex justify-content-center align-items-center '>
      <Card.Img  variant="top" src={props.item.imageUrl} height={"150rem"} alt='Product Image' />
      </a>
      </div>
      <Card.Body className='d-flex flex-column align-items-center'>
        <a href='#' className='c-link'>
          <p className='text-center'>{props?.item?.title}</p>
        </a>
        <Card.Text className='text-center'>
          {props?.item?.description}
        </Card.Text>
        <Card.Text className='text-center' style={{ color: 'chocolate', fontSize: '1.3em', fontWeight: 'bold' }}>
          {props?.item?.price}
        </Card.Text>
        <Button variant="danger" onClick={()=>{
            props.delete(props.item.id)
        }} className='align-items-center'>Delete</Button>
      </Card.Body>
    </Card>
  </Col>
    )
}
