// import React, { useEffect, useState } from 'react';
// import {Row } from 'react-bootstrap';
// import '../nav.css';
// import MyCard from '../card/card';
// import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
// import { textData } from '../../firebase';

// export default function Pakistan() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     getdata();
//   }, []);

//   const getdata = async () => {
//     try {
//       const docsnap = await getDocs(collection(textData, 'Pakistani-Product'));
//       const data = docsnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setProduct(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// //   const handleDelete=async(id)=>{
// //     try{
// //         const docRef=doc(collection(textData, "Pkaistani-Products"), id);
// //         await deleteDoc(docRef);
// //         getdata()
// //         alert("card deleted successfully");
       
// //     }
// //     catch (error){
// //         console.log("error deleting data", error);
// //     }
// // }
//   return (
//     <Row>
//       {product.map((e, index) => (
//         <MyCard /*delete={()=>handleDelete(e.id)}*/ key={e.id || index} item={e} collectionName='Pakistani-Products' />
//       ))}
//     </Row>
//   );
// }
