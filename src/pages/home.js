import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyCard from '../components/card/card';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { textData } from '../firebase';



export default function Home() {
  const [section, setSection] = useState('watches');
  const [products, setproducts] = useState([]);

  const  products2= useSelector((state) => state.product.data);  
 
    useEffect(() => {
      setproducts(products2)
  }, [products2]);

  const getdata = async () => {
    try {
      const docsnap = await getDocs(collection(textData, 'Products'));
      const data = docsnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
      console.log(error);
    }
  };

    const handleDelete=async(id)=>{
    try{
        const docRef=doc(collection(textData, "Products"), id);
        await deleteDoc(docRef);
        getdata()
        alert("card deleted successfully");
       
    }
    catch (error){
        console.log("error deleting data", error);
    }
}

  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center flex-column align-items-center mt-5'>
          <h2 className='text-center w-75'>Best Watches and Mobiles in UK</h2>
          <p className='text-center w-50' style={{ color: '#565a5e' }}>
            Best women's gift shop in the UK if you are searching. We have multiple collections
            for gifts like watches for women and men. We are providing the best quality of watches and mobiles.
          </p>
        </Col>
      </Row>

      <Row>
        <Col className='d-flex justify-content-center align-items-center' style={{ borderBottom: '2px solid grey' }}>
          <Link
            onClick={() => {
              setSection('watches');
            }}
            className='tabs'
            style={{
              color: section === 'watches' ? 'chocolate' : 'black',
              borderBottom: section === 'watches' ? '3px solid chocolate' : 'black',
              
            }}
          >
            Women's watches
          </Link>
          <Link
            onClick={() => {
              setSection('mobiles');
            }}
            className='tabs'
            style={{
              color: section === 'mobiles' ? 'chocolate' : 'black',
              borderBottom: section === 'mobiles' ? '3px solid chocolate' : 'black',
            }}
          >
            Mobiles
          </Link>
          <Link
            onClick={() => {
              setSection('pakistan');
            }}
            className='tabs'
            style={{
              color: section === 'pakistan' ? 'chocolate' : 'black',
              borderBottom: section === 'pakistan' ? '3px solid chocolate' : 'black',
            }}
          >
            Pakistan
          </Link>
        </Col>
      </Row>

      <Row>
      {section === 'watches' &&
          products.map((e, index) => {
            if (e.category === 'watches') {
              return <MyCard delete={()=>handleDelete(e.id)} key={e.id || index} item={e} />;
            }
            return null;
          })}
        {section === 'mobiles' &&
          products.map((e, index) => {
            if (e.category === 'mobiles') {
              return <MyCard delete={()=>handleDelete(e.id)} key={e.id || index} item={e}/>;
            }
            return null;
          })}
         {section === 'pakistan' &&
          products.map((e, index) => {
            if (e.category === 'pakistan') {
              return <MyCard delete={()=>handleDelete(e.id)} key={e.id || index} item={e}  />;
            }
            return null;
          })}
      </Row>
    </Container>
  );
}
