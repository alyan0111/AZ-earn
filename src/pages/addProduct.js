import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {imageData,textData} from '../firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/action';






export default function AddProduct() {

  const nav=useNavigate()
  const dispatch = useDispatch();
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState("");
  const [image,setImage]=useState(null);
  const [category,setCategory]=useState("");

  const handleImageChange=(e) =>{
      const file= e.target.files[0];
      setImage(file);
  };

  const handleSubmit=async(e) => {
      e.preventDefault();  //prevents the reloading of form after form submission.
          
          const customDocId= Math.floor(new Date().getTime());
          
          //upload images to firebase storage
          const storageRef= ref(imageData, 'product-images/' + customDocId);
          uploadBytes(storageRef,image).then((snapShot) => {
              console.log("image upload success", snapShot);
          
          //add product data to firestore
          getDownloadURL(snapShot.ref).then(async(url)=>{
          try {
          await setDoc(doc(textData,"Products", "id-"+customDocId),{
              id: "id-"+customDocId,
              title: title.trim(),
              description: description.trim(),
              price: price,
              imageUrl:url,
              category:category,
          });
            alert('Product Added Successfully');
            getdata()
            //set the form fields to empty after form submission.
            setTitle('');
            setDescription('');
            setPrice('');
            setImage(null);
            setCategory('')
        }
        catch (error) {
          console.error("Error adding document:",error);
          alert('Error Adding Product!')
        }
      })
  });
 
  nav("/")
} 
//fetch data from firebase so that refresh won't be needed after navigation.
 const getdata = async () => {
    try {
      const docsnap = await getDocs(collection(textData, 'Products'));
      const data = docsnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch(setProducts(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <Container>
        <Row >
          <Col className='d-flex justify-content-center flex-column align-items-center mt-5 mb-3'>
            <h2 className='text-center '> Add Products</h2>
            <hr className='w-100'>
            </hr>
           <Form  onSubmit={handleSubmit}>
        <Form.Group >
                    <Form.Label >Image</Form.Label>
                    <Form.Control 
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange}
                        required
                    />
                </Form.Group>

            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                
                type='text'
                value={title}
                onChange={e=> setTitle(e.target.value)}
                required/>
            </Form.Group>
            <Form.Group>
                <Form.Label >Description</Form.Label>
                <Form.Control 
                
                as='textarea' 
                rows={4}
                value={description}
                onChange={e=> setDescription(e.target.value)}
                required/>
            </Form.Group>
            <Form.Group>
                <Form.Label >Price</Form.Label>
                <Form.Control 
                
                type='text'
                value={price}
                onChange={e=> setPrice(e.target.value)}
                required/>
            </Form.Group>

            <Form.Group className='mt-3 text-center d-flex justify-content-between'>
                
                <select 
                title='Category'  
                value={category}
                onChange={e=> setCategory(e.target.value)}
                required
                >
                    <option value="">
                         select category
                    </option>
                    <option value="watches">
                         Watches
                    </option>
                    <option value="mobiles">
                         Mobiles
                    </option>
                    <option value="pakistan">
                         PakistaniProduct
                    </option>
                </select>
                <Button
                variant='warning'
                size='sm'
                type='submit'
                >
                    Add Product
                </Button>
            </Form.Group>
        </Form>
            
           </Col>
           
        </Row>


      </Container>
  )
};