import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
  // ... your config here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function FirestoreDemo() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const querySnapshot = await getDocs(collection(db, 'messages'));
    const fetchedMessages = querySnapshot.docs.map(doc => doc.data().text);
    setMessages(fetchedMessages);
  };

  const addMessage = async () => {
    if (newMessage.trim() !== '') {
      await addDoc(collection(db, 'messages'), { text: newMessage });
      setNewMessage('');
      fetchMessages();
    }
  };

  return (
    <div>
      <h2>Firestore Demo</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Enter a new message"
      />
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default FirestoreDemo;