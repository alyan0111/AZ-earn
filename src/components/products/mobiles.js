// import React, { useEffect, useState } from 'react';
// import { Row } from 'react-bootstrap';
// import '../nav.css';
// import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
// import { textData } from '../../firebase';
// import MyCard from '../card/card';

// export default function Mobiles() {
//   const [mobile, setMobile] = useState([]);

//   useEffect(() => {
//     getdata();
//   }, []);

//   const getdata = async () => {
//     try {
//       const docsnap = await getDocs(collection(textData, 'mobiles'));
//       const data = docsnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setMobile(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete=async(id)=>{
//     try{
//         const docRef=doc(collection(textData, "mobiles"), id);
//         await deleteDoc(docRef);
//         getdata()
//         alert("card deleted successfully");
       
// //     }
// //     catch (error){
// //         console.log("error deleting data", error);
// //     }
// // }
//   return (
//     <Row>
//       {mobile.map((e, index) => (
//         <MyCard  /*delete={()=>handleDelete(e.id)}*/ key={e.id || index} item={e} collectionName='mobiles' />
//       ))}
//     </Row>
//   );
// }
