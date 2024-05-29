import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import az from '../../images/az.png'
import './nav.css'
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
import { Link } from 'react-router-dom';



export default function MyFooter() {
  
  return (
    <footer className='footer-bg text-light'>
      <Container>
        
        <Row>
          <Col className='mt-5'>
            <div className='img-container'>
             <a href='https://azearn.com/'>
             <img
                src={az}
                width="40%"
                height="40%"
                className="d-inline-block align-top img"
                alt="AZ logo"
              />
             </a>
            </div><br/>
            <p className='text-light'>
              Welcome to Affiliate Zone. We are providing a platform to our
              users to sell Amazon and many more affiliate products of
              different e-commerce sites.
            </p>

            <div className="social-icons d-flex " >
              <Link to="/#">
                <div  className='icon d-flex justify-content-center align-items-center'>
              <BsTwitterX className='icon-inner' style={{color:'#c3d5e5'}}/>
                </div>
              </Link>
              <Link to="/#"  >
              <div className='icon d-flex justify-content-center align-items-center ml-3 mr-3'>
              <FaFacebookF className='icon-inner' style={{color:'#c3d5e5'}}/>
              </div>
              </Link>
              <Link to="/#" >
              <div className='icon d-flex justify-content-center align-items-center'>
              <FaPinterestP className='icon-inner' style={{color:'#c3d5e5'}}/>
              </div>
              </Link>
            </div>
          </Col>

          <Col className='mt-5'>
          <h4>Our Services</h4><br/><br/>
          <Link
          to='/addproduct' 
          className='f-link'>
            add product
          </Link><br/><br/>
          <Link to='#' className='f-link'>products</Link><br/><br/>
          <Link to='#' className='f-link'>privacy policy</Link>
          </Col>

          <Col className='mt-5'>
          <h4>Important</h4><br/><br/>
          <Link to='#' className='f-link'>Login</Link><br/><br/>
          <Link to='#' className='f-link'>Sign up</Link><br/><br/>
          <Link to='#' className='f-link'>Contact</Link>
          </Col>
        </Row>
        <div className='d-flex justify-content-center align-content-center mt-3' style={{color:'#c3d5e5',fontSize:'1em'}}>
        <p>Copyright ©2024 
            All rights reserved 
            by Affiliate zone
        </p>
      </div>
      </Container>

    </footer>
  );
}
