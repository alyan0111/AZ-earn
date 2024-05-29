import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bar from './components/nav-footer/nav';
import Home from './pages/home';
import MyFooter from './components/nav-footer/footer';
import AddProduct from './pages/addProduct';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { textData } from './firebase';
import { setProducts } from './redux/action';
import Chat from './components/chat/chat';



export default function App() {
  const dispatch = useDispatch();
 
    useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const docsnap = await getDocs(collection(textData, 'Products'));
      const data = docsnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    

    <BrowserRouter>
    <Bar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/chat2' element={<Chat/>}/>

      
    </Routes>
    <MyFooter/>
    </BrowserRouter>
  
      
  )
};
