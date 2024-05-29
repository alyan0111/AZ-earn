import React, { useState, useEffect } from 'react';
import { textData } from '../../firebase';
import { collection, addDoc, serverTimestamp, onSnapshot, query, where, orderBy } from "firebase/firestore";

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(textData, "messages"),
      where("id", "==", "1"),
      orderBy("timestamp", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data().text })));
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  

  const sendMessage = async (e) => {
    e.preventDefault();

    await addDoc(collection(textData, "messages"), {
      id: "1",
      text,
      timestamp: serverTimestamp(),
    });

    setText('');
  };

  return (
    <div>
      <h1>Real-time Chat</h1>
      <ul>
        {messages.map(({ id, message }) => (
          <li key={id}>{message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
