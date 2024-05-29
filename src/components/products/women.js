// import React, {  useEffect, useState } from 'react';
// import { Row } from 'react-bootstrap';
// import '../nav.css';
// import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
// import { textData } from '../../firebase';
// import MyCard from '../card/card';


// export default function Women() {
//   const [watches,setWatches]=useState([]);

//   useEffect(()=>{
//     getdata();
//   },[]);

//   const getdata= async ()=> {
//     try{
      
//       const docdata=collection(textData,'watches');
      
//       const docsnap= await getDocs(docdata);
//       const data = docsnap.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setWatches(data);
      
//     }catch(error){
//       console.log(error);
//     }
//   };
  
// //   const handleDelete=async(id)=>{
// //     try{
// //         const docRef=doc(collection(textData, "watches"), id);
// //         await deleteDoc(docRef);
// //         alert("card deleted successfully");
// //         getdata()
// //     }
// //     catch (error){
// //         console.log("error deleting data", error);
// //     }
// // }
//   return (
//     <Row>
//       {watches.map((e, index) => (
//         <MyCard /*delete={()=>handleDelete(e.id)}*/ key={e.id || index} item={e} collectionName='watches'/>
//       ))}
//     </Row>
//   );
// }
